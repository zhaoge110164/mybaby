/**
 * Created by zg on 2015/12/13.
 */
$(document).ready(function(){

    /*fullpage插件开始*/
    var startbackground;
    $("#fullpage").fullpage({
        /*每个屏幕的颜色*/
        sectionsColor:["black","black","red","green"],
        /*页面切换的速度毫秒*/
        scrollingSpeed:1200,
        /*定义每个屏幕的锚链接*/
        anchors:["page1","page2","page3","page4"],
        /*设置滚动导航*/
        navigation:true,//开启
        navigationPosition:"right",//靠右
        navigationTooltips:["1","2","3","4"],//提示信息
        slidesNavigation:true,//横向滚动开启导航
        slidesNavigationPosition:"buttom",//位置在下
        /*每个屏幕载入时动画*/

        afterLoad:function(link,index){
            switch(index) {
                case 1:
                  startbackground= setInterval(function(){
                        $("#section-1").animate({
                            width:"105%"
                        },5000,function(){
                            $("#section-1").animate({
                                width:"100%"
                            },5000)

                        } )
                    },10000);
                    move("#section-1-content").set('display','block').end();
                    move("#section-1-content").set('margin-top','0').end(function() {
                            move("#section-1-content h3").set('font-size', '3em').end(function(){
                                move("#section-1-content p span").set('font-size', '2em').end();
                                move("#section-1-content h3").set('font-size', '2em').end(function(){
                                    move("#past-time").set('display', 'block').end();
                                    move("#past-time").set('font-size', '1em').end();
                                });
                            });
                    });

                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
                default:
                    break;
            }
        },
        /*每个屏幕离开时动画*/
        onLeave:function(link,index){
            switch(index) {
                case 1:
                    move("#section-1-content").set('display','none').end();
                    move("#section-1-content").set('margin-top','800px').end();
                    move("#section-1-content h3").set('font-size', 'x-small').end();
                    clearInterval(startbackground);
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
                default:
                    break;
            }
        }

    });
    /*已经生时间*/
    getPastTime();
    $("#gopage2").click(
        function(){
            window.open("index.html#page2","_self")
            return false;
        }


    );
})
/*已出生时间*/
function getPastTime() {
    var birthTime = new Date("2015/11/18,20:33:00");//出生日期
    var nowTime = new Date();//当前时间
    var pastTime = (nowTime.getTime() - birthTime.getTime()) / 1000;//已过去多少秒
    /*过去的年月日时分秒*/
    var y = parseInt(pastTime / 3600 / 24 / 365);
    var d = parseInt(pastTime / 3600 / 24 % 365);
    var h = parseInt(pastTime / 3600 % 24);
    var m = parseInt(pastTime / 60 % 60);
    var s = parseInt(pastTime % 60);
    $("#past-time").html("已成长:"+y+"年"+d+"天"+h+"小时"+m+"分"+s+"秒");
    setTimeout("getPastTime()",1000);
}
