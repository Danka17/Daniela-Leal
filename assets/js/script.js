var modalContentElements = ["https://getbootstrap.com/", "https://jquery.com/"];

function modalContent(id) {
  const pageUrl = modalContentElements[id];
  $("iframe").attr("src", pageUrl);

  $("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();

      var gato = this.hash;

      $("html, body").animate({
        scrollTop: $(gato).offset().top
      }, 800, function(){
        window.location.hash = gato;
      });
    }
  });
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$('.carousel').carousel()