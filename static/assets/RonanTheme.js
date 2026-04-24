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
        
        /* 主体布局 */
        body {
            min-width: 200px;
            max-width: 885px;
            margin: 30px auto;
            font-size: 16px;
            font-family: sans-serif;
            line-height: 1.25;
            /* 液态玻璃效果 */
            background: rgba(255, 255, 255, 0.25);
            backdrop-filter: blur(20px) saturate(180%);
            -webkit-backdrop-filter: blur(20px) saturate(180%);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 10px;
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
            overflow: auto;
        }

        /* 主页博客列表圆角边框 */
        .SideNav {
            background: rgba(255, 255, 255, 0.6);
            border-radius: 10px;
            min-width: unset;
        }

        /* 鼠标放到博客标题后会高亮 */
        .SideNav-item:hover {
         background:linear-gradient(90deg, 
    #ffffff 0%, 
    #fff8e7 50%, 
    #ffe4a1 100%
  ) ;
            border-radius: 10px;
            transform: scale(1.04);
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        }

        .SideNav-item {
            transition: 0.1s;
        }

        /* 分页条 */
        .pagination a:hover, .pagination a:focus, .pagination span:hover, .pagination span:focus, .pagination em:hover, .pagination em:focus {
            border-color: rebeccapurple;
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

        /* 主体布局 */
        body {
            min-width: 200px;
            max-width: 883px;
            margin: 30px auto;
            font-size: 16px;
            font-family: sans-serif;
            line-height: 1.25;
            /* 液态玻璃效果 */
            background: rgba(255, 255, 255, 0.25);
            backdrop-filter: blur(20px) saturate(180%);
            -webkit-backdrop-filter: blur(20px) saturate(180%);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 10px;
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
            overflow: auto;
        }

        /* markdown内容 */
        /* 图片圆角 */
        .markdown-body img {
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.78); 
        }
        
        /* notice、caution、warning等提示信息的圆角 */
        .markdown-alert {
            border-radius: 8px;
        }
        
        /* 代码块 */
        .markdown-body .highlight pre, .markdown-body pre {
            color: rgb(0, 0, 0);
            background-color: rgba(243, 244, 243, 0.967);
            box-shadow: 0 10px 30px 0 rgba(222, 217, 217, 0.4);
            padding-top: 20px; 
            border-radius: 8px;
        }

        /* 标题橙色包裹 */
        .markdown-body h1{
          display: inline-block;
          font-size: 1.3rem;
          font-weight: bold;
          background: rgb(239, 112, 96);
          color: #ffffff;
          padding: 3px 10px ;
          border-radius: 8px;
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
        }

        /* 主体布局 */
        body {
            min-width: 200px;
            max-width: 885px;
            margin: 30px auto;
            font-size: 16px;
            font-family: sans-serif;
            line-height: 1.25;
            /* 液态玻璃效果 */
            background: rgba(255, 255, 255, 0.25);
            backdrop-filter: blur(20px) saturate(180%);
            -webkit-backdrop-filter: blur(20px) saturate(180%);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 10px;
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
            overflow: auto;
        }
        
        .SideNav {
            background: rgba(255, 255, 255, 0.6);
            border-radius: 10px;
            min-width: unset;
        }
        
        .SideNav-item:hover {
            background:linear-gradient(90deg, 
    #ffffff 0%, 
    #fff8e7 50%, 
    #ffe4a1 100%
  ) ;
            border-radius: 10px;
            transform: scale(1.02);
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        }
        
        .SideNav-item {
            transition: 0.1s;
        }
        
        .subnav-search-input {
            border-radius: 2em;
            float: unset !important;
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
        input.addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                button.click();
            }
        });
    }
})
