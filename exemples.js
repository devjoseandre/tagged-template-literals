const parametro01 = 'alura';
const parametro02 = 'semana';

novaFunction = (arrayParametros, parametro01, parametro02) => {
    console.log(`${arrayParametros[0]}${parametro01}${arrayParametros[1]}${parametro02}`);
}

// As duas chamadas são equivalentes!
novaFunction`Eu estudo na ${parametro01} todos os dias da ${parametro02}`;
novaFunction(['Eu estudo na ', ' todos os dias da '], parametro01, parametro02);

function negrito(arrayStrings, ...valores) {

    return arrayStrings.reduce((acumulador, string, i) => {
        return `${acumulador}${string}${valores[i] ? `<strong>${valores[i]}</strong>` : ''}`;
    }, '');
}

const nome = 'José André';
const redeSocial = '@eujoseandre';

console.log(negrito`${nome} estuda desenvolvimento Front-End na Alura e você pode encontrá-lo nas redes sociais procurando por ${redeSocial}`);