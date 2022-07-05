console.log('JS Ativo!!');
window.onload=function()
{
    let selectProduto = document.querySelector('#produtos');
    let imgProduto = document.querySelector('#descProduto img')
    let produtoTxt = document.querySelector('#descProduto p')
    console.log(selectProduto);
    selectProduto.onchange=function()
    {
        console.log(this.selectedIndex);
        console.log(this.value);
        switch(this.selectedIndex)
        {
            case 1: 
            imgProduto.src='../img/produtos/buds-wireless.jpg';
            produtoTxt.innerHTML='Phone incrivelmente confortavel!!! Proprio para o dia a dia, tanto no trabalho como para esportes e afins!!';
            break;
            case 2: 
            imgProduto.src='../img/produtos/ryzen7.jpg';
            produtoTxt.textContent='Aqui esta esta incrivel maquina para facilitar o seu dia. 8gb de ram para vc voar nos trabalhos e videos!';
            break;
            case 3: 
            imgProduto.src='../img/produtos/inspirona4.jpg';
            produtoTxt.innerHTML='Maquina dessenvolvida para o seu conforto e com alta velocidade e desempenho... muito leve e pode ser levado na mochila sem incomodo algum.'
            break;
            case 4: 
            imgProduto.src='../img/produtos/tws-bluetooth.jpg';
            produtoTxt.textContent='você é apaixonado por musicas e tecnologia? Aqui está o fone que foi feito para você... alta potência, bateria de alta duração e próprio para corrida, desenvolvido com materia que nao escorrega do ouvido.';
            break;
            case 5: 
            imgProduto.src='../img/produtos/gamer-acer.jpg';
            produtoTxt.innerHTML='NoteBook Gamer!!! O melhor e mais leve... agora vc pode levar sua maquina com seus jogos para onde quiser!!! 16gb de ram, placa grafica de ultima geração, tela 8k e super leve, e tem mais, a bateria dura até 8 horas'
            break;
            case 6: 
            imgProduto.src='../img/produtos/fone-philips-preto.jpg';
            produtoTxt.textContent='Desenvolvido para quem gosta do estilo retrô... fone em estilo de concha mas com a mais alta tecnologia; super potente em rms; adaptavel com regulagem e até crianças conseguem ultilizar; recarregavel e com bateria de alta duração...'
            break;
        };
    };

    //FOR
    let cores=['Azul', 'Vermelho', 'Verde', 'Laranja', 'Marrom', 'Amarelo', 'Roxo'];//length=7
    let hexaCor= new Array('#00f','#f00', '#0f0', '#ffa500', '#a52a', '#ff0', '#A020F0');

    for(var i=0; i<cores.length; i++)
    {
        console.log('Cor: ' + cores[i]);
        console.log(hexaCor[i]);
        var div = document.createElement('div');
        div.style.backgroundColor=hexaCor[i];
        div.innerHTML='<p>' +cores[i] +'</p>';
        cores [i] == 'Azul'? div.style.color= '#fff': null; // troca a cor da fonte 
        // console.log(div);

        document.querySelector('#box-01').appendChild(div);
    };
    // console.log(i); próximo i fora do loop(ultimo incremento do iterador) retorna 7

    //Galeria de Imagens
    // var n;
    for(var i=1; i<21; i++)
    {
        i<10 ? n= '0' + i : n=i;
        
        var url = '../img/galeriaPref/nature'+ n +'.jpg';
        var img = new Image();
        img.src=url;
        // img.style.width = '32%';
        // img.style.height='25%';// foi feito os ajustes no css
        // img.style.margin='0.04%';
        document.querySelector('#box-02').appendChild(img);
        // console.log('../img/galeriaPref/nature'+ n +'.jpg');
    };

    //Consumindo a galeria criada usando forEach
    console.log(document.querySelector('#box-02').querySelectorAll('img').length);

    let galeria =
    document.querySelector('#box-02').querySelectorAll('img');
    // Function resize img galeria
    function resize()
    {
        galeria.forEach(function(obj)
        {
            
            obj.style.width='33%';

        });
    }    
    // resize(); função é executada ao carregar a pagina
    galeria.forEach(function(obj, index)
    {
        obj.style.cursor='pointer';
        obj.onclick = function()
        {
            resize();
            
            // alert(this.src);
            this.style.width='100%';
        }
        console.log(obj);
        console.log(index);
    });

};//onload
