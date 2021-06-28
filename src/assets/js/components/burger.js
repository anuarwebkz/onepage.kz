
$(function() {

    let navToggle = $('#navToggle');
    let nav = $('#nav');

    let header = $("#header")
    let headerH = header.innerHeight();

    navToggle.on('click', function(event){
        event.preventDefault();

        nav.toggleClass('show');
    });

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let scrollEl = $(this).data("scroll");
        let scrollPos = $(scrollEl).offset().top;

        $("html, body").animate({
            scrollTop: scrollPos - headerH
        }, 500)

        console.log(scrollPos);

    });
})

