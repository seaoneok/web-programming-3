$(document).ready(function(){

    // use focus in & key up function
    // to check blank boxes
    // when one block is pressed
    // all blocks turn into red
    $("#first_name").focusin(()=>{
        check_firstname();
        check_lastname();
        check_gender();
        check_email();
        check_pass();
        check_check_pass();
    });

    $("#last_name").focusin(()=>{
        check_firstname();
        check_lastname();
        check_gender();
        check_email();
        check_pass();
        check_check_pass();
    });

    $(".sex").focusin(()=>{
        check_firstname();
        check_lastname();
        check_gender();
        check_email();
        check_pass();
        check_check_pass();
    });

    $("#user_email").focusin(()=>{
        check_firstname();
        check_lastname();
        check_gender();
        check_email();
        check_pass();
        check_check_pass();
    });

    $("#user_pass").focusin(()=>{
        check_firstname();
        check_lastname();
        check_gender();
        check_email();
        check_pass();
        check_check_pass();
    });


    $("#user_check_pass").focusin(()=>{
        check_firstname();
        check_lastname();
        check_gender();
        check_email();
        check_pass();
        check_check_pass();
    });

    $("#first_name").keyup(()=>{
        check_firstname();
        check_lastname();
        check_gender();
        check_email();
        check_pass();
        check_check_pass();
    });

    $("#last_name").keyup(()=>{
        check_firstname();
        check_lastname();
        check_gender();
        check_email();
        check_pass();
        check_check_pass();
    });

    // for gender selection
    // use change function to make
    // message disappear as soon as
    // the user check their gender
    $("#sex1").change(()=>{
        $("#genderMsg").css({"background-color":"","width":"", "height":""})
        $("#genderMsg").css({"position":"absolute","right":"38px", "top":"322px"})
        $("#genderMsg").css({"font-size":"", "border-radius":"","padding-top":""})
        $("#genderMsg").css({"justify-content":"","text-align":""})
        $("#genderMsg").html('<img src = "newCheck.png" height="22px">'); 
    });

    $("#sex2").change(()=>{
        $("#genderMsg").css({"background-color":"","width":"", "height":""})
        $("#genderMsg").css({"position":"absolute","right":"38px", "top":"322px"})
        $("#genderMsg").css({"font-size":"", "border-radius":"","padding-top":""})
        $("#genderMsg").css({"justify-content":"","text-align":""})
        $("#genderMsg").html('<img src = "newCheck.png" height="22px">'); 
    });

    $("#user_email").keyup(()=>{
        check_firstname();
        check_lastname();
        check_gender();
        check_email();
        check_pass();
        check_check_pass();
    });

    $("#user_pass").keyup(()=>{
        check_firstname();
        check_lastname();
        check_gender();
        check_email();
        check_pass();
        check_check_pass();
    });


    $("#user_check_pass").keyup(function(){
        check_firstname();
        check_lastname();
        check_gender();
        check_email();
        check_pass();
        check_check_pass();
    });

    // when the user click submit button
    // if all blanks are filled in the right way
    // the sign up page disappear
    // and "signed up" message appears

    $("#submit").click((event)=>{
        if(!validateEmpty("#first_name")&&validateCapital("#first_name")&&validateName("#first_name")&&!validateEmpty("#last_name")&&validateCapital("#last_name")&&validateName("#last_name")&&validateGender()&&validateEmail()&& validatePassword() && confirmPassword()) {
            sign_up();
            event.preventDefault();
            // remove and add class 'active' to make
            // them disappear or appear
            $('#signup-tab-content').fadeOut('fast',function(){
                $('#signup-tab-content').removeClass('active'); 
                $('#sign-complete-tab-content').addClass('active');  
            });
            //$('div[id$="tab-content"]').removeClass('active');
            //$('div[id$="sign-complete-tab-content"]').addClass('active');
            //before = '#sign-complete-tab-content';
        }
        else{
            return false;
        }

    });

});

// if the input is validated
// the function add css and html 
// to make error message or check icon
// this works all same for every blanks

