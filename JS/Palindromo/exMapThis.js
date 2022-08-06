const maca  = {
    valeu: 2,
}

const laranja = {
    valeu: 3
}

function mapComThis(arr, thisArg) {
    return arr.map(function(item) {
        return item * this.valeu;
    }, thisArg);
}

const nums = [1,2]

console.log('this -> maça',mapComThis(nums, maca));

console.log('this -> laranja', mapComThis(nums, laranja));