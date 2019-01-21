$(function () {
   
    $("input:button").click(function() {
        if (!isNaN($(this).val())) {
            $("#view").val($("#view").val() + $(this).val());
        }
        else{
            switch ($(this).val()) {
                case "=": fnTotalSet();
                    break;
                case "C": $("#total").val("0");$("#view").val("");
                    break;
                case "<": fnChkString("delete", "view");
                    break;
                default:fnChkString("last","view",$(this).val());
                    break;
            }
        }
    });

});

function fnChkString(type, taget, value) {
    var rtnValue = false;
    if (type === "start") {
        
    }
    else if (type === "delete") {
        $("#"+taget).val($("#"+taget).val().substr(0,$("#"+taget).val().length-1));
    }
    else if (type === "last" && $("#"+ taget).val() != "") {

        if (!isNaN($("#"+taget).val().substr($("#"+taget).val().length-1,1))) {
            $("#"+taget).val($("#"+taget).val() + value);
        }
        else{
            $("#"+taget).val($("#"+taget).val().substr(0,$("#"+taget).val().length-1) + value);
        }

    }
    return rtnValue;
}


function fnTotalSet() {
    if($("#view").val() === ""){
        $("#total").val("0");
    }
    else{
        $("#total").val(eval($("#view").val().replace(/x/gi, "*")));
    }
    
}