// for the first and last name blanks
// the guideline did not mention error message 
// about capitalized first letter
// so I added additional error message
function check_firstname(){
    if(validateEmpty("#first_name")){
        $("#first_name").css("border","2px solid red");
        $("#firstNameMsg").css({"background-color":"#2F558E","width":"220px", "height":"24px"})
        $("#firstNameMsg").css({"position":"absolute","right":"-210px", "top":"190px"})
        $("#firstNameMsg").css({"font-size":"15px", "border-radius":"0.3rem","padding-top":"0.2rem"})
        $("#firstNameMsg").css({"justify-content":"center","text-align":"center", "height":"24px"})
        $("#firstNameMsg").html("<span>Please enter your first name!</span>");
    }
    else if(!validateCapital("#first_name")){
        $("#first_name").css("border","2px solid red");
        $("#firstNameMsg").css({"background-color":"#2F558E","width":"220px", "height":"24px"})
        $("#firstNameMsg").css({"position":"absolute","right":"-210px", "top":"190px"})
        $("#firstNameMsg").css({"font-size":"15px", "border-radius":"0.3rem","padding-top":"0.2rem"})
        $("#firstNameMsg").css({"justify-content":"center","text-align":"center", "height":"24px"})
        $("#firstNameMsg").html("<span>First letter should be Capital!</span>");
    }
    else if(validateName("#first_name")){
        $("#first_name").css("border","2px solid #CFCFCF");
        $("#firstNameMsg").css({"background-color":"","width":"", "height":""})
        $("#firstNameMsg").css({"position":"absolute","right":"38px", "top":"192px"})
        $("#firstNameMsg").css({"font-size":"", "border-radius":"","padding-top":""})
        $("#firstNameMsg").css({"justify-content":"","text-align":""})
        $("#firstNameMsg").html('<img src = "newCheck.png" height="22px">');
    }
    else{
        $("#first_name").css("border","2px solid red");
        $("#firstNameMsg").css({"background-color":"#2F558E","width":"240px", "height":"24px"})
        $("#firstNameMsg").css({"position":"absolute","right":"-210px", "top":"190px"})
        $("#firstNameMsg").css({"font-size":"15px", "border-radius":"0.3rem","padding-top":"0.2rem"})
        $("#firstNameMsg").css({"justify-content":"center","text-align":"center", "height":"24px"})
        $("#firstNameMsg").html("<span>First name cannot contain numbers!</span>");
    }
}

function check_lastname(){
    if(validateEmpty("#last_name")){
        $("#last_name").css("border","2px solid red");
        $("#lastNameMsg").css({"background-color":"#2F558E","width":"220px", "height":"24px"})
        $("#lastNameMsg").css({"position":"absolute","right":"-210px", "top":"270px"})
        $("#lastNameMsg").css({"font-size":"15px", "border-radius":"0.3rem","padding-top":"0.2rem"})
        $("#lastNameMsg").css({"justify-content":"center","text-align":"center", "height":"24px"})
        $("#lastNameMsg").html("<span>Please enter your last name!</span>");
    }
    else if(!validateCapital("#last_name")){
        $("#last_name").css("border","2px solid red");
        $("#lastNameMsg").css({"background-color":"#2F558E","width":"220px", "height":"24px"})
        $("#lastNameMsg").css({"position":"absolute","right":"-210px", "top":"270px"})
        $("#lastNameMsg").css({"font-size":"15px", "border-radius":"0.3rem","padding-top":"0.2rem"})
        $("#lastNameMsg").css({"justify-content":"center","text-align":"center", "height":"24px"})
        $("#lastNameMsg").html("<span>First letter should be Capital!</span>");
    }
    else if(validateName("#last_name")){
        $("#last_name").css("border","2px solid #CFCFCF");
        $("#lastNameMsg").css({"background-color":"","width":"", "height":""})
        $("#lastNameMsg").css({"position":"absolute","right":"38px", "top":"272px"})
        $("#lastNameMsg").css({"font-size":"", "border-radius":"","padding-top":""})
        $("#lastNameMsg").css({"justify-content":"","text-align":""})
        $("#lastNameMsg").html('<img src = "newCheck.png" height="22px">');
    }
    else{
        $("#last_name").css("border","2px solid red");
        $("#lastNameMsg").css({"background-color":"#2F558E","width":"240px", "height":"24px"})
        $("#lastNameMsg").css({"position":"absolute","right":"-210px", "top":"270px"})
        $("#lastNameMsg").css({"font-size":"15px", "border-radius":"0.3rem","padding-top":"0.2rem"})
        $("#lastNameMsg").css({"justify-content":"center","text-align":"center", "height":"24px"})
        $("#lastNameMsg").html("<span>Last name cannot contain numbers!</span>");
    }
}

