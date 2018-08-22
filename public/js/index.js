$(function(){
  //ajax("http://localhost:3000/index")
  $.ajax({
    url:"http://localhost:3000/index",
    type:"get",
    dataType:"json" //JSON.parse(res)
  })
  .then(products=>{
    new Vue({
      el:"#main>div:nth-child(2)>h3:first-child",
      data:{ products }
      /*products:[
        {title, details, price, href, pic},
        {title, details, price, href, pic},
        ...
      ]*/
    })
  })
  var $divLift=$("#main>div:last-child");
  $(window).scroll(function(){
    var $fs=$("#main>div:nth-child(2)>h3");
    var $f1=$fs.first();
    var scrollTop=$("html,body").scrollTop()
    var offsetTop=$f1.offset().top;
         //红       +    绿   >    蓝
    if(innerHeight/2+scrollTop>offsetTop){
      $divLift.removeClass("d-none");
    }else{
      $divLift.addClass("d-none");
    }
    $fs.each((i,f)=>{
      offsetTop=$(f).offset().top;
      if(innerHeight/2+scrollTop>offsetTop){
        $divLift
          .children(`:eq(${i})`)
          .addClass("btn-danger")
          .siblings()
          .removeClass("btn-danger")
      }
    })
  });
  $divLift.on("click","button",function(){
    //获得点击的第几个按钮
    var i=$(this).index();
    var offsetTop=//获得对应楼层距页面顶部的总距离
      $(`#main>div:nth-child(2)>h3:eq(${i})`)
      .offset().top;
    //让页面滚动到和楼层距body顶部总距离相同的位置
    $("html").animate({
      scrollTop:offsetTop
    },500);
  })
});