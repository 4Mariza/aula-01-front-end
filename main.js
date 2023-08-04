'use strict'

//formas de declarar variavel
//3 - var     -> mutável   -> escopo global
//2 - let     -> mutável   -> escopo bloco
//1 - const   -> imutável  -> escopo bloco

function trocarTitulo (){
    const titulo = document.getElementById('titulo')
    const tituloDigitado = prompt('Digite um título')
    if(tituloDigitado == ''){
        titulo.textContent = 'Cadê?'
    }else{
        titulo.textContent = tituloDigitado
        titulo.classList.add('verde')
    }
 }

const botaoTrocarTitulo = document.getElementById('trocar-titulo')
botaoTrocarTitulo.addEventListener('click', trocarTitulo)


/////////////////////////////////////////////////////////////////////


function cadastrar(){
    const nome = document.getElementById('nome')
    const nomeDigitado = prompt('Digite seu nome')
    nome.textContent = 'Nome: ' + nomeDigitado

    const cidade = document.getElementById('cidade')
    const cidadeDigitada = prompt('Digite sua cidade')
    cidade.textContent = 'Cidade: ' + cidadeDigitada

    const media = document.getElementById('media')
    const mediaDigitada = prompt('Digite sua média de notas')
    media.textContent = 'Média: ' + mediaDigitada

    if(mediaDigitada <= 7){
        const mostrarMedia = document.getElementById('resultadoMedia')
        mostrarMedia.classList.add('vermelho')
        mostrarMedia.textContent = 'Você está no VERMELHO!'
    } else{
        const mostrarMedia = document.getElementById('resultadoMedia')
        mostrarMedia.classList.add('azul')
      mostrarMedia.textContent = 'Você está no AZUL!'
    }
}

const botaoDeCadastro = document.getElementById('cadastro')
botaoDeCadastro.addEventListener('click', cadastrar)