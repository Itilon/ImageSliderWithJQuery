$(document).ready(function() {

    const imgs = $('img');

    $('.next').on('click', function() {
        const currentImg = $('.active');
        const nextImg = currentImg.next();

        if (nextImg.length) {
            currentImg.removeClass('active');
            nextImg.addClass('active');
        } else {
            currentImg.removeClass('active');
            $(imgs[0]).addClass('active');
        }
    });

    $('.prev').on('click', function() {
        const currentImg = $('.active');
        const prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass('active');
            prevImg.addClass('active');
        } else {
            currentImg.removeClass('active');
            $(imgs[imgs.length - 1]).addClass('active');
        }
    });
});
