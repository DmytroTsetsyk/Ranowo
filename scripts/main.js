$( document).ready(function() { 
    InitMinus();
    InitPlus();
    InitSecondStep();
    InitThirdStep();
    InitBackSecondStep();
    InitBackFirstStep();
    ShowSubscrModal()
    InitSlickSlider();
});

function InitSlickSlider() {
    $('.mobile-banner').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });
}

function ShowSubscrModal(){
    $(".steps-block").waypoint(function() {
        if(!(sessionStorage.getItem('showSubscribeModal'))){
            sessionStorage.setItem("showSubscribeModal", "false");
            $('#subscribe-modal').modal('show');
        }
    });
}

function InitBackSecondStep() {
    $(".go-second-step").click(function() {
        HideAllModals();
        $('#info-form-modal').modal('show');
    });  
}

function InitBackFirstStep() {
    $(".go-first-step").click(function() {
        HideAllModals();
        $('#checkout-modal').modal('show');
    });  
}

function InitSecondStep() {
    $(".second-step").click(function() {
        HideAllModals();
        $('#info-form-modal').modal('show');
    });  
}

function InitThirdStep() {
    $(".third-step").click(function() {

        $('#third-modal').modal('show');
    });  
}

function HideAllModals(){
    $('#info-form-modal').modal('hide');
    $('#checkout-modal').modal('hide');
    $('#third-modal').modal('hide');
}

function InitMinus() {
    $( "img[data-type='minus']").click(function() {
        var element = this;
        var parent = element.closest("div");
        $(parent).find("input");
        var input = $(parent).find("input");
        var productCount = Number(input.val()) -1;
        if((Number(input.val()) -1) >= 0){
            input.val(productCount);  
            inputAttrVal = input.attr("product-id");
            SetValueByAttr(productCount, inputAttrVal);
        }
    });   
}

function InitPlus() {
    $("img[data-type='plus']").click(function() {
        var element = this;
        var parent = element.closest("div");
        $(parent).find("input");
        var input = $(parent).find("input");
        inputAttrVal = input.attr("product-id");
        var productCount = Number(input.val()) + 1;
        input.val(productCount);  
        SetValueByAttr(productCount, inputAttrVal);
    });   
}

function SetValueByAttr(value, attr) {
    var elements = $("input[product-id='" + attr + "']");
    elements.val(value);
    CalculatePrice();
}

function CalculatePrice() {
    var totalPrice = null;
    var elements = $(".modal-product-block .input-number");
    $(elements).each(function() {
        elementPrice = $(this).attr("product-price");
        totalPrice += Number($(this).val()) * elementPrice;
    });

    $(".total-price").text(totalPrice.toFixed(2));
}