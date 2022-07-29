function comparaNumeros(num1, num2){
    const primeiraFrase = criarPrimeiraFrase(num1 , num2);
    const segundaFrase = criarSegundaFrase(num1 , num2);

    return `${primeiraFrase} ${segundaFrase}`;
}
    function criarPrimeiraFrase(num1 , num2) {
        let saoIguais = " ";
        if(num1 === num2) {
        saoIguais = "Não"
        }

        return `Os números ${num1} e ${num2} ${saoIguais} São iguais.`
    }
    function criarSegundaFrase(num1 , num2) {
        const soma = num1 + num2;
        
        let resultado10 = "menor"
        let resultado20 = "menor"
        
        const compara10 = soma > 10;
        const compara20 = soma > 20;

        if(compara10) {
            resultado10 = "maior"
        }
        if(compara20) {
            resultado20 = "maior"
        }
        return 'Sua soma é ${soma}, que é ${resultado 10} e que 10 ${resultado20} que 20.'
    }
console.log(comparaNumeros(1, 2));
