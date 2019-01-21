
var addArray = ["1","2","3"];

$(function () {
    
    $("#tmp").hide();
    //fnAddStr(addArray);
    fnSetView();
    fnSetView2();
});

function fnSetView() {
    
    var addStr = "";

    for (var i = 0; i < addArray.length*2; i++) {

        if (i < 3) {
            addStr = "<label data-chkindex='' data-value='"+addArray[i]+"'>";
            addStr += addArray[i];
            addStr += "</label>";
        }
        else{
            addStr = "<label data-chkindex='' data-value='"+addArray[i-addArray.length]+"'>";
            addStr += addArray[i-addArray.length];
            addStr += "</label>";
        }

        $('#addArray').append(addStr);

        if (i >0 & (i+1)%3 == 0 ) {
            $('#addArray').append("<br/>");
        }
    }


}

function fnAddStr(arrayObj) {
    var addStr = "";  
    for (var i = 0; i < arrayObj.length; i++) {

        addStr = "<label data-chkindex='' data-value='"+arrayObj[i]+"'>";
        addStr += arrayObj[i];
        addStr += "</label>";
        
        $('#addArray').append(addStr);

        if (i > 0 & (i+1)%3 == 0 ) {
            $('#addArray').append("<br/>");
        }
    }
    

}

function fnSetView2() {
    /*
    var test = "012";
    alert(test);
    alert(test.replace(/1/gi,"?"));
    alert(test);
    test = test.replace(/1/gi,"?");
    alert(test);
    */


    var addCnt = 0;
    var addCnt2 = 1;
    var addText = $("#tmp").html();
    while (addCnt < addArray.length) {

        addText.replace(/_1_/gi,addArray[addCnt]);
        $("#addTmp").append(addText.replace(/_1_/gi,addArray[addCnt]));

        if(addCnt > 0 && (addCnt+1)%3  == 0 && addCnt2 > 0){
            addCnt = 0;
            addCnt2--;
            $("#addTmp").append("<br/>");
        }
        else{
            addCnt++;
        }
        
    }
}
