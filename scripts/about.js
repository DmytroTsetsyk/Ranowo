$(document).ready(function() { 
    InitValidation();
    InitSubmitClick();
    // SubmitAboutForm();
});

function InitValidation() {
    $("#contact-us-form").validate({
        rules: {
          name: "required",
          phone: "required",
          url: "required",
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          name: "Please specify your name",
          phone: "Please specify your phone",
          url: "Please specify your url",
          email: {
            required: "We need your email address to contact you",
            email: "Your email address must be in the format of name@domain.com"
          }
        }
    });
}

function InitSubmitClick(){
    $('.submit-about-form').on('click', function() {
       var result = $("#contact-us-form").valid();
        if(result){
            $(".thank-for-contact").show();
        }
    });
}

function SubmitAboutForm() {
    $(".submit-about-form").click(function() {
        $(".thank-for-contact").show();
    });  
}
