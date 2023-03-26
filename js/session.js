
//giriþ ve kayýt ol- kullanýcý ismi görünmesi


function checkLogin() {

    var isLogin = sessionStorage.getItem("isLogin");

    var user = sessionStorage.getItem("user");

    if (user) {
        user = user.split(",");

        var username = user[0];



        if (isLogin == "true") {



            $("#btndiv").attr('style', 'display:none !important');
            document.getElementById("header_sag").innerHTML = "<i class='fa-regular fa-user'  aria-hidden='true'></i> &nbsp;" + username + "  &nbsp; ";
            $("#logout_btn").attr('style', 'display:block !important');

        }
    }
    
}

function logOut() {

    var isLogin = sessionStorage.getItem("isLogin");

    isLogin = false;

    sessionStorage.setItem("isLogin", isLogin);
    $("#logout_btn").attr('style', 'display:none !important');

    location.reload();

}


//ENGEL DURUMU VAR ÝSE TEXTAREA AÇILSIN
function acKapat() {

    var textarea = document.getElementById("exampleFormControlTextarea1");
    if (document.getElementById('engel').checked) {
        textarea.style.display = "block";
       
    } else if (document.getElementById('noengel').checked) {
        textarea.style.display = "none";
       
    } 

}











