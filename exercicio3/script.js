let nacionalidade = prompt('Qual a sua nacionalidade?') //= adicione o prompt aqui

const nacionalidades = ['brasileiro', 'argentino', 'uruguaio', 'chileno', 'colombiano']

if(nacionalidade === 'brasileiro' ||
   nacionalidade === 'argentino' ||
   nacionalidade === 'uruguaio' ||
   nacionalidade === 'chileno' ||
   nacionalidade === 'colombiano') {
    console.log(`Sua nacionalidade é: ${nacionalidade}.`)
}