// 海葵版本1（直线）
// 1.创建海葵构造函数 aneObj
var aneObj = function(){
    this.x = [];//保存所有海葵x
    this.len = [];//保存 所有海葵y
}
// 2.为构造函数添加属性 num
// 将属性或方法添加到原型，省内存
aneObj.prototype.num = 50;
// 3.为构造函数添加方法 init 初始化海葵
aneObj.prototype.init = function(){
    for(var i=0;i<this.num;i++){
        // 海葵x坐标
        this.x[i] = i*16+Math.random()*20;
        // 海葵高度
        this.len[i] = 250+Math.random()*50;
    }
};
// 4.为构造函数添加方法 draw 绘制海葵
aneObj.prototype.draw = function(){
        // 保存状态
        ctx2.save();
        ctx2.strokeStyle = "#3b154e";
        ctx2.lineWidth = 20;//线宽
        ctx2.lineCap = "round";//圆角
        ctx2.globalAlpha =0.5;//透明度
        // 创建循环
    for(var i=0;i<this.num;i++){
        // 移动画布顶端
        ctx2.beginPath();
        ctx2.moveTo(this.x[i],canHeight);
        // 向上画一条
        ctx2.lineTo(this.x[i],canHeight-this.len[i]);
        // 描边
        ctx2.stroke();
        
    }  
    // 恢复状态
    ctx2.restore();
}
// 5.将ane.js添加index.html文件中
// 6.在main.js中创建海葵对象并且调用相关方法
