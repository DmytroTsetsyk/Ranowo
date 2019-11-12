$( document).ready(function() {
    InitMinus();
    InitPlus();
    InitSecondStep();
    InitThirdStep();

});

function InitSecondStep() {
    $(".second-step").click(function() {
        $('#info-form-modal').modal('show');
    });  
}

function InitThirdStep() {
    $(".third-step").click(function() {
        $('#third-modal').modal('show');
    });  
}

function InitMinus() {
    $( "img[data-type='minus']").click(function() {
        var element = this;
        var parent = element.closest("div");
        $(parent).find("input");
        var input = $(parent).find("input");
        var productCount = Number(input.val()) -1;
        if((Number(input.val()) -1) > 0){
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