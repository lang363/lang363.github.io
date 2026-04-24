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
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(16px) saturate(140%);
            -webkit-backdrop-filter: blur(16px) saturate(140%);
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.25);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
            overflow: auto;
        }

        /* 主页博客列表 */
        .SideNav {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(12px) saturate(130%);
            -webkit-backdrop-filter: blur(12px) saturate(130%);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            min-width: unset;
        }

        /* 鼠标放到博客标题后会高亮 */
        .SideNav-item:hover {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(8px);
            border-radius: 10px;
            transform: scale(1.04);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        }

        .SideNav-item {
            transition: 0.1s;
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
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(16px) saturate(140%);
            -webkit-backdrop-filter: blur(16px) saturate(140%);
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.25);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
            overflow: auto;
        }

        /* markdown内容 */
        /* 图片圆角 */
        .markdown-body img {
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        }
        
        /* notice、caution、warning等提示信息的圆角 */
        .markdown-alert {
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.08) !important;
            backdrop-filter: blur(10px) saturate(130%);
            -webkit-backdrop-filter: blur(10px) saturate(130%);
            border: 1px solid rgba(255, 255, 255, 0.2) !important;
        }
        
        /* 代码块 */
        .markdown-body .highlight pre, .markdown-body pre {
            color: rgb(0, 0, 0);
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px) saturate(130%);
            -webkit-backdrop-filter: blur(10px) saturate(130%);
            box-shadow: 0 10px 30px 0 rgba(222, 217, 217, 0.2);
            padding-top: 20px; 
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.25);
        }

        /* 标题橙色包裹 */
        .markdown-body h1 {
            display: inline-block;
            font-size: 1.3rem;
            font-weight: bold;
            background: rgba(239, 112, 96, 0.85);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            color: #ffffff;
            padding: 3px 10px;
            border-radius: 8px;
            margin-right: 2px;
            border: 1px solid rgba(255, 255, 255, 0.3);
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
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(16px) saturate(140%);
            -webkit-backdrop-filter: blur(16px) saturate(140%);
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.25);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
            overflow: auto;
        }
        
        .SideNav {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(12px) saturate(130%);
            -webkit-backdrop-filter: blur(12px) saturate(130%);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            min-width: unset;
        }
        
        .SideNav-item:hover {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(8px);
            border-radius: 10px;
            transform: scale(1.02);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        }
        
        .SideNav-item {
            transition: 0.1s;
        }
        
        .subnav-search-input {
            border-radius: 2em;
            float: unset !important;
            background: rgba(255, 255, 255, 0.1) !important;
            backdrop-filter: blur(10px) saturate(130%);
            -webkit-backdrop-filter: blur(10px) saturate(130%);
            border: 1px solid rgba(255, 255, 255, 0.3) !important;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08) !important;
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
