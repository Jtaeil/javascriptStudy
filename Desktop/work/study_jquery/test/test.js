$(function () {

    /*

    //setTimeout - 일정 시간 후 한번 실행
    //setInterval - 일정 시간마다 반복 실행
    //clearTimeout - 일정 시간 후 한번 실행하는 것을 중지
    //clearInterval - 일정시간마다 반복하는 것을 중단

    setInterval(function() {
        fnDate();
    },1000);
    */
   
    fnDate();
});



function fnDate() {

    /*
    
        var d = new Date(2020);
        var d = new Date(2020, 1, 3, 11, 33, 30, 0);
        var d = new Date(2020, 1);
        var d = new Date('2020/1/3/11:33:00:00');

    */
    var d = new Date();

   
    //날짜정보
    $("#nowDate").text(d);

    //년
    $("#Year").text(d.getFullYear());

    //월
    $("#Month").text(d.getMonth()+1);

    //일
    $("#Date").text(d.getDate());

    //요일
    $("#Day").text(d.getDay());

    //시
    $("#Hour").text(d.getHours());

    //분
    $("#Minute").text(d.getMinutes());

    //초
    $("#Second").text(d.getSeconds());

}

function fnGetDate() {
    
}