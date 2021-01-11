// 食物
// 1.创建构造函数foodObj
var foodObj = function(){
    // 创建两个变量保存图片
    this.blue = new Image();
    this.orange = new Image();
    // 坐标x y l
    this.x = [];//横坐标
    this.y = [];//纵坐标
    this.l = [];//宽度
    // 是否是显示状态 true显示 false不显示
    this.alive = [];
    // 食物速度/类型/海葵下标
    this.spd = [];//速度
    this.foodType = [];//食物类型
    this.aneNo = [];//海葵下标
}
// 2.为构造函数添加属性 num=30
foodObj.prototype.num = 30;
// 3.为构造函数添加方法init
foodObj.prototype.init = function(){
    // 下载两张图片
    this.orange.src = "src/fruit.png";
    this.blue.src = "src/blue.png";
    // 状态坐标海葵速度类型
    for(var i=0;i<this.num;i++){
        this.alive[i] = false;
        this.x[i] = 0;
        this.y[i] = 0;
        this.l[i] = 0;
        this.aneNo[i] = 0;
        this.foodType[i] = "";
        this.spd[i] = Math.random()*0.017+0.003;
    }
    
}
// 4.为构造函数添加方法draw
foodObj.prototype.draw = function(){
    for(var i=0;i<this.num;i++){
    // 状态true绘制
    if(this.alive[i]){
    // 判断绘制那张图片
    if(this.foodType[i]=="blue"){
        var pic = this.blue;
    }else{
        pic = this.orange;

    }
      // 由小变大
    if(this.l[i]<=14){
        var no = this.aneNo[i];//海葵下标
        this.x[i] = ane.headx[no];//海葵终点坐标
        this.y[i] = ane.heady[no];
        this.l[i] += this.spd[i]*12;//宽高增加
        ctx2.drawImage(pic,this.x[i],this.y[i],this.l[i],this.l[i]);
    }else{
        // 向上漂浮
        this.y[i] -=this.spd[i]*12*10;
        ctx2.drawImage(pic,this.x[i],this.y[i],this.l[i],this.l[i]);
    }
    if(this.y[i]<10){
        this.alive[i] = false;
    }
  
    
    // 漂浮出屏幕隐藏
      }
    }   
}
// 5.引入到index.html中
// 6.在main.js中创建全局变量并引用方法
// 监听画布中显示食物数量不足15
function foodMoniter(){
    // 计算累加和，是否不足15个显示食物
    var sum = 0;
    for(var i=0;i<food.num;i++){
        if(food.alive[i])sum++;
    }
    if(sum<15){
        sendFood();//一次挑一个
        return;
    }
}
// 从隐藏的食物中挑选一个
function sendFood(){
    // 从隐藏食物中挑第一个，产生
    for(var i=0;i<food.num;i++){
        if(food.alive[i]==false){
            food.born(i);//给出下标
            return; 
        }
    }
}
// 食物生产
foodObj.prototype.born = function(i){
    // 刚产出时，宽度为0
    this.l[i] = 0;
    this.alive[i] = true;
    // 蓝色多橙色少
    this.foodType[i] =Math.random() <0.9 ? "blue":"orange" ;
    // 产出的位置（产出在哪个海葵）
    this.aneNo[i] = Math.floor(Math.random()*ane.num);
}
// 在main.js gameloop中调用y函数