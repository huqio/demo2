$(function () {
    // 登陆条下拉菜单
    drop($('.loginbar .nav li:nth-of-type(2)'));
    drop($('.loginbar .other li:nth-of-type(3)'));
    function drop($ele) {
        $ele.on('mouseenter', function () {
            $(this).find('ul').stop().slideDown();
        })
        $ele.parent().on('mouseleave', function () {
            $(this).find('ul').stop().slideUp();
        })

    }

    // 焦点图
    // 焦点图隐藏显示
    var timer;
    var $arrow = $('.news-left .focus-img .arrow');
    var $leftArrow = $('.news-left .focus-img .arrow a:nth-of-type(1)');
    var $rightArrow = $('.news-left .focus-img .arrow a:nth-of-type(2)');
    $('.news-left .focus-img').on('mouseenter', function () {
        clearInterval(timer);
        $arrow.fadeIn();
    })
    $('.news-left .focus-img').on('mouseleave', function () {
        timer = setInterval(function () {
            $rightArrow.trigger('click');
        }, 2000);
        $('.news-left .focus-img .arrow').fadeOut();
    })
    $leftArrow.on('mouseenter', function () {
        $(this).css('backgroundPosition', '-3px -1px');
    })
    $leftArrow.on('mouseleave', function () {
        $(this).css('backgroundPosition', '-58px -1px');
    })
    $rightArrow.on('mouseenter', function () {
        $(this).css('backgroundPosition', '-261px -1px');
    })
    $rightArrow.on('mouseleave', function () {
        $(this).css('backgroundPosition', '-204px -1px');
    })
    //鼠标小方格移入就显示哪张图
    var pic = 0, rectIndex = 0;

    var $rects = $('.news-left .focus-img ul:nth-of-type(2) li');
    var $ul1 = $('.news-left .focus-img ul:nth-of-type(1)');
    var focusImgWidth = $('.news-left .focus-img').width();
    $rects.on('mouseenter', function () {
        rectIndex = $(this).index();
        pic = rectIndex;
        $ul1.stop().animate({'left': -$(this).index() * focusImgWidth}, 500)
        rect();
    })
    // 点击箭头切换焦点图
    // 设置小矩形当前样式（排他）
    function rect() {
        $($rects[pic]).addClass('current').siblings().removeClass('current');
    }

    // 设置ul动画到的位置
    function ulmove() {
        $ul1.stop().animate({'left': -pic * focusImgWidth}, 500);
    }

    var $focusImgs = $('.news-left .focus-img ul:nth-of-type(1) li');
    $rightArrow.on('click', function () {
        if (pic >= $focusImgs.length - 1) {
            pic = 0;
            ulmove();
            rect();
            return;
        }
        pic++;
        ulmove();
        rect();
    })
    $leftArrow.on('click', function () {
        if (pic <= 0) {
            pic = $focusImgs.length - 1;
            ulmove();
            rect();
            return;
        }
        pic--;
        ulmove();
        rect();
    })

    timer = setInterval(function () {
        $rightArrow.trigger('click');
    }, 3000);

    //鼠标移入图片缓慢变大
    $('.img-box').parent().on('mouseover', function () {

        $(this).find('img').css({'transition': 'all 0.8s', 'transform': 'scale(1.2)'})
    })
    $('.img-box').parent().on('mouseleave', function () {

        $(this).find('img').css({'transition': 'all 0.8s', 'transform': 'scale(1)'})
    });

    // 明星圈 星访谈手风琴
    $('.stargroup .star-chat li').on('mouseenter', function () {
        //$('.stargroup .star-chat li').find('a:nth-of-type(2) img').slideUp();
        $(this).find('a:nth-of-type(2) img').css('display', 'block').end().siblings().find('a:nth-of-type(2) img').css('display', 'none');
    })


    //影视圈第三列轮播


    slide($('.filmgroup .con3-top .arrow a:nth-of-type(1)'), $('.filmgroup .con3-top .arrow a:nth-of-type(2)'), $('.filmgroup .con3-top .slide-con-box > ul > li'), $('.filmgroup .con3-top .slide-con-box > ul'), $('.filmgroup .slide-con-box').width())
    slide($('.filmgroup .con3-bottom .arrow a:nth-of-type(1)'), $('.filmgroup .con3-bottom .arrow a:nth-of-type(2)'), $('.filmgroup .con3-bottom .slide-con-box > ul > li'), $('.filmgroup .con3-bottom .slide-con-box > ul'), $('.filmgroup .slide-con-box').width())
    // 点击轮播图
    //参数一:左箭头
    //参数二:右箭头
    //参数三:所有轮播的子元素
    //参数四:父盒子(要加定位)
    //参数五:轮播图显示部分的宽度
    function slide(l, r, sons, father, width) {
        var boxIndex = 0;
        r.on('click', function () {
            boxIndex++;
            if (boxIndex > sons.length - 1) {
                boxIndex = sons.length - 1;
                return;
            }
            father.animate({'left': -boxIndex * width}, 500);
        })
        l.on('click', function () {
            boxIndex--;
            if (boxIndex < 0) {
                boxIndex = 0;
                return;
            }
            father.animate({'left': -boxIndex * width}, 500);
        })
    }


    // 海外 华语 鼠标移入切换
    $('.news-classify-title span').on('mouseenter', function () {
        $(this).find('a').addClass('current').parent().siblings().find('a').removeClass('current')
        $($('.news-classify-con>div')[$(this).index()]).show().siblings().hide();
    })


    //合作伙伴互相切换
    change1();
    function change1() {
        $('.partner .partner-con .con1').fadeOut(300, function () {
            $('.partner .partner-con .con2').fadeIn(300, function () {
                setTimeout(function () {
                    change2();
                }, 3000)

            });
        })
    }

    function change2() {
        $('.partner .partner-con .con2').fadeOut(300, function () {
            $('.partner .partner-con .con1').fadeIn(300, function () {
                setTimeout(function () {
                    change1();
                }, 3000)
            });
        })
    }

    // 台哥高清
    $('.star-img>div>div>a').on('mouseenter', function () {
        $(this).find('.bottom-info').stop().animate({'bottom': 0}, 100);
    })
    var temp = true;
    $('.star-img>div>div>a').on('mouseleave', function () {
        var arr = [[{'top': 600, 'opacity': 0}, {'top': 0, 'opacity': 1}], [{'left': -600, 'opacity': 0}, {'left': 0, 'opacity': 1}], [{'top': -600, 'opacity': 0}, {'top': 0, 'opacity': 1}], [{'left': 600, 'opacity': 0}, {'left': 0, 'opacity': 1}]];
        // 加temp 的目的是为了防止多次触发，造成位置偏移
        if(temp){
            temp = false;
            // 随机生成0-4
            var random = Math.floor(Math.random() * 4);
            $(this).find('.bottom-info').stop().animate({bottom: -56}, 100);
            $(this).stop().animate(arr[random][0], function () {
                //设置当前的层级比其他兄弟的低，这样可以使之后要显示的兄弟层级总是在上面
                $(this).css({
                    zIndex: 1
                }).siblings().css({
                    zIndex: 2
                })
                // 当前的元素瞬间回到起点位置，因为之后显示的兄弟层级高，所以看不见
                $(this).css(arr[random][1])
                // 动画执行完毕打开节流阀
                temp = true;
            })
        }
    })
})