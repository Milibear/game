// 大鱼
// 1.创建构造函数monObj
var momObj = function(){
    this.bigEye = [];//大鱼眼睛
    this.bigBody = [];//大鱼身体
    this.bigTail = [];//大鱼尾巴
    this.x;//大鱼位置
    this.y;
    this.angle;//大鱼游动角度
}
// 2.为构造函数添加方法init
momObj.prototype.init = function(){
    // 创建大鱼眼睛图片并且下载
    for(var i=0;i<2;i++){
        this.bigEye[i] = new Image();
        this.bigEye[i].src = "src/bigEye"+i+".png"
    }
    // 创建大鱼身体图片并下载
    for(var i=0;i<8;i++){
        this.bigBody[i] = new Image();
        this.bigBody[i].src = "src/bigSwim"+i+".png";
    }
    // 创建大鱼尾巴图片并下载
    for(var i=0;i<8;i++){
        this.bigTail[i] = new Image();
        this.bigTail[i].src = "src/bigTail"+i+".png";
    }
    // 大鱼位置与角度
    this.x = 0;
    this.y = 0;
    this.angle = 0;
}
// 3.为构造函数添加方法draw
momObj.prototype.draw = function(){
    // 大鱼的位置等于鼠标的位置
    this.x = mx;
    this.y = my;
    //保存状态
    ctx1.save();
    // ctx1.beginPath();
    // 平移画布原点到大鱼的x y上
    ctx1.translate(this.x,this.y);
    // 旋转大鱼角度
    ctx1.rotate(this.angele);
    // 画大鱼身体
    ctx1.drawImage(this.bigBody[0],0,0);
    // 画大鱼尾巴
    ctx1.drawImage(this.bigTail[0],0+37,5);
    // 画大鱼眼睛 
    ctx1.drawImage(this.bigEye[0],0+15,0+20);
    // 恢复状态
    ctx1.restore();
}