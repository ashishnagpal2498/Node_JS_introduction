 //Such type is used to created dynamic thing in Pages -
 var header = document.querySelector('header')
    var section = document.querySelector('section');

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
        showHeroes(superheros);
    }

function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);

    var myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);
}


function showHeroes(jsonObj) {
    var heroes = jsonObj['members'];
    var sectionarr = [];
    for (var i = 0; i < heroes.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');

        myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
        myPara2.textContent = 'Age: ' + heroes[i].age;
        myPara3.textContent = 'Superpowers:';

        var superPowers = heroes[i].powers;
        for (var j = 0; j < superPowers.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}