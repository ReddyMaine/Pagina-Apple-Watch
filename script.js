const imagemVisualizacao = document.getElementById("imagem-visualizacao");
const tamanhoVisualizacao = document.getElementById("opcao-tamanho");
const tituloProduto = document.getElementById("titulo-produto");
const tituloCor = document.getElementById("nome-cor-selecionada");
const visualizacaoMiniatura1 = document.getElementById("0-imagem-miniatura");
const visualizacaoMiniatura2 = document.getElementById("1-imagem-miniatura");
const visualizacaoMiniatura3 = document.getElementById("2-imagem-miniatura");

const verdeCipreste = {
    nome: 'Verde-cipreste',
    pasta: 'imagens-verde-cipreste'
}

const azulInverno = {
    nome: 'Azul-inverno',
    pasta: 'imagens-azul-inverno',
    
}

const meiaNoite = {
    nome: 'Meia-noite',
    pasta: 'imagens-meia-noite'
}

const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar'
}

const rosaClaro = {
    nome: 'Rosa-claro',
    pasta: 'imagens-rosa-claro'
}


const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ['41 mm', '45 mm'];



let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;


function trocaImagem() { // troca a imagem do produto!
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg';
}

function trocaCor() { 
    // atualiza a cor do produto!
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = idOpcaoSelecionada.charAt(0);
    //trocar titulo da pagina
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome +  " para caixa de "  + opcoesTamanho[tamanhoSelecionado];    
    //trocar titulo da cor
    tituloCor.innerText = "Cor -" + opcoesCores[corSelecionada].nome;
    //trocar miniaturas
    visualizacaoMiniatura1.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-0.jpeg';
    visualizacaoMiniatura2.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-1.jpeg';
    visualizacaoMiniatura3.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-2.jpeg';
    //visualizar a imagem nova
    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg';
}



function trocaTamanho() { 
    //atualiza o tamanho da caixa!
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
    //muda o titulo do produto
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome +  " para caixa de "  + opcoesTamanho[tamanhoSelecionado];    
    //troca tamanho da imagem
    if (opcoesTamanho[tamanhoSelecionado] === '41 mm'){
        imagemVisualizacao.classList.add('caixa-pequena');
    } else {
        imagemVisualizacao.classList.remove('caixa-pequena');
    }

}