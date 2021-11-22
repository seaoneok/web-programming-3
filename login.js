before = '#login-tab-content';

//function to change login and signup page
$(document).ready(function($) {
    tab = $('.tabs h3 a');

    tab.on('click', function(event) {
          event.preventDefault();
          tab.removeClass('active');
          $(this).addClass('active');

          tab_content = $(this).attr('href');

         //$('div[id$="tab-content"]').removeClass('active');
         // $(tab_content).addClass('active');
          console.log(before);
          $(before).fadeOut(250,function(){
              $('div[id$="tab-content"]').removeClass('active');
          });

          $(tab_content).delay(250).fadeIn('fast',function(){
            $(tab_content).addClass('active');
            before = tab_content;
          });
    });
});


// if the input is validated
// the function add css and html 
// to make error message or check icon
// this works all same for every blanks

$(document).ready(function(){
    $("#login_e").keyup(function(){
        if(validatelogin_Email()){
            $("#login_e").css("border","2px solid #CFCFCF");
            $("#emailMsg").css({"background-color":"","width":"", "height":""})
            $("#emailMsg").css({"position":"absolute","right":"38px", "top":"192px"})
            $("#emailMsg").css({"font-size":"", "border-radius":"","padding-top":""})
            $("#emailMsg").css({"justify-content":"","text-align":""})
            $("#emailMsg").html('<img src = "newCheck.png" height="22px">');
        }
        else{
            $("#login_email").css("border","2px solid red");
            $("#emailMsg").css({"background-color":"#2F558E","width":"220px", "height":"24px"})
            $("#emailMsg").css({"position":"absolute","right":"-210px", "top":"190px"})
            $("#emailMsg").css({"font-size":"15px", "border-radius":"0.3rem","padding-top":"0.2rem"})
            $("#emailMsg").css({"justify-content":"center","text-align":"center", "height":"24px"})
            $("#emailMsg").html("<span>Your email address is invalid!</span>");
        }
    });

    $("#login_p").keyup(function(){
        if(validatelogin_Password()){
            $("#login_p").css("border","2px solid #CFCFCF");
            $("#passMsg").css({"background-color":"","width":"", "height":""})
            $("#passMsg").css({"position":"absolute","right":"38px", "top":"272px"})
            $("#passMsg").css({"font-size":"", "border-radius":"","padding-top":""})
            $("#passMsg").css({"justify-content":"","text-align":""})
            $("#passMsg").html('<img src = "newCheck.png" height="22px">');
        }else{
            $("#login_p").css("border","2px solid red");
            $("#passMsg").css({"background-color":"#2F558E","width":"230px", "height":"24px"})
            $("#passMsg").css({"position":"absolute","right":"-220px", "top":"270px"})
            $("#passMsg").css({"font-size":"15px", "border-radius":"0.3rem","padding-top":"0.2rem"})
            $("#passMsg").css({"justify-content":"center","text-align":"center", "height":"24px"})
            $("#passMsg").html("<span>Please enter your password!</span>");
        }
    });

    // when the user click login button
    // if all blanks are filled in the right way
    // and if the id and password matches
    // the login page disappear
    // and "logged in" message appears
    $("#login").click((event)=>{
        if(!validatelogin_Email || !validatelogin_Password){
            return false;
        }
        else if(log_in()) {
            event.preventDefault();
            $(".form-wrap").empty();
            $("#logged-in").css({"background-color":"#15181b","width":"400px","font-size":"20px"})
            $("#logged-in").css({"text-align":"left","padding-left":"20px","height":"65px","padding-top":"20px"})
            $("#logged-in").html("<p>You are logged in.</p>");
        }
        // if the id is invalid or id and password mismatche
        // the error message appears
        else{
            event.preventDefault();
            $('#explain-content').removeClass('active');
            $('#error-content').addClass('active');
        }

    });


});

// function to check
// if the email is in right format
function validatelogin_Email(){
    var email=$("#login_e").val();

     var email_reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

     if(email_reg.test(email)){
         return true;
     }else{
         return false;
     }
}

// function to check
// if the password matches the condition
function validatelogin_Password(){
    var pass=$("#login_p").val();
    
    if(pass.length < 1){
        return false;
    }
    else{
        return true;
    }
}

function log_in(){
    var user_email = $("#login_e").val();
    var user_pass = $("#login_p").val();

    // get email and password from localStorage
    // which is stored from sign up page
    var checking_email = localStorage.getItem("email");
    var checking_pass = localStorage.getItem("password");
    
    // compare the input and stored email and password
    // if it coincides "logged in" message appears
    if((user_email == checking_email) && (user_pass == checking_pass)){
        return true;
    } 
    else{
        return false;
    }
}
