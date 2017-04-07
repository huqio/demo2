function rem() {
    /*让文字和标签的大小随着屏幕的尺寸做变话 等比缩放*/
    var html = document.getElementsByTagName('html')[0];
    /*取到屏幕的宽度*/
    var width = window.innerWidth;
    /* 640 100  320 50 */
    width = width >= 640 ? 640 : width;
    var fontSize = 180 / 640 * width;
    /*设置html的字体大小 也就是1rem的大小,后面设置大小就可以根据html字体的大小来用rem做单位设置大小*/
    html.style.fontSize = fontSize + 'px';
    window.onresize = function () {
        var html = document.getElementsByTagName('html')[0];
        /*取到屏幕的宽度*/
        var width = window.innerWidth;
        /* 640 100  320 50 */
        width = width >= 640 ? 640 : width;
        var fontSize = 180 / 640 * width;
        //console.log(fontSize);
        /*设置fontsize*/
        html.style.fontSize = fontSize + 'px';
    }
}