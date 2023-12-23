$(function(){
    var Indice = 0;
    var maxIndice = ($('.img div').length - 1); //número de imagens
    //console.log(maxIndice);

    $('.imagem').eq(Indice).fadeIn(); //mostrando primeira imagens, já que todas tão com display none

    $('.footer div').click(function(){

        //alert('clique');
        
        //Mudando o Slide para o slide correspondente a bullet
        $('.imagem').stop().fadeOut(0); //Parando qualquer animação e ocultando todos os slides
        Indice = $(this).index(); //Pegando o indice correspondente ao clique
        $('.imagem').eq(Indice).stop().fadeIn(0); //Mostrando imagem correspondente
  
        //Reinicinado o tempo do intervalo após o clique na bullet
        clearTimeout(meuIntervalo);
        alternarSlider();
     });

    alternarSlider();

    function alternarSlider(){
        meuIntervalo = setInterval(function(){
            //console.log('alterando imagem');
            //console.log(Indice);
   
            if(Indice == maxIndice){
               Indice = 0;
            } else{
               Indice+=1;
            }
   
            $('.imagem').fadeOut(2000); //Oculta todos os slides
            $('.imagem').eq(Indice).fadeIn(2000); //mostra o slide atual            
            
         }, 5000);
    }

    


});