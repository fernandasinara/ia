const caixaprincipal = document.querySelector(caixa principal)
const caixaPerguntas = document
const caixaAlternativa
const caixaResultados= document.querySelector
const perguntas =[
{
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

function motrapergunta(){
perguntAtual = perguntas [atual];
caixaPergunta.txtContent = PerguntaAtual.enunciado;
}
motrapergunta();