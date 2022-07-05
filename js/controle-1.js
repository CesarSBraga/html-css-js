// alert("TESTE do JS ativo!");
console.log("TESTE do JS. Ativo!");
// Variáveis
// let - var - const
var dev = 'Desenvolvedor';
let modulo;
let aulas = 'Javascript';
const cargaHoraria= 60.75;
// cargaHoraria = 40;
aulas = 'NodeJS';
let cargaHorariaNoturna = cargaHoraria + 20;
let cargaHorariaExtra = cargaHoraria - 10;
let inicio = false;
let linguagens = ['PHP', 'NodeJs', 'Javascript', 'ReactJs', 'Ruby ou Raills'];//Array

linguagens[0] = 'Phython';
let h1 = document.querySelector('h1');

console.log(aulas);//valor de aula
console.log('Hoje a aula é sobre:  ' + aulas + '  tipo ' + typeof(aulas));
console.log(typeof(aulas)); // variavel do tipo string
console.log(typeof(cargaHoraria));// variavel do tipo number
console.log('A carga horaria noturna é: ' + cargaHorariaNoturna + ' tipo ' + typeof(cargaHorariaNoturna));
console.log(' tipo ' + typeof(inicio));// boolean
console.log('O valor inicial de modulo é: ' + modulo);
console.log(linguagens);
console.log('Linguagens de programação: ' + (linguagens));
console.log(linguagens[0]);
console.log(h1);


///alterando o texto de um elemento ///
h1.textContent='Aulas de Javascript';

///inserindo estilo inline///
// queryselector acessa o primeiro elemento da seleção
// queryselectorAll acessa toda a coleção dos index iniciando em zero
let p1 = document.querySelectorAll('section p')[0];
p1.style.color = '#999';

///Inserindo uma classe em CSS ///
p1.className = 'paragrafo';


// Criando números aleatórios
let numeroDaSorte;
let sorteiaNumero;
// Math.round() arredondamento  
// Math.floor() arredonda para menor 
// Math.ceil() arredonda para maior
numeroDaSorte = Math.random()*linguagens.length;//faz sorteio - resultado entre 0 e 99 com decimais
sorteiaNumero = parseInt(numeroDaSorte); // resultado numero inteiro de 0 a 3

h1.textContent = 'Aulas de ' +  linguagens[sorteiaNumero] + ' !!!'
// console.log(sorteiaNumero);


//Criando elementos HTML
// let div=document.createElement('div');
let lista = document.createElement('ul');
let l1=document.createElement('li');
let l2=document.createElement('li');
let l3=document.createElement('li');
let l4=document.createElement('li');

let titulo= document.createElement('h3');
titulo.textContent= 'Profissões';

let item1, item2, item3;
item1='Medicina';
item2='Advocacia';
item3='Engenharia';
item4='Publicitário';

l1.textContent=item1;
l2.textContent=item2;
l3.textContent=item3;
l4.textContent=item4;
//anexa os itens a lista
lista.appendChild(l1);
lista.appendChild(l2);
lista.appendChild(l3);
lista.appendChild(l4)
console.log(lista);
//coloca no container #box-01 para visualização o titulo e lista criado aqui em JS
document.querySelector('#box-01').appendChild(titulo);
document.querySelector('#box-01').appendChild(lista);

// CRIANDO IMAGENS
let img1 = new Image();
let img2 = new Image();
let img3 = new Image();
let img4 = new Image();
img1.src='../img/galeriaPref/people15.jpg';
img2.src='../img/galeriaPref/people11.jpg';
img3.src='../img/galeriaPref/people08.jpg';
img4.src='../img/galeriaPref/people07.jpg';
img1.className='w-25';
img2.className='w-25';
img3.className='w-25';
img4.className='w-25';

lista.style.marginBottom='3vh';//espaço entre lista e imagens

//div.appenChild(img1);
//div.appenChild(img2);
//div.appenChild(img3);
//div.appenChild(img4);
//document.querySelector('#box-01').appendChild(div);
// coloca no container #box-01 para visualização as imagens criada aqui em JS
document.querySelector('#box-01').appendChild(img1);
document.querySelector('#box-01').appendChild(img2);
document.querySelector('#box-01').appendChild(img3);
document.querySelector('#box-01').appendChild(img4)


//Controle if/else em forms
let f1 = document.forms.f1;
let nome = f1.nome;
let email = f1.email;
let btnF1 = document.querySelector('#f1 button');
let msg1 = document.querySelector('#msg1')

btnF1.onclick = function()
{
    if(nome.value == '')
    {
        msg1.textContent='Você precisa preencher o campo Nome!'
    }
    
    else if(email.value == ''){
        msg1.textContent = 'Você precisa preencher o campo email!'
    }
    else
    {
        msg1.textContent = 'Olá, ' + nome.value + ' - ' + email.value;
    }


    // if(nome.value=='' || email.value ==''){
    //     msg1.textContent = 'Preencha os campos!'
    // }else{
    //     msg1.textContent = 'Olá, ' + nome.value + ' - ' + email.value;
    // }

    // ternário
    // nome.value == '' || email.value == ''? msg1.textContent='Preencher os campos obrigatórios!' : msg1.textContent= 'Olá, ' + nome.value +' - ' + email.value;
}