function check_gender(){
    if(validateGender()){
        $("#genderMsg").css({"background-color":"","width":"", "height":""})
        $("#genderMsg").css({"position":"absolute","right":"38px", "top":"322px"})
        $("#genderMsg").css({"font-size":"", "border-radius":"","padding-top":""})
        $("#genderMsg").css({"justify-content":"","text-align":""})
        $("#genderMsg").html('<img src = "newCheck.png" height="22px">');   
    }
    else{
        $("#genderMsg").css({"background-color":"#2F558E","width":"210px", "height":"24px"})
        $("#genderMsg").css({"position":"absolute","right":"-200px", "top":"320px"})
        $("#genderMsg").css({"font-size":"15px", "border-radius":"0.3rem","padding-top":"0.2rem"})
        $("#genderMsg").css({"justify-content":"center","text-align":"center", "height":"24px"})
        $("#genderMsg").html("<span>Please select your gender!</span>");
    }
}

function check_email(){
    if(validateEmpty("#user_email")){
        $("#user_email").css("border","2px solid red");
        $("#sign_emailMsg").css({"background-color":"#2F558E","width":"190px", "height":"24px"})
        $("#sign_emailMsg").css({"position":"absolute","right":"-180px", "top":"390px"})
        $("#sign_emailMsg").css({"font-size":"15px", "border-radius":"0.3rem","padding-top":"0.2rem"})
        $("#sign_emailMsg").css({"justify-content":"center","text-align":"center", "height":"24px"})
        $("#sign_emailMsg").html("<span>Please enter your email!</span>");
    }
    else if(validateEmail()){
        $("#user_email").css("border","2px solid #CFCFCF");
        $("#sign_emailMsg").css({"background-color":"","width":"", "height":""})
        $("#sign_emailMsg").css({"position":"absolute","right":"38px", "top":"392px"})
        $("#sign_emailMsg").css({"font-size":"", "border-radius":"","padding-top":""})
        $("#sign_emailMsg").css({"justify-content":"","text-align":""})
        $("#sign_emailMsg").html('<img src = "newCheck.png" height="22px">');
    }
    else{
        $("#user_email").css("border","2px solid red");
        $("#sign_emailMsg").css({"background-color":"#2F558E","width":"220px", "height":"24px"})
        $("#sign_emailMsg").css({"position":"absolute","right":"-210px", "top":"390px"})
        $("#sign_emailMsg").css({"font-size":"15px", "border-radius":"0.3rem","padding-top":"0.2rem"})
        $("#sign_emailMsg").css({"justify-content":"center","text-align":"center", "height":"24px"})
        $("#sign_emailMsg").html("<span>Your email address is invalid!</span>");
    }
}

function check_pass(){
    if(validateEmpty("#user_pass")){
        $("#user_pass").css("border","2px solid red");
        $("#sign_passMsg").css({"background-color":"#2F558E","width":"220px", "height":"24px"})
        $("#sign_passMsg").css({"position":"absolute","right":"-210px", "top":"470px"})
        $("#sign_passMsg").css({"font-size":"15px", "border-radius":"0.3rem","padding-top":"0.2rem"})
        $("#sign_passMsg").css({"justify-content":"center","text-align":"center", "height":"24px"})
        $("#sign_passMsg").html("<span>Please enter your password!</span>");
    }
     else if(validatePassword()){
        $("#user_pass").css("border","2px solid #CFCFCF");
        $("#sign_passMsg").css({"background-color":"","width":"", "height":""})
        $("#sign_passMsg").css({"position":"absolute","right":"38px", "top":"472px"})
        $("#sign_passMsg").css({"font-size":"", "border-radius":"","padding-top":""})
        $("#sign_passMsg").css({"justify-content":"","text-align":""})
        $("#sign_passMsg").html('<img src = "newCheck.png" height="22px">');
    }
    else{
        $("#user_pass").css("border","2px solid red");
        $("#sign_passMsg").css({"background-color":"#2F558E","width":"370px", "height":"60px"})
        $("#sign_passMsg").css({"position":"absolute","right":"-360px", "top":"455px"})
        $("#sign_passMsg").css({"font-size":"14px", "border-radius":"0.3rem","padding-top":"0.3rem"})
        $("#sign_passMsg").css({"justify-content":"center","text-align":"center"})
        $("#sign_passMsg").html("<span>Requirement: at least 6 characters, one capital letter, one lowercase letter, at least one digit, and one special character!</span>");
    }
}

