function recherche(ch){
    for(let x of voitures){
      if(x._id==ch)
      return x;
    }
  }

  function somme(m){
    x=recherche(m)

    pos=x.prix.indexOf("TND")
    ch=x.prix.slice(0,pos)

    ntotal=parseInt(localStorage.getItem("total"))
    ntotal+=(parseInt(ch)*(parseInt(document.getElementById(m).value))-1)

    document.getElementById("stotal").innerHTML=ntotal+"TND"

}
/*
function supprimer(m){
    x=0;
    ch=m.slice(1,m.length)
    t=parseInt(localStorage.getItem("taille"))
    for(i=0;i<=t;i++)
        if(localStorage.getItem("p"+i)==ch){
            localStorage.removeItem("p"+i)
            x++;
        }
        if(x!=0)
            localStorage.setItem("p"+(i-x),localStorage.getItem("p"+i))

        location.reload();


}*/
function p(){
   var  total=0;
    for(i=0;i<=parseInt(localStorage.getItem("taille"));i++){
        x=recherche(localStorage.getItem("p"+i))
        ajout='<td>'+x.name+'</td><td><input id="'+x._id+'" type="text" onkeyup="somme(this.id)" value="1"></td><td colspan="2">'+x.prix+'</td><td><input type="button" value="delete" onclick="supprimer(this.id)" id="1'+x._id+'"></td>'
        pos=x.prix.indexOf("TND")
        ch=x.prix.slice(0,pos)
        total+=parseInt(ch);
        localStorage.setItem("total",total)
        document.getElementById("panier"+(i+1)).innerHTML=ajout
        document.getElementById("stotal").innerHTML=total+"TND"


    }
}

