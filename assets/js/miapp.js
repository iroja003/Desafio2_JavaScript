// Declaracuion de variables
var dropDown1 = document.getElementById("numero1");
var dropDown2 = document.getElementById("numero2");
var dropDown3 = document.getElementById("numero3");
var idText2   = document.getElementById("idTexto2").value;

function darCilck(){
 console.log("doy click");
 let  idImg1=document.getElementById("idImg1");
// console.log(idImg1.style.border);
   if (idImg1.style.border ==="") {
      idImg1.style.border = "4px solid red";
   } else {
      idImg1.style.border = "";
   }
}

function SumarStickers(){

   let totalEje21 = document.getElementById("totalEje21").value;
   let totalEje22 = document.getElementById("totalEje22").value;
   let totalEje23 = document.getElementById("totalEje23").value;

   totalEje21 = parseInt(totalEje21);
   totalEje22 = parseInt(totalEje22);
   totalEje23 = parseInt(totalEje23);
   
   let vTotal  = totalEje21 + totalEje22 + totalEje23;
   var idTotal = document.getElementById("idTotal");

   if (vTotal > 10 ) {
      idTotal.innerHTML = "Llevas Demasiados Stickers : "+ vTotal;
   } else {
      idTotal.innerHTML = "Llevas [ "+ vTotal+ " ] Sticker(s) en Total";
   }  

}

function Ingresar(){
   var cClave = "";
  
   if ( idText2 === "" ) {
      dropDown1.selectedIndex = 0;
      dropDown2.selectedIndex = 0;
      dropDown3.selectedIndex = 0;
   }  
   let valor1 = document.getElementById("numero1").value;
   let valor2 = document.getElementById("numero2").value;
   let valor3 = document.getElementById("numero3").value;
   
   //
   cClave = valor1+valor2+valor3;
   //
   switch(cClave) {
      case  "000":  idTexto2.innerHTML = "Debe Ingresar una Clave"; idText2.style.color = red; break;
      case  "911":  idTexto2.innerHTML = "Password 1 Correcto"; break;
      case  "714":  idTexto2.innerHTML = "Password 2 Correcto"; break;
      default    :  idTexto2.innerHTML = "Password  Incorrecto"; 
   }
    
}