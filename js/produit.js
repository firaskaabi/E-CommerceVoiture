var nVoitures=[]
function recherche(){
    nVoitures=[]
    let i=0;
   ch= document.getElementById("search").value
   for(let x of voitures){
       if(x.name.indexOf(ch)!=-1){
           nVoitures[i++]=x;
       }
   }
   if(i!=0)
    newVoiture(i);
   
}
  function newVoiture(k){
      if(k==10)
      nVoitures=voitures;
    i=0;

    for(let x of nVoitures  ){
    //  nawVoiture='<div class="card"><div class="position-relative"><img src="https://catalogue.automobile.tn/big/2020/07/46383.jpg" class="card-img-top" alt="Nike - Air Max 90"><div class="card-img-overlay d-flex justify-content-end align-items-end"><button type="button" class="btn btn-light rounded-circle" data-toggle="button" aria-pressed="false" autocomplete="off"><i class="far fa-heart"></i></button></div></div><div class="card-body"><h5 class="card-title"><small>Nike - Air Max 90 - Baskets en cuir - Bleu 302519-400</small></h5><p class="card-text"><strong class="text-danger">111,49 €</strong> <del>139,99 €</del></p></div></div>'
      i++;
      
     //nawVoiture='<div class="col-12 col-sm-4 my-3 my-sm-0"><div class="card"><div class="position-relative"><img src="'+x.picture+'" class="card-img-top" alt="Nike - Air Max 90"><div class="card-img-overlay d-flex justify-content-end align-items-end"><button type="button" class="btn btn-light rounded-circle" data-toggle="button" aria-pressed="false" autocomplete="off"><i class="far fa-heart"></i></button></div></div><div class="card-body"><h5 class="card-title"><small>'+x.name+'</small></h5><p class="card-text"><strong class="text-danger">a partir/strong> <del>'+x.prix+'TND</del></p></div></div></div></div>';
   if(i<k){

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
  while(i<10){
    document.getElementById("newVoiture"+i).innerHTML="<div></div>" 
    i++;
 }
    }


    function ajouter(a){
      alert("firas kaabi")
    }

   function listVoitures(){
      if(localStorage.getItem("username")!=null){
          user= "<a href='#' class='dropdown-toggle nav-link' data-toggle='dropdown'><img src='http://placehold.it/18x18' class='profile-image img-circle'>" +localStorage.getItem("username") +"</a><ul class='dropdown-menu'><li><a href='#' class='nav-link'><i class='fa fa-cog'></i> Account</a></li><li class='divider'></li><li><a href='login.html'  class='nav-link'><i class='fa fa-sign-out'></i> Sign-out</a></li></ul>"
      }else{
          user="<a href='login.html' class='nav-link navlink'>Login</a>"
      }
      document.getElementById("user").innerHTML=user
      newVoiture(10)
  }
