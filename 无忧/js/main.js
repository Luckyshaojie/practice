/**
 * @头图轮播
 */
var baseImgIndex = 0;
function topImages() {
    this._constructor();
}

topImages.prototype = {
    _constructor: function() {
        this.initEvents();
    },
    initEvents: function() {
        var self = this;
        setInterval(self.imgSlider,3000);
    },
    imgSlider: function() {
        var self = this;
        var _dom = $('.b_cover');
        baseImgIndex += 1;
        if(baseImgIndex == 3){
            baseImgIndex = 0
        }
        var cur = baseImgIndex;
        var next = cur + 1;
        _dom.find(".cover_img0"+cur).fadeOut(1000);
        _dom.find(".cover_img0"+next).fadeIn(1000);
    }
}
window.topImages = topImages;
var itopImages = new topImages();



function switchtab(){
    var $container = $('.js_infor');
    var $tabhd = $container.find('.hd .tab-hd li');
    var $body = $container.find('.ct .photo-show');
    $container.delegate('.hd .tab-hd li', 'mouseenter', function(event) {
        var $m = $(this);
        if($m.hasClass('active')){
            return;
        }
        var idx = $m.index();
        $tabhd.removeClass('active');
        $m.addClass('active')
        $body.eq(idx).siblings().hide().end().show();
    });

    $body.delegate('.photo-show li', 'mouseenter', function(event) {
        $(this).find('.infor').addClass('active');
    });

    $body.delegate('.photo-show li', 'mouseleave', function(event) {
        $(this).find('.infor').removeClass('active');
    });

}
    
$(function(){
    switchtab();
});