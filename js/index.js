
    var paniers=0;

$(document).ready(function() {
    $("#sidebarCollapse").on("click", function() {
      $("#sidebar").addClass("active");
    });
  
    $("#sidebarCollapseX").on("click", function() {
      $("#sidebar").removeClass("active");
    });
  
    $("#sidebarCollapse").on("click", function() {
      if ($("#sidebar").hasClass("active")) {
        $(".overlay").addClass("visible");
        console.log("it's working!");
      }
    });
  
    $("#sidebarCollapseX").on("click", function() {
      $(".overlay").removeClass("visible");
    });
  });

  var listVoitures=localStorage.getItem("v")



  function newVoiture(){
    i=0;

    for(let x of voitures  ){
    //  nawVoiture='<div class="card"><div class="position-relative"><img src="https://catalogue.automobile.tn/big/2020/07/46383.jpg" class="card-img-top" alt="Nike - Air Max 90"><div class="card-img-overlay d-flex justify-content-end align-items-end"><button type="button" class="btn btn-light rounded-circle" data-toggle="button" aria-pressed="false" autocomplete="off"><i class="far fa-heart"></i></button></div></div><div class="card-body"><h5 class="card-title"><small>Nike - Air Max 90 - Baskets en cuir - Bleu 302519-400</small></h5><p class="card-text"><strong class="text-danger">111,49 €</strong> <del>139,99 €</del></p></div></div>'
      i++;
      
     //nawVoiture='<div class="col-12 col-sm-4 my-3 my-sm-0"><div class="card"><div class="position-relative"><img src="'+x.picture+'" class="card-img-top" alt="Nike - Air Max 90"><div class="card-img-overlay d-flex justify-content-end align-items-end"><button type="button" class="btn btn-light rounded-circle" data-toggle="button" aria-pressed="false" autocomplete="off"><i class="far fa-heart"></i></button></div></div><div class="card-body"><h5 class="card-title"><small>'+x.name+'</small></h5><p class="card-text"><strong class="text-danger">a partir/strong> <del>'+x.prix+'TND</del></p></div></div></div></div>';
   if(i<7){

     nawVoiture='<div class="card">'+
     '<div class="position-relative">'+
       '<img src="'+x.picture+'" class="card-img-top" alt="Baskets en daim à semelle épaisse">'
       +'<div class="card-img-overlay d-flex justify-content-end align-items-end">'
         +'<button type="button" class="btn btn-light rounded-circle" data-toggle="button" aria-pressed="false" autocomplete="off">'
           +'<i class="far fa-heart"></i>'
         +'</button>'
       +'</div>'
     +'</div>'
     +'<div class="card-body">'
       +'<h5 class="card-title">'
         +'<small>'+x.name+'</small>'
       +'</h5>'
         +'<div class="row">'
           +'<div class="col-sm-6">'
             +'<p class="card-text"><strong class="text-danger">A partir</strong> '+x.prix+' </p>'
           +'</div>'
           +'<div>'
             +'<input type="button" name="achete" id="'+x._id+'" value="Achete"  onclick="ajouter(this.id)"> '
           +'</div>' 
          +'</div>'
      +'</div>'
   +'</div>'
    
     document.getElementById("newVoiture"+i).innerHTML=nawVoiture 
    }
     
  }
    }
    function recherche(ch){
      for(let x of voitures){
        if(x._id==ch)
        return x;
      }
    }

    function ajouter(a){
      x=recherche(a)
      k=parseInt(localStorage.getItem("taille"))
     /* location.replace("./panier.html")
      document.getElementById("panier1").innerHTML=panier*/
      k++;
      localStorage.setItem("p"+k,x._id)
      localStorage.setItem("taille",k)
    
    }

   function affiche(){
      if(localStorage.getItem("username")!=null){
          user= "<a href='#' class='dropdown-toggle nav-link' data-toggle='dropdown'><img src='http://placehold.it/18x18' class='profile-image img-circle'>" +localStorage.getItem("username") +"</a><ul class='dropdown-menu'><li><a href='#' class='nav-link'><i class='fa fa-cog'></i> Account</a></li><li class='divider'></li><li><a href='login.html'  class='nav-link'><i class='fa fa-sign-out'></i> Sign-out</a></li></ul>"
      }else{
          user="<a href='login.html' class='nav-link navlink'>Login</a>"
      }
      document.getElementById("user").innerHTML=user
    
      newVoiture()
  }


  