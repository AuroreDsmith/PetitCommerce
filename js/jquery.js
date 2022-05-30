/////////////////////
// TEST DE LA PAGE
/////////////////////
$(function () {
  console.log("page html et jquery chargés");
});

/////////////////////
// LANGAGE DE LA PAGE
/////////////////////
$("#drapeau").on("click", function () {
  let isfrench = this.src.indexOf("img/icone-drapeau-francais.jpg") != -1;
  this.src = isfrench ? this.src.replace("img/icone-drapeau-francais.jpg", "img/uk_flag.png") : this.src.replace("img/uk_flag.png", "img/icone-drapeau-francais.jpg");
});

/////////////////////////
// FICHE PRODUIT
////////////////////////
//Tooltips sur selection de la couleur du produit
$(".couleur_produit").tooltip();

//Tooltips sur coeur favori
$(".fa-heart").tooltip();

//tooltip sans fleche
// $(function () {
//   $(".material-tooltip-main").tooltip({
//     template: '<div class="tooltip md-tooltip-main"><div class="tooltip-arrow md-arrow"></div><div class="tooltip-inner md-inner-main"></div></div>',
//   });
// });

////////////////////////////////////
// TABLEAU MON COMPTE - RESPONSIVE
///////////////////////////////////
$(document).ready(function () {
  $(".table-responsive-stack").each(function (i) {
    var id = $(this).attr("id");
    //alert(id);
    $(this)
      .find("th")
      .each(function (i) {
        $("#" + id + " td:nth-child(" + (i + 1) + ")").prepend('<span class="table-responsive-stack-thead">' + $(this).text() + ":</span> ");
        $(".table-responsive-stack-thead").hide();
      });
  });
});

//////////////////////
// FOOTER
/////////////////////
//Tooltips
$(".fa-print").tooltip();

//BOUTON IMPRESSION DE LA PAGE
$(".fa-print").click(function () {
  window.print();
});

// Newsletter
$(".site-footer .col-sm-12").append("<h6>NEWSLETTER</h6><input type='email' placeholder='Entrez votre email' class='bouton5'/><button class='btn btn-outline-light ml-1 pt-2 mb-1' type='submit'>Valider</button>");
