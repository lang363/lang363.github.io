document.addEventListener('DOMContentLoaded', function() {    
    let currentUrl = window.location.pathname;
    //let currentHost = window.location.hostname;

    //主页主题------------------------------------------------------------------------------
    
    if (currentUrl == '/' || currentUrl.includes('/index.html') || currentUrl.includes('/page')) {
        console.log('应用主页主题');
        let style = document.createElement("style");
        style.innerHTML = `
        html {    
            background: url('/pictures/bg2.jpeg') no-repeat center center fixed;
            background-size: cover;
            backdrop-filter: blur(10px);
        }
        
        /* 主体布局 液态玻璃 */
        body {
            min-width: 200px;
            max-width: 885px;
            margin: 30px auto;
            font-size: 16px;
            font-family: sans-serif;
            line-height: 1.25;
            background: rgba(255, 255, 255, 0.25);
            backdrop-filter: blur(12px) saturate(180%);
            -webkit-backdrop-filter: blur(12px) saturate(180%);
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            overflow: auto;
        }

        /* 主页博客列表 液态玻璃 */
        .SideNav {
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px) saturate(160%);
            -webkit-backdrop-filter: blur(10px) saturate(160%);
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.25);
            min-width: unset;
        }

        /* 鼠标放到博客标题后液态高亮 */
        .SideNav-item:hover {
            background: rgba(255, 255, 255, 0.4);
            backdrop-filter: blur(6px) saturate(180%);
            -webkit-backdrop-filter: blur(6px) saturate(180%);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.4);
            transform: scale(1.04);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .SideNav-item {
            transition: all 0.25s ease;
        }

        /* 分页条 */
        .pagination a:hover, .pagination a:focus,
        .pagination span:hover, .pagination span:focus,
        .pagination em:hover, .pagination em:focus {
            border-color: rgba(255, 255, 255, 0.6);
            background: rgba(255, 255, 255, 0.25);
            backdrop-filter: blur(4px);
        }
        `;
        document.head.appendChild(style);
    }


    //文章页主题------------------------------------------------------------------------------
    
    else if (currentUrl.includes('/post/') || currentUrl.includes('/link.html') || currentUrl.includes('/about.html')) {
        console.log('文章页主题');

        let style = document.createElement("style");
        style.innerHTML = `
        html {    
            background: url('/pictures/bg2.jpeg') no-repeat center center fixed;
            background-size: cover;
            backdrop-filter: blur(10px);
        }

        /* 主体布局 液态玻璃 */
        body {
            min-width: 200px;
            max-width: 883px;
            margin: 30px auto;
            font-size: 16px;
            font-family: sans-serif;
            line-height: 1.25;
            background: rgba(255, 255, 255, 0.25);
            backdrop-filter: blur(12px) saturate(180%);
            -webkit-backdrop-filter: blur(12px) saturate(180%);
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            overflow: auto;
        }

        /* markdown内容 */
        /* 图片液态玻璃边框 */
        .markdown-body img {
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.4);
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(4px);
        }
        
        /* 提示信息液态玻璃 */
        .markdown-alert {
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(8px) saturate(150%);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.25);
        }
        
        /* 代码块 液态磨砂 */
        .markdown-body .highlight pre,
        .markdown-body pre {
            color: #222;
            background: rgba(255, 255, 255, 0.35);
            backdrop-filter: blur(10px) saturate(160%);
            -webkit-backdrop-filter: blur(10px) saturate(160%);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
            padding-top: 20px;
        }

        /* 标题液态玻璃包裹 */
        .markdown-body h1 {
            display: inline-block;
            font-size: 1.3rem;
            font-weight: bold;
            background: rgba(239, 112, 96, 0.85);
            backdrop-filter: blur(6px);
            color: #fff;
            padding: 4px 12px;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            margin-right: 2px;
        }
        `;
        document.head.appendChild(style);
    } 


    // 搜索页主题--------------------------------------------------------------------
    
    else if (currentUrl.includes('/tag')) {
        console.log('应用搜索页主题');
        let style = document.createElement("style");
        style.innerHTML = `
        html {    
            background: url('/pictures/bg2.jpeg') no-repeat center center fixed;
            background-size: cover;
            backdrop-filter: blur(10px);
        }

        /* 主体布局 液态玻璃 */
        body {
            min-width: 200px;
            max-width: 885px;
            margin: 30px auto;
            font-size: 16px;
            font-family: sans-serif;
            line-height: 1.25;
            background: rgba(255, 255, 255, 0.25);
            backdrop-filter: blur(12px) saturate(180%);
            -webkit-backdrop-filter: blur(12px) saturate(180%);
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            overflow: auto;
        }
        
        .SideNav {
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px) saturate(160%);
            -webkit-backdrop-filter: blur(10px) saturate(160%);
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.25);
            min-width: unset;
        }
        
        .SideNav-item:hover {
            background: rgba(255, 255, 255, 0.4);
            backdrop-filter: blur(6px) saturate(180%);
            -webkit-backdrop-filter: blur(6px) saturate(180%);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.4);
            transform: scale(1.02);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        .SideNav-item {
            transition: all 0.25s ease;
        }
        
        /* 搜索框液态玻璃 */
        .subnav-search-input {
            background: rgba(255, 255, 255, 0.25);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 2em;
            color: #222;
            float: unset !important;
        }
        
        .subnav-search-input:focus {
            background: rgba(255, 255, 255, 0.35);
            border-color: rgba(255, 255, 255, 0.5);
            outline: none;
        }
        
        .subnav-search-icon {
            top: 9px;
            filter: brightness(1.2);
        }
        
        button.btn.float-left {
            display: none;
        }
        
        .subnav-search {
            width: unset; 
            height: 36px;
        }
        `;
        document.head.appendChild(style);
    
        // 搜索框回车触发
        let input = document.getElementsByClassName("form-control subnav-search-input float-left")[0];
        let button = document.getElementsByClassName("btn float-left")[0];
        input.addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                button.click();
            }
        });
    }
})
