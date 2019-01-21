$(function () {

    //행의 합
    fnColTotal();

    //열의 합
    fnRowTotal();
});

function fnColTotal() {

    var strTr = Object;
    var setValue = 0;
    for (var i = 0; i < $("table tbody tr").length; i++) {
        setValue = 0;
        strTr = $("table tbody tr").eq(i);
        for (var j = 0; j < strTr.find("td").length-1; j++) {
            
            setValue = setValue + Number(strTr.find("td").eq(j).text());
            
        }
        strTr.find("td").eq(3).text(setValue);
    }

}

function fnRowTotal() {

    var strTr = Object;
    var arrayValue = [0,0,0]
    for (var i = 0; i < $("table tbody tr").length; i++) {
        
        strTr = $("table tbody tr").eq(i);
        for (var j = 0; j < strTr.find("td").length-1; j++) {
            arrayValue[j] = arrayValue[j] + Number(strTr.find("td").eq(j).text());
        }
    }

    for (var i = 0; i < $("tfoot tr td").length-1; i++) {
        $("tfoot tr td").eq(i).text(arrayValue[i]);
    }
    

}