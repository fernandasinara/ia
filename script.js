{const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
nunciado: 'pergunta 1',
alternativas: ["alternativa1","alternativa2"]
},
{
enunciado: "pergunta2"
alternativa: ["alternativa1","alternativa2"]   
}
]
let atual=0
let perguntatual;
let historiaFinal="";

function motrapergunta(){
  if(atual>=perguntatual.lenght){
    mostraResultado();
    return;
  }
perguntAtual = perguntas [atual];
caixaPergunta.txtContent = PerguntaAtual.enunciado;
caixaAlternativas.textContent="";
textoResultado.textContent="";
mostraAlternativa();
}
function mostraAlternativa(){
  for(const alternativa of perguntaAtual.enunciado){
     
    const botaoAlternativa= document.createElement("buttton");
    botaoAlternativa.textContent=alternativa.texto;
    botaoAlternativa.addEventListener("click",()=>respostaSelecionada(alternativa){
      atual++;
      motrapergunta();
    })
      caixaAlternativas.appendChild(botaoAlternativa);
  }
}

function respostaSelecionada(opçãoSelecionada){
  const afirmação = opçãoSelecionada.afirmação;
  historiaFinal afirmação+" ";
atual++
}


function mostraResultado(){
  caixaPerguntas.textContent= "conclusao...";
  textoResultado.textContent= historiaFinal
  caixaAlternativas.textContent ="";

}

motrapergunta();


{
