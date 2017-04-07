/**
 * Created by Lenovo on 2017/1/28.
 */
/**
 * 1.获取 定位区间 滑动的区间
 * 2.touchmove事件在滑动区间内改变位置
 * 3.touchend事件超过定位区间吸附回去（最大定位或最小区间）
 * 4.点击菜单时 定位到 在满足的区间内就将这个菜单定位到顶部 不满足就不移动到顶部
 */
window.onload = function () {
    leftSwipe();
    rightSwipe();
    var rightCurrY = 0;
    function leftSwipe(){
        //获取高度
        var parentBox = document.querySelector(".silde_nav");
        var childBox = document.querySelector(".silde_nav>ul");
        var parentHeight = parentBox.offsetHeight;
        var childHeight = childBox.offsetHeight;
        //计算定位区间
        var maxY = 0;
        var minY = parentHeight - childHeight;
        // 设置可滑动区间
        var maxSwipe = maxY + 100;
        var minSwipe = minY - 100;
        //设置初始的变量值
        var startY = 0;
        var moveY = 0;
        var distanceY = 0;
        var isMove = false;
        //记录当前位置的变量
        var currY = 0;
        //添加过渡样式封装
        function addTransition() {
            childBox.style.transition = "all .2s";
            childBox.style.webkitTransition = "all .2s";
        }
        //移除过度样式封装
        function removeTransition() {
            childBox.style.transition = "none";
            childBox.style.webkitTransition = "none";
        }
        //设置位置样式的封装
        function setTranslateY(y){
            childBox.style.transform = "translateY("+y+"px)";
            childBox.style.webkitTransform = "translateY("+y+"px)";
        }
        // 获取触摸开始的位置
        childBox.addEventListener('touchstart',function(e){
            startY = e.touches[0].clientY;
            console.log(startY);
        })
        // 获取移动后的位置
        // 计算移动的距离
        //
        childBox.addEventListener('touchmove',function(e){
            moveY = e.touches[0].clientY;
            distanceY = moveY - startY;
            //console.log(distanceY);
            addTransition();
            if(distanceY+currY<maxSwipe&&distanceY+currY>minSwipe){
                setTranslateY(distanceY+currY);
            }


        })
        window.addEventListener('touchend',function(e){
            if(distanceY+currY>maxY){
                currY = maxY;
                setTranslateY(currY);
            }else if(distanceY+currY<minY){
                currY = minY;
                setTranslateY(currY);
            }else{
                currY = distanceY + currY;
            }

        });
        // 点击li时改变当前的样式
        // 点击li时（在小于最小定位高度时）改变li的位置到最顶部
        // 点击li时，改变右边对应的模块的位置到最顶部
        var module = document.querySelector('.goods_container');
        var divs = module.children;
        childBox.addEventListener('click',function(e){
            var li = e.target.parentNode;
            var lis = this.children;
            for(var i=0;i<lis.length;i++){
                lis[i].classList.remove('current');
                lis[i].index = i;
            }
            li.classList.add('current');
            console.log(li.index);
            var leftY = -li.index*50;
            var rightY = -li.index*120;
            if(leftY>minY){
                currY = leftY;
                setTranslateY(currY);
            }
            rightCurrY = rightY;
            module.style.transition = "all .2s";
            module.style.webkitTransition = "all .2s";
            module.style.transform = "translateY("+rightY+"px)";
            module.style.webkitTransform = "translateY("+rightY+"px)";

        })
    }
    function rightSwipe(){
        //获取高度
        var parentBox = document.querySelector(".goods_box");
        var childBox = document.querySelector(".goods_container");
        var parentHeight = parentBox.offsetHeight;
        var childHeight = childBox.offsetHeight;
        //计算定位区间
        var maxY = 0;
        var minY = parentHeight - childHeight;
        // 设置可滑动区间
        var maxSwipe = maxY + 100;
        var minSwipe = minY - 100;
        //设置初始的变量值
        var startY = 0;
        var moveY = 0;
        var distanceY = 0;
        var isMove = false;
        //记录当前位置的变量
        rightCurrY = 0;
        //添加过渡样式封装
        function addTransition() {
            childBox.style.transition = "all .2s";
            childBox.style.webkitTransition = "all .2s";
        }
        //移除过度样式封装
        function removeTransition() {
            childBox.style.transition = "none";
            childBox.style.webkitTransition = "none";
        }
        //设置位置样式的封装
        function setTranslateY(y){
            childBox.style.transform = "translateY("+y+"px)";
            childBox.style.webkitTransform = "translateY("+y+"px)";
        }
        // 获取触摸开始的位置
        childBox.addEventListener('touchstart',function(e){
            startY = e.touches[0].clientY;
            console.log(startY);
        })
        // 获取移动后的位置
        // 计算移动的距离
        //
        childBox.addEventListener('touchmove',function(e){
            moveY = e.touches[0].clientY;
            distanceY = moveY - startY;
            //console.log(distanceY);
            addTransition();
            if(distanceY+rightCurrY<maxSwipe&&distanceY+rightCurrY>minSwipe){
                setTranslateY(distanceY+rightCurrY);
            }


        })
        window.addEventListener('touchend',function(e){
            if(distanceY+rightCurrY>maxY){
                rightCurrY = maxY;
                setTranslateY(rightCurrY);
            }else if(distanceY+rightCurrY<minY){
                rightCurrY = minY;
                setTranslateY(rightCurrY);
            }else{
                rightCurrY = distanceY + rightCurrY;
            }

        });
    }

}
