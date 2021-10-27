$(document).ready(function(){
    $("#boton-bazar").click(function(){
        $("#electro,#cocina,#bazar").show()
       $("#electro,#cocina").toggle()
    }); 

    $("#boton-cocina").click(function(){
        $("#electro,#cocina,#bazar").show()
        $("#electro,#bazar").toggle()
     }); 

     $("#boton-electro").click(function(){
        $("#electro,#cocina,#bazar").show()
        $("#cocina,#bazar").toggle()
     }); 

     $("#boton-todo").click(function(){
        $("#electro,#cocina,#bazar").show()
     }); 

     $("#boton-tema").click(function(){
     $("#tema-alterno,#menu").toggleClass() 
    }); 


   

    





});

