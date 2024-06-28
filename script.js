const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual seu nível de conhecimento sobre a literatura? Descubra seu ator(a)",
        alternativas: [
        {
            texto: "baixo",
            afirmacao: "possui pouco conhecimento a respeito da literatura brasileira"
        },
        {
            texto: "médio",
            afirmacao: "possui conhecimento rasoável a respeito da literatura basileira"
        },
        {
            texto: "alto",
            afirmacao: "possui conheciemnto aprofundado a respeito da literatura brasileira"
        }
    
        ]
    },
    {
        enunciado: "Se você fosse um escritor, quais temas te interessariam?",
        alternativas: [
            {
                texto: "aventuras e elementos folclóricos",
                afirmacao: "possui personalidade similar a de Monteiro Lobato"
            },
            {
                texto: "crítica social",
                afirmacao: "possui personalidade similar a de Machado de Assis"
            },
            {
                texto: "psicológico das personagens e retrato o dia a dia comum",
                afirmacao: "possui personalidade similar a de Clarice Lispector"
            },
            {
                texto: "socidade brasileira e preconceito racial",
                afirmacao: "possui personalidade similar a de Aluisio Azevedo" 
            }
    
        ]
    },
    {
        enunciado: "Como seria seu estilo de escrita? ",
        alternativas: [
            {
                texto:"simples e didático",
                afirmacao:"Adoraria a escrita de Monteiro Lobato"
            },
            {
                texto: "objetivo e irônico",
                afirmacao: "Adoraria a escrita de Machado de Assis"
            },
            {
                texto: "metafórico e sensível",
                afirmacao: "Adoraria a escrita de Clarice Lispector"
            },
            {
                texto: "grotesco e descritivo",
                afirmacao: "Adoraria a escrita de Aluisio de Azevedo"
            }

        ]
    },
    {
        enunciado: "Em qual período literário você se encaixaria?",
        alternativas: [
            {
                texto:  "pré-modernismo - regionalismo por meio da renovação artística",
                afirmacao: "Monteiro Lobato de identificaria com você"
            },
            {
                texto: "romantismo - espontaneidade lírica",
                afirmacao:"Machado se identificaria com você"  
            },
            {
                texto:  "modernismo - estruturas não tradicionais com liberdade formal",
                afirmacao: "Clarice se identificaria com você"
            },
            {
                texto:  "realismo - linguagem objetiva, crítica social e falta de idealizações",
                afirmacao:"Aluisio de identificaria com você"
            }
           
 
        ]
    }
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();


}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respotaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
    }

    function respotaSelecionada(opcaoSelecionada){
        const afirmacoes = opcaoSelecionada.afirmacoes;
        historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
    }

    function mostraResultado(){
        caixaPerguntas.textContent = "Suas escolhas mostraram que...";
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent = "";
    }
mostraPergunta();