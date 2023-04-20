$(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
})
// customer say/testimonials-------
$(function(){
    $('.customSLider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        autoplaySpeed:5000,
    });
})