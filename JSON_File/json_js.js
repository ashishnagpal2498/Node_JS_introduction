window.onload = function () {
    let header = document.querySelector('header')
    let section = document.querySelector('section');

//    Json Object
    var RequestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
//    API - XHR
    var request = new XMLHttpRequest();
//    Now we need to open the request
    request.open('GET',RequestURL);
//    Response TYpe
    request.responseType = "json";
    //Request will go to server
    request.send();

//    Waiting for the Response -
    request.onload = function () {
        var superheros = request.response;
        //Functions which are taking Json data -
        populateHeader(superheros);
        showHeros(superheros);
    }
}