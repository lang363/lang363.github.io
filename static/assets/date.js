(function() {
    let checkCount = 0;
    const run = () => {
        const c = document.getElementById('cmButton');
        // 等待评论按钮出现，最多尝试 10 秒
        if (!c) {
            if (checkCount++ < 20) setTimeout(run, 500); 
            return;
        }
        // 防止重复加载
        if (document.getElementById('customLabels')) return;

        const p = window.location.pathname;
        const u = window.location.href;

        // 1. 抓取 RSS：处理日期与上下篇链接
        fetch("/rss.xml").then(r => r.text()).then(x => {
            const d = new DOMParser().parseFromString(x, "text/xml");
            const items = Array.from(d.querySelectorAll("item"));
            let idx = -1;

            // 匹配当前文章在 RSS 中的索引
            for (let i = 0; i < items.length; i++) {
                const link = items[i].querySelector("link").textContent;
                if (link.indexOf(p) !== -1 || p.indexOf(link) !== -1 || link === u) {
                    idx = i;
                    break;
                }
            }

            if (idx === -1) return;

            // 格式化发布日期
            const pub = new Date(items[idx].querySelector("pubDate").textContent);
            const dt = pub.getFullYear() + '-' + (pub.getMonth() + 1) + '-' + pub.getDate();

            const box = document.createElement('div');
            box.style.cssText = "margin-top:30px;padding-top:20px;border-top:1px solid var(--color-border-default);clear:both;font-size:14px;";
            
            let h = '<div style="color:var(--color-fg-muted);margin-bottom:15px;">📅 发布日期：' + dt + '</div><div style="display:flex;flex-direction:column;gap:10px;">';
            
            // 上一篇 (索引越小越新)
            if (idx > 0) {
                h += '<div><span style="color:var(--color-fg-muted);">← 上一篇：</span><a href="' + items[idx - 1].querySelector("link").textContent + '" style="color:var(--color-accent-fg);text-decoration:none;">' + items[idx - 1].querySelector("title").textContent + '</a></div>';
            }
            // 下一篇
            if (idx < items.length - 1) {
                h += '<div><span style="color:var(--color-fg-muted);">→ 下一篇：</span><a href="' + items[idx + 1].querySelector("link").textContent + '" style="color:var(--color-accent-fg);text-decoration:none;">' + items[idx + 1].querySelector("title").textContent + '</a></div>';
            }
            h += '</div>';
            box.innerHTML = h;
            c.before(box);

            // 2. 抓取标签：通过首页列表获取
            const s = (url) => {
                fetch(url).then(r => r.text()).then(ht => {
                    const doc = new DOMParser().parseFromString(ht, "text/html");
                    const pathName = p.split('/').pop();
                    
                    // 匹配首页中对应文章的链接
                    const exactSelector = "a[href$='/" + pathName + "']";
                    const postEntry = doc.querySelector(exactSelector);
                    const container = postEntry ? postEntry.closest('.SideNav-item') : null;
                    
                    if (container) {
                        const b = document.createElement('div');
                        b.id = "customLabels";
                        b.style.cssText = "margin-top:15px;margin-bottom:15px;display:flex;flex-wrap:wrap;gap:8px;align-items:center;";
                        b.innerHTML = '<span style="color:var(--color-fg-muted);font-size:14px;">本文标签：</span>';

                        // 核心改进：只选择 class 为 LabelName 的 span，排除单纯的 Label(评论数) 和 LabelTime(日期)
                        container.querySelectorAll("span.LabelName").forEach(l => {
                            const t = l.innerText.trim();
                            if (t) {
                                const a = document.createElement('a');
                                a.href = "/tag.html#" + t;
                                a.innerText = t;
                                
                                // 获取首页标签的背景颜色
                                const temp = document.body.appendChild(l.cloneNode(true));
                                temp.style.display = "none";
                                const bg = window.getComputedStyle(temp).backgroundColor;
                                document.body.removeChild(temp);
                                
                                a.style.cssText = "background-color:" + bg + ";color:#fff;padding:2px 10px;border-radius:20px;font-size:12px;text-decoration:none;display:inline-block;";
                                b.appendChild(a);
                            }
                        });
                        // 只有抓取到标签时才插入
                        if (b.children.length > 1) c.before(b);
                    } else {
                        // 没找到则继续翻页寻找
                        const n = doc.querySelector('.pagination a:last-child, a[rel="next"]');
                        if (n && n.getAttribute('href') && n.getAttribute('href') !== url) s(n.getAttribute('href'));
                    }
                });
            };
            s("/index.html");
        });
    };
    run();
})();


