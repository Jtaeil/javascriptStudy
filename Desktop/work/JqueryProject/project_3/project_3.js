
var addArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

$(function () {

    fnSetReg();
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
            $(this).attr("data-chkindex", selectCnt);
            $(this).text($(this).data("value"));
            $("#txt" + selectCnt).val($(this).data("value"));
        }
        else{
            //선택취소
            $(this).removeClass("labelClick");
            $(this).text("?");
            $("input:text").eq($(this).data("chkindex")).val("");
            $(this).attr("data-chkindex", "");
        }
        
        fnCheck();

    });
    
});

//화면생성
function fnSetReg() {
    var i = 0;
    var addstr = "";
    
    while (i < addArray.length * 2) {

        addstr = addArray[Math.floor(Math.random() * addArray.length)];

        if ($("#divBtn").find("label[data-value='" + addstr + "']").length < 2) {

            if (i > 0 && (i+1) % 6 == 0 ) {
                $("#divBtn").append("<label data-value='" + addstr + "' data-chkindex=''>?</label><br/>");
            }
            else {
                $("#divBtn").append("<label data-value='" + addstr + "' data-chkindex=''>?</label>");
            }
            i++;
        }
    }

}

//초기화
function fnInit() {
    $("input").val("");
    $("input").attr("data-chkindex", "");
    $("label[class!='labeldisabled']").removeClass();
    $("label[class!='labeldisabled']").text("?");
}

//비교
function fnCheck() {
    if ($("#txt0").val() != "" && $("#txt0").val() == $("#txt1").val()) {
        $("label[class='labelClick']").removeClass().addClass("labeldisabled");
        $("#txt0").val("");
        $("#txt1").val("");
    }
}