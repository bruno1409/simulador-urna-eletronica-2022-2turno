    let tela = document.querySelector('.tela')
    let etapa = 0
    let totVotosValidos = 0
    let totVotosBrancos = 0
    let totVotosNulos = 0
    let totVotos = 0
    let votosCand13 = 0
    let votosCand22 = 0
    document.querySelector('#bt-prox').style = 'display: none'
    document.querySelector('#bt-enc').style = 'display: none'
    document.querySelector('#bt-votos').style = 'display: none'
    votacao()

    function votacao() {
        switch (etapa) {
            case 0:
                tela.innerHTML += '<h1>EMISSÃO DA ZERÉSIMA</h1>'
                tela.innerHTML += '<br><p class="meio">Aperte CONFIRMA para emitir a zerésima</p>'
                break
            case 2:
                num1 = 'X'
                num2 = 'X'
                console.log('Votando para o cargo [Presidente]')
                tela.innerHTML = '<p>SEU VOTO PARA</p>'
                tela.innerHTML += '<p class="meio">PRESIDENTE</p>'
                tela.innerHTML += '<div class="caixa-num" id="num1"></div>'
                tela.innerHTML += '<div class="caixa-num" id="num2"></div>'
                break
        }
    }

    function tecla(n) {
        switch (etapa) {
            case 2:
                if (num1 == 'X') {
                    document.querySelector('#num1').innerHTML = n
                    num1 = n
                    console.log('Tecla pressionada: ' + n)
                } else {
                    document.querySelector('#num2').innerHTML = n
                    num2 = n
                    console.log('Tecla pressionada: ' + n)
                    cand = num1.toString() + num2.toString()
                    exibirCandidato()
                }

                break
        }
    }

    function exibirCandidato() {
        switch (cand) {
            case '13':
                tela.innerHTML += '<br><br>Nome: LULA'
                tela.innerHTML += '<br>Vice: GERALDO ALCKMIN'
                tela.innerHTML += '<br><br>Partido: PT'
                break
            case '22':
                tela.innerHTML += '<br><br>Nome: JAIR BOLSONARO'
                tela.innerHTML += '<br>Vice: BRAGA NETTO'
                tela.innerHTML += '<br><br>Partido: PL'
                break
            case 'branco':
                tela.innerHTML += '<span class="meio"><h1>VOTO BRANCO</h1></span><br>'
                break
            default:
                tela.innerHTML += '<br>NÚMERO ERRADO<br>'
                tela.innerHTML += '<span class="meio"><h1>VOTO NULO</h1></span>'
        }

        etapa = 3
        tela.innerHTML += '<br>'
        tela.innerHTML += '<hr>'
        tela.innerHTML += '<br>Aperte CORRIGE para REINICIAR este voto'
        tela.innerHTML += '<br>Aperte CONFIRMA para CONFIRMAR este voto'
    }

    function teclaConfirma() {
        switch (etapa) {
            case 0:
                tela.innerHTML = '<pre><strong>                       Zerésima</strong>'
                tela.innerHTML += '<pre>========================================================'
                tela.innerHTML += '<pre>                Não há votos registrados'
                tela.innerHTML += '<pre>========================================================'
                tela.innerHTML += '<br>'
                tela.innerHTML += '<pre>-----------------------PRESIDENTE-----------------------'
                tela.innerHTML += '<pre>Nome do candidato                  Num cand        Votos'
                tela.innerHTML += '<br>'
                tela.innerHTML += '<pre>LULA                               13               0000'
                tela.innerHTML += '<pre>JAIR BOLSONARO                     22               0000'
                tela.innerHTML += '<pre>--------------------------------------------------------'
                tela.innerHTML += '<pre>Total de votos Nominais                             0000'
                tela.innerHTML += '<pre>Brancos                                             0000'
                tela.innerHTML += '<pre>Nulos                                               0000'
                tela.innerHTML += '<pre>Total Apurado                                       0000'
                tela.innerHTML += '<br>Aperte a tecla CONFIRMA para iniciar a votação'
                console.log('Zerésima foi emitida')
                etapa = 1
                break
            case 1:
                tela.innerHTML = '<h1>INICIANDO A VOTAÇÃO</h1>'
                tela.innerHTML += '<br><p class="meio">Por favor, aguarde...</p>'
                setTimeout(function(){ etapa = 2, console.log('Votação iniciada'), votacao() }, 1000)
                break
            case 3:
                etapa = 4

                switch (cand) {
                    case '13':
                        votosCand13++
                        totVotosValidos++
                        totVotos++
                        console.log('[VOTO] Votou em 13 - LULA')
                        break
                    case '22':
                        votosCand22++
                        totVotosValidos++
                        totVotos++
                        console.log('[VOTO] Votou em 22 - JAIR BOLSONARO')
                        break
                    case 'branco':
                        totVotosBrancos++
                        totVotos++
                        console.log('[VOTO] Votou em BRANCO')
                        break
                    default:
                        totVotosNulos++
                        totVotos++
                        console.log('[VOTO] Votou NULO')
                }

                new Audio('som.mp3').play()
                tela.innerHTML = '<h1 class="fim">FIM</h1>'
                tela.innerHTML += '<p class="votou">VOTOU</p>'
                document.querySelector('#bt-prox').style = 'display: inline-block'
                document.querySelector('#bt-enc').style = 'display: inline-block'
                document.querySelector('#bt-votos').style = 'display: inline-block'
        }
    }

    function teclaBranco() {
        switch (etapa) {
            case 2:
                console.log('Tecla pressionada: BRANCO')
                tela.innerHTML = '<p>SEU VOTO PARA</p>'
                tela.innerHTML += '<p class="meio">PRESIDENTE</p>'
                tela.innerHTML += '<div class="caixa-num" id="num1"></div>'
                tela.innerHTML += '<div class="caixa-num" id="num2"></div>'
                cand = 'branco'
                exibirCandidato()
        }
    }

    function teclaCorrige() {
        switch (etapa) {
            case 2:
                console.log('Tecla pressionada: CORRIGE')
                num1 = 'X'
                num2 = 'X'
                tela.innerHTML = '<p>SEU VOTO PARA</p>'
                tela.innerHTML += '<p class="meio">PRESIDENTE</p>'
                tela.innerHTML += '<div class="caixa-num" id="num1"></div>'
                tela.innerHTML += '<div class="caixa-num" id="num2"></div>'
                break
            case 3:
                console.log('Tecla pressionada: CORRIGE')
                etapa = 2
                num1 = 'X'
                num2 = 'X'
                tela.innerHTML = '<p>SEU VOTO PARA</p>'
                tela.innerHTML += '<p class="meio">PRESIDENTE</p>'
                tela.innerHTML += '<div class="caixa-num" id="num1"></div>'
                tela.innerHTML += '<div class="caixa-num" id="num2"></div>'
                break
        }
    }

    function proximoEleitor() {
        etapa = 2
        votacao()
        document.querySelector('#bt-prox').style = 'display: none'
    }

    function encerrarVotacao() {
        etapa = 4
        console.log('Votação encerrada')
        tela.innerHTML = '<h1>VOTAÇÃO ENCERRADA</h1>'
        tela.innerHTML += '<br><p class="meio">Gerando o Boletim de Urna</p>'
        tela.innerHTML += '<br><p class="meio">Por favor, aguarde...</p>'
        document.querySelector('#bt-prox').style = 'display: none'
        document.querySelector('#bt-enc').style = 'display: none'
        document.querySelector('#bt-votos').style = 'display: none'
        setTimeout(function(){ console.log('Boletim de Urna gerado'), bu() }, 1000)
    }

    function bu() {
        tela.innerHTML = '<pre><strong>                     Boletim de Urna</strong>'
        tela.innerHTML += '<br>'
        tela.innerHTML += '<pre>-----------------------PRESIDENTE-----------------------'
        tela.innerHTML += '<pre>Nome do candidato                 Num cand         Votos'
        tela.innerHTML += '<br>'
        tela.innerHTML += '<pre>LULA                              13                ' + votosCand13
        tela.innerHTML += '<pre>JAIR BOLSONARO                    22                ' + votosCand22
        tela.innerHTML += '<br>'
        tela.innerHTML += '<pre>--------------------------------------------------------'
        tela.innerHTML += '<pre>Total de votos Nominais                             ' + totVotosValidos
        tela.innerHTML += '<pre>Brancos                                             ' + totVotosBrancos
        tela.innerHTML += '<pre>Nulos                                               ' + totVotosNulos
        tela.innerHTML += '<pre>Total Apurado                                       ' + totVotos
    }

    function inserirVotos() {
        cand = prompt('Digite o número do candidato para qual os votos serão inseridos (apenas votos nominais):')

        if (cand == '13' || cand == '22') {
            v = prompt('Quantos votos serão inseridos para o candidato ' + cand + '?')

            if (cand == '13') {
                for (i = 1; i <= v; i++) {
                    votosCand13++
                    totVotosValidos++
                    totVotos++
                    console.log('[VOTO] Votou manualmente em 13 - LULA')
                }
            } else {
                if (cand == '22') {
                    for (i = 1; i <= v; i++) {
                        votosCand22++
                        totVotosValidos++
                        totVotos++
                        console.log('[VOTO] Votou manualmente em 22 - JAIR BOLSONARO')
                    }
                }
            }
        } else {
            alert('Candidato inexistente. Nenhum voto será inserido.')
        }
    }
