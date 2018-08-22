var express=require("express")
var router=express.Router();

router.get("/",(req,res)=>{
  var fun=req.query.callback;//load
  var weather="北京 晴 26~32";
  res.writeHeader(200,{
    "Content-Type":"text/plain;charset=utf-8"
  });
  //setTimeout(function(){
  //res.end(weather);
  res.end(`${fun}('${weather}')`);
  //},6000);
        //"load('北京 晴 26~32')"
  //<script src="http://127.0.0.1:3000/index">
  //测试地址: http://localhost:3000/index?callback=load
  //结果: =>load('北京 晴 26~32')
});
router.get("/2",(req,res)=>{
  var weather="北京 晴 26~32";
  res.writeHeader(200,{
    "Content-Type":"text/plain;charset=utf-8",
    "Access-Control-Allow-Origin":"*"                                  //同桌的IP
  });
  res.end(weather);
})//测试地址: http://localhost:3000/index/2
                  //再换成同桌IP
  //结果=>"北京 晴 26~32"

module.exports=router;