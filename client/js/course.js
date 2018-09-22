var $eleBtn1 = $("#btn1");
        var $eleBtn2 = $("#btn2");

        //已知一个下载文件的后端接口：https://codeload.github.com/douban/douban-client/legacy.zip/master
        //方法一：window.open()
        $eleBtn1.click(function(){

            window.open("http://localhost:63342/SandKing-CSE-Hackathon/client/login.html");
        });
        //方法二：通过form
        $eleBtn2.click(function(){
            var $eleForm = $("<form method='get'></form>");

            $eleForm.attr("action","https://codeload.github.com/douban/douban-client/legacy.zip/master");

            $(document.body).append($eleForm);

            //提交表单，实现下载
            $eleForm.submit();
        });