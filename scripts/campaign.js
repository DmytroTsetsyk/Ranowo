$(document).ready(function() { 
    InitValidation();
    InitSubmitClick();
    // SubmitAboutForm();
});

function InitValidation() {
    $("#the-info-form").validate({
        rules: {
          fname: "required",
          lname: "required",
          url: "required",
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          fname: "Please specify your first name",
          lname: "Please specify your last name",
          email: {
            required: "We need your email address to contact you",
            email: "Your email address must be in the format of name@domain.com"
          }
        }
    });
}

function InitSubmitClick(){
    $('.third-step').on('click', function() {
       var result = $("#the-info-form").valid();
        if(result){
            $('#info-form-modal').modal('hide');
            $('#third-modal').modal('show');
        }
    });
}

// function SubmitAboutForm() {
//     $(".submit-about-form").click(function() {
//         $('#third-modal').modal('show');
//     });  
// }

// function InitThirdStep() {
//     $(".third-step").click(function() {
//         $('#third-modal').modal('show');
//     });  
// }