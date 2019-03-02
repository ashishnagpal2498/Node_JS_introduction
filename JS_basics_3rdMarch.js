let abcde = {
    a:6
}
abcde.p = 99;
console.log(abcde);
console.log({}+[]);
//If an empty object - toString -
console.log(toString({}))
delete abcde.a;
console.log(abcde);
// document.cookie = [7];
//Number ke Froms ;
// let , NUMBER object -
// let arg = "10";
//SUBSTR
let lmnstr = "abcdehiuyhabc";
console.log(lmnstr.indexOf('a',4));
console.log(lmnstr.length);
console.log("strings"+lmnstr.substr(3,3))
console.log(lmnstr.substring(3,4))
//splice - 1st index - length -
//Higher order functions -

let arr = [6,0,10];
arr.push(10);
console.log(arr);
//sum = add(a,b) ; return value sum , if we do sum = add - this creates a reference function
//Closure - Scope of variables inside a function

// Array sorting - lexicographical -

//MAP FILTER REDUCE

//Higher order function - getfirstname
function getfirstname(str) {
    return str.split(' ')[0];
}

function abc(firsname,age) {
    let fname = firsname("Ashish Nagpal");
    return {
        name: fname,
        age: age
    }
}

console.log(abc(getfirstname,21));
let array1 = [1,2,3,4,5,6];
console.log(array1.slice(3,4));
array1[10] = 9;
console.log(array1[7])