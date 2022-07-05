
$().ready(function()
{
    console.log('Jquery Ativo');
    // $(...).text() recupera o texto completo do elemento
    // $(...).text(valor) configura o texto
    // $('h1').html('Aulas de JQUERY - 2022!');    
    // $('h1').attr('style','color:purple !important');
    console.log($('h1').attr('style'));

    $('article p').eq(0).css({'color':'red'});
    console.log($('p').eq(1));

    //mouseevent, mouseleave, click
    $('#a1 p').css({'cursor':'pointer'});
    $('#a1 p').on({
        mouseenter : function()
        {
            $(this).css({'background-color':'lightblue'});
        },
        mouseleave : function()
        {
            $(this).css({'background-color':'white', 'color':'black'});
        },
        click : function()
        {
            $(this).css({'background-color':'whiteblue', 'color':'white'});
        }
    })//on

    //show, hide, toggle
    $('#a2 p').css({'cursor':'pointer','text-decoration':'underline'});
    $('#a3 p').css({'cursor':'pointer','text-decoration':'underline'});
    $('#a2 p').click(function()
    {
        // $('#a2 img').show();
        // $('#a2 img').toggle();
        //show(), hide()
        // fadeIn, fadeOut, fadeToggle
        $('#a2 img').fadeToggle(6000);//ao clicar a imagem aparece e desaparece nesse tempo 
    });
    $('#a3 p').click(function(){
        $('#a3 img').fadeToggle(4000);
    });

});//ready