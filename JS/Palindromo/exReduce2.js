const lista = [
    {
        nome: 'Sabão em Pó',
        preco: 30,
    },
    {
        nome: 'Cereal',
        preco: 12,
    },
    {
        nome: 'Toalha',
        preco: 30,
    }
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
    console.log('rodada', index + 1);
    console.log({prev});
    console.log({current});
    return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));