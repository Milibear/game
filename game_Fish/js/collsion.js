// 碰撞检测
// 大鱼碰撞食物
function momFoodCollsion(){
    for(var i=0;i<food.num;i++){
        // 判断当前食物是否是活动的
        if(food.alive[i]){
            var len = calLength2(food.x[i],food.y[i],mom.x,mom.y);
            // calLength2的返回值没有开平方
            // 如果认为两者（大鱼和食物）之间的距离小于30了就属于吃的范围，那判断条件要写
            // 小于900（30*30）
            if(len<900){
                food.alive[i] = false;
                // 吃食物张分数
                if(food.foodType[i]=="blue"){
                    data.score += 100;
                }else{
                    data.score += 200;
                }
            }
        }
    }
}
// 大鱼碰撞小鱼