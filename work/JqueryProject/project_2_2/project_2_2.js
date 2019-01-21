$(function () {

    fnInit();
           
    $("#divBtn label").click(function(){
        if ($(this).attr("class") === "labeldisabled") return;
        var selectCnt = $("#divBtn label[class='labelClick']").length;
        if ($(this).attr("class") != "labelClick") {

            if (selectCnt >= 2) {
                selectCnt = 0;
                fnInit();
            }

            //선택
            $(this).addClass("labelClick");
            $(this).text($(this).data("value"));
            $("#txt" + selectCnt).val($(this).data("value"));
        }
        else{
            //선택취소
            selectCnt = selectCnt - 1;
            $(this).removeClass("labelClick");
            $(this).text("+");
            $("#txt" + selectCnt).val("");
        }
        
        fnCheck();

    });
    
});

//초기화
function fnInit() {
    $("input").val("");
    $("label[class!='labeldisabled']").removeClass();
    $("label[class!='labeldisabled']").text("+");
}

function fnCheck() {
    if ($("#txt0").val() != "" && $("#txt0").val() == $("#txt1").val()) {
        $("label[class='labelClick']").removeClass().addClass("labeldisabled");
        $("#txt0").val("");
        $("#txt1").val("");
    }
}