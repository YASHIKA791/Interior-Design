window.onscroll = function () {scrollfunction()};
function scrollfunction () {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        $('.navbar-expand-sm').addClass('nav-bgdark fixed-top')
        $('.nav-item , a').css({"color": "white"})
    }
    else {
        $('.navbar-expand-sm').removeClass('nav-bgdark fixed-top')
        $('.nav-item , a').css({"color": "rgb(7,6,6)"})
    }
}