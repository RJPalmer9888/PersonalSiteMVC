$(".thumb").on("click", function () {
    let imgSrc = $(this).attr("src");

    //Plug the image into #lightbox-content, using imgSrc as the src
    $("#lightbox-content").html('<img src="' + imgSrc + '" class="img-responsive" />');
    //Make the lightbox visible by fading it in
    $("#lightbox-container").fadeIn(500);

    //Close container when user clicks anywhere within it:
    $("#lightbox-container").on("click", function () {
        $(this).fadeOut(500);
    });
});