// Array
let servicos=['E-Commerce','Sistemas','Landing Page','Page Capture','Email Marketing','Web Sites', 'UX Design', 'UI design'];
//Acesso ao paragrafo com id='p1'
//let p1 = document.getElementById('p1')
let p1=document.querySelector('#p1');
p1.className='ex-03';

// criar numeros aleatorios realacionados ao array servicos
let n=parseInt(Math.random()*servicos.length);
console.log(n);

// inserir valores no tag h2 vindos do array aleatoriamente
let h2=document.querySelectorAll('h2')[0];
h2.textContent=servicos[n];