    // Array
    let nomes=['Cesar', 'Lucas', 'Mariana', 'Felipe', 'Dalvani', 'Murilo', 'Danilo', 'Pricila'];
    // cria numeros aleatórios
    let n= parseInt(Math.random()*nomes.length);
    console.log(n);
    // insere os valores vindo do array (aleatóriamente) na tag h3
    let h3 = document.querySelector('h3');
    h3.textContent=nomes[n];
