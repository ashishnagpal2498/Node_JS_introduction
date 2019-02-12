//Data DOwnload
//Encrypt
//Save

function download_data(url,downloaded) {
    setTimeout(function () {
        console.log('Data has been downloaded from '+url);
        downloaded(null, url);
    },1000)

}

function encrpt_data(data,encrypted) {
    setTimeout(function () {
        console.log( 'Data has been' + `{{{${data}}}}`
        )
        encrypted(null,`{{{${data}}}}`);
    },3000)

}

function save_data(data,saved) {
    setTimeout(function () {
        console.log('data provided '+ `${data}  has been saved`)
    saved(null,`saved: ${data}`)
    },1000)
}

download_data("https://codingblocks.com",(err,data)=>{
    if(!err)
    {
        encrpt_data(data,(err2,encrypted_d)=>{
            if(!err2){
                save_data(encrypted_d,(err3,saveddata)=>{
                    if(!err3) {

                    }
                })
            }
        })
    }
})