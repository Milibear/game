// 分数
// 1.创建分数构造函数dataObj
var dataObj = function(){
    this.score = 0;//分数
    this.double = 1;//是否双倍分数
}
// 2.为分数添加绘制方法draw
dataObj.prototype.draw = function(){
    //保存状态
    ctx1.save();
    ctx1.font = "35px Verdana";
    ctx1.fillStyle = "#fff";
    // 在屏幕中心绘制文本
    ctx1.fillText("SCORE:"+this.score,300,100)
    // 恢复状态
    ctx1.restore();
}
// 3.添加方法addScore
dataObj.prototype.addScore = function(){}
// 4，添加到index.html文件中
