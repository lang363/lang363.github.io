document.addEventListener('DOMContentLoaded', function() {    
    let currentUrl = window.location.pathname;

    //主页主题------------------------------------------------------------------------------
    
    if (currentUrl == '/' || currentUrl.includes('/index.html') || currentUrl.includes('/page')) {
        console.log('应用主页主题');
        let style = document.createElement("style");
        style.innerHTML = `
        html {    
            background: url('/pictures/bg2.jpeg') no-repeat center center fixed;
            background-size: cover;
        }
        
        /* 主体布局 */
        body {
            min-width: 200px;
            max-width: 885px;
            margin: 30px auto;
            font-size: 16px;
            font-family: sans-serif;
            line-height: 1.25;
            background: linear-gradient(135deg, rgba(237, 239, 233, 0.4) 0%, rgba(237, 239, 233, 0.25) 100%);
            backdrop-filter: blur(20px) saturate(180%);
            -webkit-backdrop-filter: blur(20px) saturate(180%);
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.5);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.4);
            overflow: auto;
        }

        /* 主页博客列表圆角边框 */
        .SideNav {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.15) 100%);
            backdrop-filter: blur(15px) saturate(160%);
            -webkit-backdrop-filter: blur(15px) saturate(160%);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.4);
            min-width: unset;
        }

        /* 鼠标放到博客标题后会高亮 */
        .SideNav-item:hover {
            background: linear-gradient(90deg, rgba(255,255,255,0.6) 0%, rgba(255,248,231,0.5) 50%, rgba(255,228,161,0.4) 100%);
            backdrop-filter: blur(10px);
            border-radius: 10px;
            transform: scale(1.04);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255,255,255,0.4);
        }

        .SideNav-item {
            transition: 0.3s;
        }

        /* 分页条 */
        .pagination a:hover, .pagination a:focus, .pagination span:hover, .pagination span:focus, .pagination em:hover, .pagination em:focus {
            border-color: rebeccapurple;
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
        }

        /* 主体布局 */
        body {
            min-width: 200px;
            max-width: 883px;
            margin: 30px auto;
            font-size: 16px;
            font-family: sans-serif;
            line-height: 1.25;
            background: linear-gradient(135deg, rgba(237, 239, 233, 0.4) 0%, rgba(237, 239, 233, 0.25) 100%);
            backdrop-filter: blur(20px) saturate(180%);
            -webkit-backdrop-filter: blur(20px) saturate(180%);
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.5);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.4);
            overflow: auto;
        }

        /* markdown内容 */
        /* 图片圆角 */
        .markdown-body img {
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.5);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.3);
        }
        
        /* notice、caution、warning等提示信息的圆角 */
        .markdown-alert {
            border-radius: 8px;
            backdrop-filter: blur(10px) saturate(150%);
            -webkit-backdrop-filter: blur(10px) saturate(150%);
            background: rgba(255, 255, 255, 0.4) !important;
            border: 1px solid rgba(255, 255, 255, 0.4) !important;
        }
        
        /* 代码块 */
        .markdown-body .highlight pre, .markdown-body pre {
            color: rgb(0, 0, 0);
            background: linear-gradient(145deg, rgba(250, 250, 252, 0.9) 0%, rgba(243, 244, 243, 0.85) 100%);
            backdrop-filter: blur(15px) saturate(150%);
            -webkit-backdrop-filter: blur(15px) saturate(150%);
            box-shadow: 0 8px 32px rgba(222, 217, 217, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.5);
            padding-top: 20px; 
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.5);
        }

        /* 标题橙色包裹 */
        .markdown-body h1 {
            display: inline-block;
            font-size: 1.3rem;
            font-weight: bold;
            background: linear-gradient(135deg, rgba(239, 112, 96, 0.9) 0%, rgba(239, 112, 96, 0.7) 100%);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            color: #ffffff;
            padding: 3px 10px;
            border-radius: 8px;
            margin-right: 2px;
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 4px 12px rgba(239, 112, 96, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.3);
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
        }

        /* 主体布局 */
        body {
            min-width: 200px;
            max-width: 885px;
            margin: 30px auto;
            font-size: 16px;
            font-family: sans-serif;
            line-height: 1.25;
            background: linear-gradient(135deg, rgba(237, 239, 233, 0.4) 0%, rgba(237, 239, 233, 0.25) 100%);
            backdrop-filter: blur(20px) saturate(180%);
            -webkit-backdrop-filter: blur(20px) saturate(180%);
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.5);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.4);
            overflow: auto;
        }
        
        .SideNav {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.15) 100%);
            backdrop-filter: blur(15px) saturate(160%);
            -webkit-backdrop-filter: blur(15px) saturate(160%);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.4);
            min-width: unset;
        }
        
        .SideNav-item:hover {
            background: linear-gradient(90deg, rgba(255,255,255,0.6) 0%, rgba(255,248,231,0.5) 50%, rgba(255,228,161,0.4) 100%);
            backdrop-filter: blur(10px);
            border-radius: 10px;
            transform: scale(1.02);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255,255,255,0.4);
        }
        
        .SideNav-item {
            transition: 0.3s;
        }
        
        .subnav-search-input {
            border-radius: 2em;
            float: unset !important;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%) !important;
            backdrop-filter: blur(15px) saturate(160%);
            -webkit-backdrop-filter: blur(15px) saturate(160%);
            border: 1px solid rgba(255, 255, 255, 0.5) !important;
            box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.3), 0 4px 12px rgba(0, 0, 0, 0.08) !important;
        }
        
        .subnav-search-icon {
            top: 9px;
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
        if (input && button) {
            input.addEventListener("keyup", function(event) {
                event.preventDefault();
                if (event.keyCode === 13) {
                    button.click();
                }
            });
        }
    }
});
