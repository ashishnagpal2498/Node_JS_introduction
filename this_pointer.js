 var bob = 30;

function q() {
    this.bob = 20;
    console.log(bob);
    let bob = 10;
    console.log(bob);
}
q();
