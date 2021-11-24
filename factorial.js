function solve(n){
    let factorial = 1;
do {
    factorial = factorial * n--;
}
while (n > 1)  
console.log(factorial)
}
solve(5);