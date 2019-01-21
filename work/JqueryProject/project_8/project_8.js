var totalValue = 0;
var arrayInput = ["A","B","C"];

$(function(){
    $("div[data-type='tmp']").hide();

    fnInit();

    $("#cont input").focus(function(){
        $(this).select();
    });

    // $("#cont input").keyup(function(){
    //     $(this).val($(this).val().replace(/[^0-9]/g,""));
    // });


    $('#cont input').keypress(function (e) {
        if (e.which && (e.which <= 47 || e.which >= 58) && e.which != 8) { 
            e.preventDefault(); 
        }
    });


    $("#cont input").change(function(){
        if ($(this).val() == "") $(this).val(0);
        fnSetTotal();
    });

});

function fnInit(){
    for(var i=1; i<=12; i++){
        $("#tmp1 th").text(i + "월");
        $("#cont").append($("#tmp1 table tbody").html());
    }
    $("td input:text").css("width","80px").css("text-align","right");
    $("tfoot td").text("0");
    $("table").css("text-align","center")

};

function fnSetTotal() {
    for (var i = 0; i < arrayInput.length; i++) {
        totalValue = 0;
        $("#cont input[data-type='" + arrayInput[i] + "']").each(function () {
            totalValue = totalValue + Number($(this).val());
        });
        $("tfoot td").eq(i).text(totalValue);
    }
}


//1. 이벤트 : 인풋 밖을 빠져나오면 0표시
//2. 합계 : 인풋에 숫자 넣고 빠져나오면 합계에 해당 숫자 표시