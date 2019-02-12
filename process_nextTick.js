//Process.nextTick is similar to SetTimeout and setInterval

process.nextTick(function () {
    console.log('Next Tick')
})

console.log('Hello');