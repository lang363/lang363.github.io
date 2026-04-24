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
        }
        
        /* 主体布局 - 液态玻璃效果 */
        body {
            min-width: 200px;
            max-width: 885px;
            margin: 30px auto;   /*设置所有外边距离 */
            font-size: 16px;
            font-family: sans-serif;
            line-height: 1.25;
            background: rgba(237, 239, 233, 0.4); 
            backdrop-filter: blur(12px) saturate(180%);
            -webkit-backdrop-filter: blur(12px) saturate(180%);
            border-radius: 20px; /* 圆角边框 */
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3);
            overflow: auto;
            border: 1px solid rgba(255, 255, 255, 0.3);
        }

        /* 主页博客列表圆角边框 - 液态玻璃效果 */
        .SideNav {
            background: rgba(255, 255, 255, 0.25); 
            backdrop-filter: blur(8px) saturate(150%);
            -webkit-backdrop-filter: blur(8px) saturate(150%);
            border-radius: 16px; /* 圆角边框 */
            min-width: unset;
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        /* 鼠标放到博客标题后会高亮 - 液态玻璃悬浮效果 */
        .SideNav-item:hover {
            background: rgba(255, 255, 255, 0.4);
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
            border-radius: 12px;
            transform: scale(1.02);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.5);
            border: 1px solid rgba(255, 255, 255, 0.4);
        }

        .SideNav-item {
            transition: all 0.2s cubic-bezier(0.2, 0.9, 0.4, 1.1);
            border-radius: 12px;
            margin: 4px 0;
        }

        /* 分页条 - 液态玻璃效果 */
        .pagination a:hover, .pagination a:focus, .pagination span:hover, .pagination span:focus, .pagination em:hover, .pagination em:focus {
            border-color: rgba(255, 255, 255, 0.6);
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(4px);
            border-radius: 8px;
        }
        `;
        document.head.appendChild(style);}


    //文章页主题------------------------------------------------------------------------------
    
    else if (currentUrl.includes('/post/') || currentUrl.includes('/link.html') || currentUrl.includes('/about.html')) {
        console.log('文章页主题');

        let style = document.createElement("style");
        style.innerHTML = `

        html {    
            background: url('/pictures/bg2.jpeg') no-repeat center center fixed;
            background-size: cover;
        }

        /* 主体布局 - 液态玻璃效果 */
        body {
            min-width: 200px;
            max-width: 883px;
            margin: 30px auto;   /*设置所有外边距离 */
            font-size: 16px;
            font-family: sans-serif;
            line-height: 1.25;
            background: rgba(237, 239, 233, 0.4); 
            backdrop-filter: blur(12px) saturate(180%);
            -webkit-backdrop-filter: blur(12px) saturate(180%);
            border-radius: 20px; /* 圆角边框 */
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3);
            overflow: auto;
            border: 1px solid rgba(255, 255, 255, 0.3);
        }

        /* markdown内容 */
        /* 图片圆角 + 液态玻璃浅边框 */
        .markdown-body img {
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.5);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        /* notice、caution、warning等提示信息的圆角 + 液态玻璃 */
        .markdown-alert {
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(4px);
            border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        /* 代码块 - 液态玻璃 */
        .markdown-body .highlight pre, .markdown-body pre {
            color: rgb(0, 0, 0);          /* 代码块内代码颜色 */
            background-color: rgba(243, 244, 243, 0.85);
            backdrop-filter: blur(4px);
            box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.2);
            padding-top: 20px; 
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.4);
        }

        /* 标题橙色包裹 - 增强液态质感 */
        .markdown-body h1{
          display: inline-block;
          font-size: 1.3rem;
          font-weight: bold;
          background: rgba(239, 112, 96, 0.85);
          backdrop-filter: blur(4px);
          color: #ffffff;
          padding: 3px 10px ;
          border-radius: 12px;
          margin-right: 2px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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

        /* 主体布局 - 液态玻璃效果 */
        body {
            min-width: 200px;
            max-width: 885px;
            margin: 30px auto;   /*设置所有外边距离 */
            font-size: 16px;
            font-family: sans-serif;
            line-height: 1.25;
            background: rgba(237, 239, 233, 0.4); 
            backdrop-filter: blur(12px) saturate(180%);
            -webkit-backdrop-filter: blur(12px) saturate(180%);
            border-radius: 20px; /* 圆角边框 */
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3);
            overflow: auto;
            border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .SideNav {
            background: rgba(255, 255, 255, 0.25); 
            backdrop-filter: blur(8px) saturate(150%);
            -webkit-backdrop-filter: blur(8px) saturate(150%);
            border-radius: 16px; /* 圆角边框 */
            min-width: unset;
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .SideNav-item:hover {
            background: rgba(255, 255, 255, 0.4);
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
            border-radius: 12px;
            transform: scale(1.02);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.5);
            border: 1px solid rgba(255, 255, 255, 0.4);
        }
        
        .SideNav-item {
            transition: all 0.2s cubic-bezier(0.2, 0.9, 0.4, 1.1);
            border-radius: 12px;
        }
        
        .subnav-search-input {
            border-radius: 2em;
            float: unset !important;
            background: rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(4px);
            border: 1px solid rgba(255, 255, 255, 0.4);
            color: #333;
        }
        
        .subnav-search-icon {
            top: 9px;
            opacity: 0.7;
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
})
