
var arrayStr = ['A','B','C','D','E','F'];

var addTab = '';
addTab += "<div style='display:inline-block'>";
addTab += "<label data-type='string' style='display: none' >_1_</label>";
addTab += "<label data-type='?'>?</label>";
addTab += "</div>";

$(function () {

    fnaddStr();
    $("#addTest").append("<br/>");
    fnaddStr();

    $("label").click(function() {

        if ($(this).data("type") === "?") {
            $(this).parent().find("label").eq(0).show();
            $(this).parent().find("label").eq(1).hide();    
        }
        else{
            $(this).parent().find("label").eq(0).hide()
            $(this).parent().find("label").eq(1).show();
        }
        
    });
    
});

function fnaddStr() {
    for (let i = 0; i < arrayStr.length; i++) {
        $("#addTest").append(addTab.replace(/_1_/gi,arrayStr[i]));
    }
}