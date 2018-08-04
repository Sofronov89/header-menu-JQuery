//$(function() {
//    $("#bar ul li a").click(function() {
//        $("#bar ul li a").removeClass("active");
//        $(this).toggleClass("active");
//    })
//});

$(function () {
    $('div.burger').click(function () {
        $('div.mobile-tab').show();
    })
})

$(function() {                                     //функция активного состояния и отмены активного
    $('div.bar li').click(function() {             //состояния других кнопок при нажатии другой
        $('div.bar li').removeClass("active");
        $(this).toggleClass("active");
    })
});

$( window ).resize(function(widthWindow){ // задаем функцию при срабатывании события "resize" на объекте window
    var widthWindow = $( window ).width();// ширина области просмотра браузера
    console.log(widthWindow);

    var widthList = 0;

    $('div.bar li').each(function(){                 //подсчет ширины элементов в цикле(each)
        widthList += $(this).innerWidth();
    });

    if (widthWindow - widthList < 65) {
        if ($('div.bar li:last').hasClass('active')) {         //если имеет активное состояние
            var w = $('div.bar li').eq($('div.bar li').length - 2).detach();//вырезаем предпоследний элемент 1-го списка
            $('div.mobile-tab ul:first').prepend(w);               //вставляем его перед первым элементом 2-го списка
        } else {
            var q = $('div.bar li:last').detach();          //вырезаем последний элемент 1-го списка
            $('div.mobile-tab ul:first').prepend(q);         //вставляем его перед первым элементом 2-го списка
        };
    };

    if (widthWindow - widthList > 177 && widthWindow - widthList < 500) {                     //а вот отсюда жопа!!!
        var eqw = $('div.mobile-tab li:first').detach();
        $('div.bar ul:last').append(eqw);
    };
});

//$(function () {
//
//
//    $('div.bar li').click(function () {
//        $('div.bar li').not($(this).parent()).removeClass('active');
//        $(this).parent().toggleClass('active');
//    });
//});

//(function() {
//    $('div.bar li').click(function() {
//        if($(this).parent().hasClass('active')) {
//            $('div.bar li').removeClass('active');
//        } else {
//            $('div.bar li').removeClass('active');
//            $(this).parent().addClass('active');
//        }
//    });
//});

//$('#form').on('change', function(){
//    if($(this).is(':checked')) $('.btn').attr('disabled', false);
//    else $('.btn').attr('disabled', true);
//});
//
//var lis=document.querySelectorAll('ul.menu li div');//находим коллекцию дивов
//for(var i=0;i<lis.length;i++){//присваиваем им всем событие наведения
//    lis[i].on('change', function(){
//        if($(this).is(':checked')) $(lis[i]).attr('disabled', false);
//        else $(lis[i]).attr('disabled', true);
//    })
////здесь можно писать любые другие стили
//
//
//    function fixWhich(e) {
//        if (!e.which && e.button) { // если which нет, но есть button... (IE8-)
//            if (e.button & 1) e.which = 1; // левая кнопка