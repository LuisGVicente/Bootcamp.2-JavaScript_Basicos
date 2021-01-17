//
// NO MODIFICAR LOS NOMBRES NI LOS PARAMETROS
// DE LAS FUNCIONES O LOS TESTS DEJARAN DE FUNCIONAR
//

// HELPER FUNCTIONS
function factorial(n) {
    if (n <= 1) return 1;
    else return n * factorial(n - 1);
}
  
function fibonacci(n) {
    if (n <= 1) return 1;
    else return fibonacci(n - 1) + fibonacci(n - 2);
}


// Si listamos los múltiplos de 3 y 5 por debajo de 10 tenemos 3,5,6 y 9 .
// La suma de estos múltiplos es 23
// Encuentre la suma de todos los múltiplos de 3 y 5 por debajo de 1000

function sumaMultiplos3y5(n) {
    let divisores=[3,5];
    let multiplos=[];
    for (let div of divisores){
        for (let i=0; i < n;i++) {
            if (i%div === 0){
                multiplos.push(i);
            }
        }
    }
    const newArr = multiplos.filter((elem, index) => multiplos.indexOf(elem) === index).reduce((acu,n)=>acu+n,0);
    console.log(newArr);
}

// Encuentre la suma de los números pares de Fibonacci cuyo valor no exceda el millón.

function sumaParesFibonacci() {
    let fibonums = [];
    for (let i=0; i < 32; i++){
        if (fibonacci(i)%2===0){
            fibonums.push(fibonacci(i));
        }
    }
    let suma = 0;
    for (let i=0; i<=fibonums.length-1;i++){
        suma += fibonums[i];
        if (suma > 1000000) {
            console.log(suma -= fibonums[i]);
        }
    }
}

// Calcule la suma de los factoriales de todos los números
// divisibles por 7 menores que 100

function sumaFactorialesDivisiblesPor7(n) {
    let divisores7 = [];
    for (let i=0; i <= n ; i++){
        if (i%7===0) {
            divisores7.push(i); 
        }
    }
    let suma = divisores7.reduce((acu,num)=> acu + factorial(num),0);
    console.log(suma);
}  

// ¿Es la suma de todos los pares menores que 10,000 un número divisible entre 44?

function sumaParesDivisible44(n) {
    let pares=[];
    for (let i=0; i < n; i++){
        if (i%2===0){
            pares.push(i);
        }
    }
    if ((pares.reduce((acu,num)=>acu+num,0))%44===0){
        return true
    }
    else {return false}
}

// ¿Es el producto de todos los números divisibles
// por 3 menores que 1000 un número divisible por 7?

function productoDivisible7(n) {
    let tri=[];
    for (let i=0; i < n; i++){
        if (i%3===0){
            tri.push(i);
        }
    }
    if ((tri.reduce((acu,num)=>acu+num,0))%7===0){
        return true
    }
    else {return false}
}
// Un número primo es aquel que solo puede dividirse por 1 y por el mismo.
// Implemente una función que diga si un número es primo o no

function primo(n) {
	if (n == 0 || n == 1 || n == 4) return false;
	for (let x = 2; x < n / 2; x++) {
		if (n % x == 0) return false;
	}
	return true;
}

// Calcule todos los números primos menores que 1000

function primos(n) {
  let arrp = [];
  let cont = 2;
  let cont2 = 0;
  let p = 0;
  while(cont <=n) {
      while(cont2 < cont) {
          if(cont % cont2 == 0 && cont2 !=1 &&cont2 !=cont) {
              p=true;
          }
          cont2++;
      }
      if (p==false) {
          arrp.push(cont2);
      }
      else {
          p=false;
      }
      cont++;
      cont2=0;
  }
  return arrp;
}

// Escriba una función devuelva un arreglo con los factores de un número
// Los factores de un número son los divisores del número (resto de división cero)
// Por ejemplo, los factores de 10 son: [1,2,5,10]

function factores(n) {
    let arr = [];
    let arrdiv = Array.from({length: n/2}, (_, i) => i + 1);
    for (let num of arrdiv) {
        if (n%num == 0) {
            arr.push(num);
        }
    } 
    arr.push(n);
    console.log(arr);
}


export {
  sumaMultiplos3y5,
  sumaParesFibonacci,
  sumaFactorialesDivisiblesPor7,
  sumaParesDivisible44,
  productoDivisible7,
  primo,
  primos,
  factores,
};
