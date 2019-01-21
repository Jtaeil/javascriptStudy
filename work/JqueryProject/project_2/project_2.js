$(function () {

    fnInit();
           
    $("#divBtn label").click(function(){
        
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
    });
    
});

//초기화
function fnInit() {
    $("input").val("");
    $("label").removeClass();
    $("label").text("+");
}