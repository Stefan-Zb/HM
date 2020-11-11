        // // - створити функцію яка виводить масив

let arr1 = [1, 2, 3, 4, 5, 6, 7];
function showArray(arr){
    console.log(arr);
}
showArray(arr1);

        // - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

let randomArr = [];
function Random(arr) {
    for (let i = 0; i < 10; i++){
        arr.push(Math.round(Math.random()*100));
    }
    showArray(arr);
}
Random(randomArr);

        // // - створити функцію яка приймає три числа та виводить та повертає найменьше.

function Min(one, two, three){
    let result = Math.min(one, two, three);
    console.log(result);
    return result
}
Min(60, 8, 25);

        // - створити функцію яка приймає три числа та виводить та повертає найбільше.

function Max(one, two, three){
    let result = Math.max(one, two, three,);
    console.log(result);
    return result
}
Max(10, 5, 15);

        // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

function MinMax(){
    let args = [];
    for (let i = 0; i < arguments.length; i++){
        args.push(arguments[i]);
    }
    console.log(Math.max(...args));
    return Math.min(...args);
}
console.log(MinMax(10, 2, 3, 4, 5, 6, 7, 10, 50, 15, 30));




























