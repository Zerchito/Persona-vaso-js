
var persona = {   // Objeto literal persona
    vaso: {                    // atributo del objeto literal persona, tambien objeto literal
     tieneContenido:true,
     estaVacio: function(){                      // verifica si es que tiene contenido.
        return !this.tieneContenido;
     },
     tomarContenido: function(){                  //modifica el estado del vaso
        this.tieneContenido= false;
     },
     agregarContenido: function(){               // modifica el estado del vaso
        this.tieneContenido= true;
     }
   },
   beber: function(){                           //funcion para beber el contenido del vaso.
	var auxiliar = this.vaso;
	if ( auxiliar.estaVacio() ){
            console.log("El vaso esta vacio.");
	} else {
            auxiliar.tomarContenido();
            console.log("Se bebio el contenido del vaso");
	}
   }
}
