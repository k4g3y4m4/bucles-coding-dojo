//1. imprimir impares
for (var i = 0 ; i <= 20 ; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}


 //2. imprimir impares
for (var i = 0 ; i <= 20 ; i++){
   
    if(i % 3 == 0){
        console.log(i);
    }
}

//3. imprimir secuencua
let j = 4;
do{

    console.log(j);
    j = j - 1.5
}while(j>=-4)

//4. Sigma
let suma = 0;
for(var i = 0 ; i<= 100; i++){
    suma = suma + i;
}
console.log(suma);

//5.Factorial
let factorial=1;
for(var i=1 ; i<=12 ; i++){
    factorial = factorial * i;
}
console.log(factorial);