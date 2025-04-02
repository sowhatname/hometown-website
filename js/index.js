var imgs = document.getElementsByClassName("img");
var dots = document.getElementsByClassName("dot");
var index = 0;
var time = null;

// 初始化时先执行一次show函数，用于显示第一张图
show();
time = window.setInterval(show, 2000);

function show() {
    console.log(index);
    for (var i = 0; i < dots.length; i++) {
        if (i == index) {
            dots[i].classList.add("cur");
            imgs[i].classList.add("cur");
        } else {
            dots[i].classList.remove("cur");
            imgs[i].classList.remove("cur");
        }
    }
    index++;
    if (index == dots.length) {
        index = 0;
    }
}

// 给每个圆点添加鼠标悬停事件处理函数
for (var i = 0; i < dots.length; i++) {
    dots[i].onmouseover = function () {
        // 清除自动轮播的定时器，让轮播暂停
        window.clearInterval(time);
        // 根据当前悬停的圆点来设置对应的索引，并显示对应图片
        index = Array.from(dots).indexOf(this);
        show();
    };

    dots[i].onmouseout = function () {
        // 鼠标移开后，重新开启自动轮播定时器
        time = window.setInterval(show, 2000);
    };
}

function changeBGColor() {
    document.body.style.backgroundImage = 'url(./images/index_images/night.png)'
}
