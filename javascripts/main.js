$(function(){
  var CarouselNav = function(element){
  this.$navIndicators = this.$element.find('.nav-indicators');

  if (Carousel.prototype.slide()){
    if (this.$navIndicators.length) {
      this.$navIndicators.find('.active').removeClass('active');
      this.$element.one('slid.bs.carousel', function () {
        var $nextIndicator = $(that.$navIndicators.children()[that.getActiveIndex()]);
        $nextIndicator && $nextIndicator.addClass('active')
      });
    }
  }
};
});