var WebSocketServer = require('websocket').server;
var http = require('http');
var server = http.createServer();

wsServer = new WebSocketServer({
	//选择刚刚创建的http后台服务器为WebSocket服务器
	httpServer:server
})
//储存所有终端的连接
var c = [];
wsServer.on('request',function(request){
	//当前的连接,request.origin为请求的信息
	var connection = request.accept(null,request.origin);
	connection.sendUTF('服务器发来消息说已经建立连接');
	//把连接储存起来
	c.push(connection);
  console.log(c);
	//监听有信息来的时候
	connection.on('message',function(message){
		if(message.type === 'utf8'){
			//给每一个连接都发送数据
			c.forEach(function(item){
				item.sendUTF(message.utf8Data);	
			})
			
		}
		else if(message.type === 'binary'){
			c.forEach(function(item){
					item.sendBytes(message.binaryData);
				})
			
		}
	});
	//监听关闭
	connection.on('close',function(reasonCode,description){
		//某个连接删除的时候，删除数组c中储存的对应连接
		//获取当前索引
		var index = c.indexOf(connection);
		//删除
		c.splice(index,1);
		console.log('连接关闭')
	})
})

server.listen(3000,()=>{
  console.log('已经成功连接3000');
});