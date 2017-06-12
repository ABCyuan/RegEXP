window.onload=function () {
    /*字符长度函数*/
    function getLength(str) {
        return str.replace(/[^\x00-xff]/g,"xx").length;
    };
    /*统计是否全部相同*/
    function findfStr(str,n) {
        var tmp=0;
        for(var i=0;i<str.length;i++){
            if(str.charAt(i)==n){
                tmp++;
            }
        }
        return tmp;
    };
    var inpt=document.getElementsByTagName("input");
    var sp=document.getElementsByTagName("span");
    var sign=document.getElementsByTagName("em");
    var count=document.getElementsByTagName("p");
    var name_length=0;
    inpt[0].onfocus=function () {
        sp[0].innerHTML='5-25个字符，一个汉字为两个字符，推荐使用中文会员名';

    };
    inpt[0].onkeyup=function () {
        name_length=getLength(this.value);
        count[0].innerHTML=name_length+"字符";
        if(name_length==0){
            count[0].style.visibility="hidden"
        }
    };
    inpt[0].onblur=function () {
        var re=/[^\w\u4e00-\u9fa5]/g;//姓名输入框正则
        if(re.test(this.value)){
            sp[0].innerHTML="对不起。不能含有非法字符";
        }
        else if(this.value==""){
            sp[0].innerHTML="对不起不能为空";
        }
        else if(name_length>25){
            sp[0].innerHTML="对不起超出字数限制";
        }
        else if(name_length<6){
            sp[0].innerHTML="对不起不能少于5个字符";
        }
        else {
            sp[0].innerHTML="OK"
        }
    };
    inpt[1].onblur=function () {
        var re_e=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/g;//邮箱正则
        if(!re_e.test(this.value)){
            sp[1].innerHTML="请输入正确的邮箱地址";
        }else {
            email_mesage.innerHTML="OK";
        }
    }
    inpt[2].onfocus=function () {
        sp[2].innerHTML='6-16个字符，请使用数字、字母、符号组合的密码';
    };
    inpt[2].onkeyup=function () {
        if(this.value.length>5){
            sign[1].className="active";
            if(this.value.length>12){
                sign[2].className="active"
            }
            else {
                sign[2].className="";
            };
        }
        else {
            {
                sign[1].className="";
            }
        };
    };
    inpt[2].onblur=function () {
        var m=findfStr(inpt[2].value,inpt[2].value[0]);
        var re_n=/[^\d]/g;//数字正则
        var re_t=/[^a-z]/ig;//字母正则
        if(this.value==""){
            sp[2].innerHTML="对不起密码不能为空";
        }
        else if(m==this.value.length){
            sp[2].innerHTML="不能全部输入一样的字符";
        }
        else if(this.value.length<6||this.value.length>18){
            sp[2].innerHTML="密码只能6-18个字符";
        }
        else if(!re_n.test(this.value)){
            sp[2].innerHTML="密码不能全为数字";
        }
        else if(!re_t.test(this.value)){
            sp[2].innerHTML="密码不能全为字母";
        }
        else {
            sp[2].innerHTML="OK";
            inpt[3].removeAttribute("disabled");
        }
    };
    inpt[3].onblur=function () {
        if(this.value!=inpt[2].value){
            sp[3].innerHTML="对不起前后密码不一致";
        }
        else {
            sp[3].innerHTML="OK";
        }
    };
}
