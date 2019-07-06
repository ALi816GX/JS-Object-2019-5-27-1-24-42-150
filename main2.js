var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};

console.log(fruit);

var result = 0;

for(x in fruit){
    result += fruit[x];
}

console.log(result);
