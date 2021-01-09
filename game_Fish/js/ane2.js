// 海葵版本二
// 1.创建aneObj构造函数
var aneObj = function(){
    this.rootx = [];//起点坐标
    //rooty不用写，固定值600
    //控制点也是一个固定值 x和起点坐标一样，y用起点y-100
    this.headx = [];//终点坐标x
    this.heady = [];//终点坐标y
    this.amp = [];//摆动幅度
    this.alpha = 0;//周期变化值
    
}
// 2.为构造函数添加属性num=50
aneObj.prototype.num = 50;
// 3.为构造函数添加方法init
aneObj.prototype.init = function(){
    for(var i=0;i<this.num;i++){
        //初始化起点坐标
        this.rootx[i] = i*16+Math.random()*20;
        //初始化终点坐标x y
        this.headx[i] = this.rootx[i];
        this.heady[i] = canHeight-200+Math.random()*50;
        //初始化摆动幅度
        this.amp[i] = 20+Math.random()*20; 
    }
}

// 4.为构造函数添加方法draw 
aneObj.prototype.draw = function(){
    //保存状态
    ctx2.save();
    ctx2.strokeStyle = "#3b154e";
    ctx2.lineWidth = 20;//线宽
    ctx2.lineCap = "round";//圆角
    ctx2.globalAlpha =0.5;//透明度
    //获取一个很小连续变化的小数（-1~1范围数值）
    //-1向左摆动 1向右摆动
    this.alpha += 0.0008*36;
    var p = Math.sin(this.alpha);
    //创建循环，绘制路径
    for(var i=0;i<this.num;i++){
        ctx2.beginPath();
        //重新计算终点x
        this.headx[i] = this.rootx[i]+this.amp[i]*p;
        //移动起点坐标
        ctx2.moveTo(this.rootx[i],canHeight);
        //绘制控制点和终点
        ctx2.quadraticCurveTo(this.rootx[i],canHeight-100,this.headx[i],this.heady[i]);
        ctx2.stroke();  
    }
    //恢复状态
    ctx2.restore();
}
// 5.添加到index.html中，注释掉第一个版本