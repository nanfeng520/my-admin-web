const express = require('express');
const app = express();
const http = require('http')
const fs=require('fs');


// 新增
app.get('/setData',function(req,res){
  fs.readFile('./views/setData.txt', function (err, buffer) {
    if (err){
      setData([req.query],res)
    }else {
      let data = JSON.parse(buffer.toString())
      setData([req.query].concat(data),res)
    }
  });
})
// 新增函数
function setData(param,res){
  fs.writeFile('./views/setData.txt',JSON.stringify(param),(err)=>{
    if (err) throw err;
    res.send({status:200,code:0,mes:"写入成功"})
  })
}
// 查询
app.get('/getData',function(req,res){
  fs.readFile('./views/setData.txt', function (err, buffer) {
    if (err){
      console.log('不存在')
      return false
    }
    let info ={
       code:0,
       message:"请求成功",
       status:200,
       data:JSON.parse(buffer.toString())
       
    }
    res.send(info)
  });
})
app.listen(9529,function(){
  console.log(9529)
})
