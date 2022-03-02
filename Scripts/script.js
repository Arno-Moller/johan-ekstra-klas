$(document).ready(() => {
    let text = document.getElementById("Heading1");
    text.style.position = 'absolute';
    let width = Math.ceil(text.clientWidth);
    let formattedWidth = width + "px";
    text.style.position = 'relative';

    $("#h1Horizontal").width(formattedWidth);

    //second div
    text = document.getElementById("Heading2");
    text.style.position = 'absolute';
    width = Math.ceil(text.clientWidth);
    formattedWidth = width + "px";
    text.style.position = 'relative';

    $("#h2Horizontal").width(formattedWidth);

    //third div
    text = document.getElementById("Heading3");
    text.style.position = 'absolute';
    width = Math.ceil(text.clientWidth);
    formattedWidth = width + "px";
    text.style.position = 'relative';

    $("#h3Horizontal").width(formattedWidth);

})

$("#Location").on('click', () => {

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#Heading1").offset().top - 200
    }, 500);

})
$("#Price").on('click', () => {

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#Heading2").offset().top - 200
    }, 500);

})
$("#Classes").on('click', () => {

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#Heading3").offset().top - 200
    }, 500);

})
$("#Contact").on('click', () => {

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#Heading4").offset().top - 200
    }, 500);

})

$("#About").on('click', () => {

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#moreAbout").offset().top - 200
    }, 500);

})

$("#moreAbout").on('click', () => {

    $.confirm({
        theme: 'supervan' ,
        title: 'Let me introduce myself',
        content: 'My name is Johan Stephan Vermaak. ' +
            'I am currently a third year BSc. Chemistry / Physics student at ' +
            'the University of Pretoria. I have been tutoring high school students' +
            ' (Matriculants in particular) for the past two years \n' +
            'If it is help you want in your high school mathematics and science subjects,' +
            ' you have certainly come to the right place.\n' +
            'As a student myself, I understand that sometimes someone just needs that ' +
            'helping hand to achieve the next level. Albert Einstein' +
            ' once said: “Knowledge equals experience”, but sometimes one’s first experience ' +
            'with some areas of the mathematical and scientific subjects can be quite daunting. ' +
            'But no fear with a helping hand to fill in the blanks and a desire to learn, ' +
            'your child’s academic goals can be realised.\n',
        buttons: {
            Ok: function () {

            },

        },
        backgroundDismiss: true
    });

})