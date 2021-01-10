// 1.创建全局变量
var can1 = null;//画布1
var can2 = null;//画布2
var ctx1 = null;//画笔1
var ctx2 = null;//画笔2
var canWidth = 0;//画布宽度
var canHeight = 0;//画布高度
var bgPic = null; // 创建全局变量保存背景图片
var  ane = null;// 创建全局变量保存海葵对象
var food = null;//创建全局变量保存食物对象

// 2.创建入口函数game
function game(){
    init();
    gameloop();
}

// 3.创建初始化函数init
function init(){
    // 1.为画布赋初始值
    can1 = document.getElementById("canvas1");
    can2 = document.getElementById("canvas2");
    // 2.为画笔复初始值
    ctx1 = can1.getContext("2d");
    ctx2 = can2.getContext("2d");
    // 3.为画布宽度和高度赋初始值 
    canWidth = can1.width;
    canHeight = can1.height;
    // 创建背景图片对象并下载
    bgPic = new Image();
    bgPic.src = "src/background.jpg";
    // 创建海葵对象并且调用初始化函数
    ane = new aneObj();
    ane.init();
    // 创建食物对象并且调用初始化函数
    food = new foodObj();
    food.init();
}

// 4.创建绘制角色函数gameloop
function gameloop(){
    // 创建智能定时器调用gameloop
    requestAnimFrame(gameloop);
    // 调用绘制背景函数
    drawBackground();
    // 调用绘制海葵函数
    ane.draw();
    // 调用绘制食物的函数
    food.draw();
    // 调用监听画布方法
    foodMoniter();
}
// 5.body加载完成之后调用game函数
document.body.onload = game;
// 6.main.js引入到index.html文件中