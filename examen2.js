var persona = {   // Objeto literal persona
   beberDeVaso: function(vaso){                           //funcion para beber el contenido del vaso.
	   if ( vaso.estaVacio() ){
            console.log("El vaso esta vacio.");
	       } else {
            vaso.cambiarEstado(false);
            console.log("Se bebio el contenido del vaso");
	    }
    },
    llenarVaso: function(vaso){                           //funcion para beber el contenido del vaso.
 	   if ( vaso.estaVacio() ){
             vaso.cambiarEstado(true);
             console.log("Se lleno el vaso");
 	       } else {
             console.log("El Vaso ya tiene contenido");
 	    }
     }
}
var vaso= {                    // atributo del objeto literal persona, tambien objeto literal
    tieneContenido:true,
    estaVacio: function(){                      // verifica si es que tiene contenido.
    return !this.tieneContenido;
    },
    cambiarEstado: function(valor){                  //modifica el estado del vaso
        this.tieneContenido= valor;
    }
}
