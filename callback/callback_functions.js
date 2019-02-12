//callback functions
//There is a function one , which has two params - 'a' 'onecb' which is function as an argument
function one(a, onecb) {
    console.log(a);
    //Since it is a function
    onecb(a+1,(c,threecb)=>{
        console.log(c);
        threecb(c+1,(e)=>{
            console.log(e);
            console.log(a)
            console.log(c)
        });
    });
}

one(1,(b,twocb)=>{
    console.log(b);
    twocb(b+1,(d,fourcb)=>{
        console.log(d);
        fourcb(d+1);
    });
})
