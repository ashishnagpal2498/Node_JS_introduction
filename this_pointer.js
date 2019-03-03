 var bob = 30;

function q() {
    this.bob = 20;
    console.log(this);
    let bob = 10;
    console.log(bob);
}
q();
let alp = 30;
function alpha()
{
    console.log(alp);
    // let alp = 10;
    // console.log(alp);
}
alpha();
let arr = [1,2,3,4,5,6,7];

console.log(arr.map((item => item%2===0)))
//