function check_check_pass(){
    if(validateEmpty("#user_check_pass")){
        $("#user_check_pass").css("border","2px solid red");
        $("#sign_checkPassMsg").css({"background-color":"#2F558E","width":"240px", "height":"24px"})
        $("#sign_checkPassMsg").css({"position":"absolute","right":"-230px", "top":"553px"})
        $("#sign_checkPassMsg").css({"font-size":"15px", "border-radius":"0.3rem","padding-top":"0.2rem"})
        $("#sign_checkPassMsg").css({"justify-content":"center","text-align":"center", "height":"24px"})
        $("#sign_checkPassMsg").html("<span>Please re-enter your password!</span>");
    }
    else if(confirmPassword()){
        $("#user_check_pass").css("border","2px solid #CFCFCF");
        $("#sign_checkPassMsg").css({"background-color":"","width":"", "height":""})
        $("#sign_checkPassMsg").css({"position":"absolute","right":"38px", "top":"552px"})
        $("#sign_checkPassMsg").css({"font-size":"", "border-radius":"","padding-top":""})
        $("#sign_checkPassMsg").css({"justify-content":"","text-align":""})
        $("#sign_checkPassMsg").html('<img src = "newCheck.png" height="22px">');
    }
    else{
        $("#user_check_pass").css("border","2px solid red");
        $("#sign_checkPassMsg").css({"background-color":"#2F558E","width":"200px", "height":"24px"})
        $("#sign_checkPassMsg").css({"position":"absolute","right":"-190px", "top":"553px"})
        $("#sign_checkPassMsg").css({"font-size":"15px", "border-radius":"0.3rem","padding-top":"0.2rem"})
        $("#sign_checkPassMsg").css({"justify-content":"center","text-align":"center", "height":"24px"})
        $("#sign_checkPassMsg").html("<span>Password does not match!</span>");
    }
}

// function to check
// if the blank is empty
function validateEmpty(id){
    var name = $(id).val();
    if(name == null || name == ''){
        return true;
    }
}

// function to check
// if the first letter is caplitalized
function validateCapital(id){
    var first = $(id).val();
    var first_char = first.charAt(0);

    var first_reg = /([A-Z])/;

    if(first_reg.test(first_char)){
        return true;
    }
}

// function to check
// if the name does not include number or character
function validateName(id){
    var name=$(id).val();
    var name_reg = /^[a-zA-Z]*$/;
    
    if(name_reg.test(name)){
         return true;
     }
     else{
         return false;
     }
}

// function to check
// if the gender is checked
function validateGender(){
    if($("input[name=sex]").is(":checked")){
        return true;
    }
    else {
        return false
    };
}

// function to check
// if the email is in right format
function validateEmail(){
    var email=$("#user_email").val();
     var email_reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

     if(email_reg.test(email)){
         return true;
     }else{
         return false;
     }
}

// function to check
// if the password matches the condition
function validatePassword(){
    var pass=$("#user_pass").val();

    var pass_reg1=/([a-z])/;
    var pass_reg2=/([A-Z])/;
    var pass_reg3=/([0-9])/;
    var pass_reg4=/([!,%,&,@,#,$,^,*,?,_,~])/;

    // store password to confirm
    localStorage.setItem("password",pass);

    if(pass.length < 6 || pass_reg1.test(pass)==false || pass_reg2.test(pass)==false || pass_reg3.test(pass)==false || pass_reg4.test(pass)==false){
        return false;
    }
    else{
        return true;
    }

}

function confirmPassword(){
    user_pass = localStorage.getItem("password");
    var check_pass = $("#user_check_pass").val();

    if(check_pass == user_pass){
        return true;
    }
    else{
        return false;
    }
}

function sign_up(){
    var final_email = $("#user_email").val();
    var final_pass = $("#user_check_pass").val();

    // store user email and password to use it in login page
    localStorage.setItem("email",final_email);
    localStorage.setItem("password",final_pass);
}

