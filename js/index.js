

/*페이지로드시 이대성 허훈 페이드인 */ 
window.onload = function () {
    $(".leedeasung").fadeIn(2000)
     $(".heohoon").fadeIn(2000)
};/*대각선 혹은 옆에서 나타나면서 페이드인 여쭤보기*/

/*순차적으로 롤링 질문 페이드인효과*/ 
/*스코어 롤링*/
function rank() {
    $(".rank1 li:first").slideUp(function () {
        $(this).appendTo(".rank1").slideDown();
    });
        $(".rank2 li:first").slideUp(function () {
        $(this).appendTo(".rank2").slideDown();
        });
        $(".rank3 li:first").slideUp(function () {
        $(this).appendTo(".rank3").slideDown();
    });
        $(".rank4 li:first").slideUp(function () {
        $(this).appendTo(".rank4").slideDown();
        });
         $(".rank5 li:first").slideUp(function () {
        $(this).appendTo(".rank5").slideDown();
    });
}
setInterval(function () {
    rank()
}, 3000);
/*스코어 롤링*/
    /*흐르는 하이라이트*/
 


$(function(){
    var fnum=0;
    
    function flowText (){
        //console.log('흘러가는중~');
        
        fnum++;
        console.log(fnum);
        
        var ftext = $('.flowbanner li').first().width();
        //console.log(ftext);
        
        if(fnum>ftext){
            $('.flowbanner ul').append($('.flowbanner ul li').first()).css({
                left: 0
            });
            
            fnum=0;
        }else{
            $('.flowbanner ul').css({
                left: -fnum+'px'
            });
        }
    }
    
    
    setInterval(flowText, 10);
    
    
});












