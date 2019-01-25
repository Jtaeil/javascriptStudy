var addArray = ["1","2","3","4","5","6"];

$(function () {

    $("#tmp").hide();
    fnSetView();

});

function fnSetView() {

    var addCnt = 0;
    var addText = $("#tmp").html();
    var arrayIndex = 0;

    while (addCnt < addArray.length*2) {
        arrayIndex = addArray[Math.floor(Math.random() * addArray.length)];

        if ($("#addTmp").find("label[data-value='"+arrayIndex+"']").length < 2) {

            $("#addTmp").append(addText.replace(/_1_/gi,arrayIndex));

            if (addCnt > 0 & (addCnt+1)%3 == 0 ) {
                $('#addTmp').append("<br/>");
            }
            addCnt++;
        }
        
    }

    $("#addTmp label").css("cursor","pointer");


}