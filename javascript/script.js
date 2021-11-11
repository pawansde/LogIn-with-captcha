function captcha()
{

    var text =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];

    var a =text[Math.floor(Math.random()*62)];
    var b =text[Math.floor(Math.random()*62)];
    var c =text[Math.floor(Math.random()*62)];
    var d =text[Math.floor(Math.random()*62)];
    var e =text[Math.floor(Math.random()*62)];

    var sum=a+b+c+d+e;
    document.getElementById('captcha1').value=sum;

}

function valid()
{

    var str1 = document.getElementById('captcha1').value;
    var str2 = document.getElementById('captcha2').value;

    if(str1==str2)
    {
        alert("Login Successfull");
        location.reload();
    }
    else
    {
        alert("wrong Captcha");
        location.reload();
    }


}
