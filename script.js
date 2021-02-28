//Constants

let secretWords = ["BLAIR", "SERENA", "DAN", "CHUCK", "LILY", "NATE", "JENNY", "RUFUS", "BART", "ERIC", "VANESSA", "GEORGINA", "DOROTA"]

let secretPictures = ["https://i.pinimg.com/originals/31/f1/cf/31f1cfdae29c396deb234d1c6378dbb7.jpg",

    "https://static.wikia.nocookie.net/gossipgirl/images/a/a7/SerenaInfobox.jpg",

    "https://static.wikia.nocookie.net/gossipgirl/images/e/e7/DanInfobox.jpg",

    "https://static.wikia.nocookie.net/gossipgirl-megd/images/5/58/Chuck_Bass.png",

    "https://sites.google.com/site/gossipgirllxorose/_/rsrc/1368050487821/home/gossip-girl-characters/serene-van-der-woodsen/kelly-rutherford.jpg",

    "https://static.wikia.nocookie.net/gossipgirl/images/2/25/NateInfobox.jpg",

    "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Jenny_Humphrey_Season_3.jpg/220px-Jenny_Humphrey_Season_3.jpg",

    "https://static.wikia.nocookie.net/gossipgirl/images/4/42/Gossip_Girl_S1_105.jpg",

    "https://static.wikia.nocookie.net/gossipgirl/images/8/80/0107Bart01.jpg",

    "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Eric_Van_Der_Woodsen_Season_3.jpg/220px-Eric_Van_Der_Woodsen_Season_3.jpg",

    "https://static.wikia.nocookie.net/gossipgirl/images/9/97/Vanessa_Abrams_1.jpg",

    "https://upload.wikimedia.org/wikipedia/en/c/c5/Georgina_Sparks_Season_2.jpg",

    "https://static.wikia.nocookie.net/gossipgirl/images/2/2e/Dorota.jpg"
]


//Variables 
let lettersClicked = [" "]

let randomizeAnswer = " "
let splitWord = []
let targetWord = ""
let timeleft = 0
let numberOfLetters = 0
let numberOfBlanks = 0
let nodeId = ""
let guess;
let index = ""
let enabled = true;
let count = 0;

//cache button for Play function 
let playBtn = document.getElementById('wordRandomize');


//DOM the PLAY button 
playBtn.addEventListener('click', playBtnClicked)

function playBtnClicked(evt) {
    evt.target.disabled = true;
    let index = Math.floor(Math.random() * secretWords.length);

    imageRandomizer(index);

    randomizeAnswer = secretWords[index];
    console.log(secretPictures[index])

    splitWord = randomizeAnswer.split("");
    console.log(splitWord)

    guess = new Array(splitWord.length)

    numberOfLetters = splitWord.length;
    console.log(numberOfLetters);

    //TIMER
    let timeLeft = 30;
    let timerBtn = document.getElementById('timer').addEventListener('click', countdown);
    let timerId = setInterval(countdown, 1000);
    let timeUi = document.querySelector('#timer>span')

    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            if (enabled == true) {
                messageAlert();
            }
        } else {
            timeUi.textContent = timeLeft;
            timeLeft--;
        }
    }

    function messageAlert() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }

    createBlanks();

    document.getElementById('blank').innerHTML = ""
    createBlanks();
}



//IMAGE RANDOMIZER 
function imageRandomizer(index) {
    var imgNode = document.createElement("IMG");
    imgNode.id = "pictureId"
    imgNode.src = secretPictures[index]
    imageJpg.appendChild(imgNode);
}

//CREATE BLANKS 
function createBlank(i) {
    var node = document.createElement("span");
    var textnode = document.createTextNode(" _ ");
    node.appendChild(textnode);
    node.id = i
    document.getElementById("blank").appendChild(node);
}
//function for creating dynamic id's in Javascript 
function createBlanks(i) {
    for (i = 0; i < numberOfLetters; i++) {
        createBlank(i);
    }
}


//WIN LOGIC 
function winnerLogic() {
    console.log('GG ROCKS')
    if (!guess.includes(undefined)) {
        var popup = document.getElementById("myPopup1");
        popup.classList.toggle("show");
        enabled = false;
        console.log("player has wonned")
        document.getElementById("pictureId").style.filter = "blur(0)";
    } else {
        count += 1
        console.log(count)
            //if (count = splitWord.length) {
            //LOGIC TO GET RID OF A HEART 
        console.log("you lost a heart")
            //}
            // var popup = document.getElementById("myPopup");
            // popup.classList.toggle("show");
        console.log("you lost")
    }
}


//RESET FUNCTION
let resetBtn = document.getElementById('reset');

reset.addEventListener('click', resetBtnClicked)

function resetBtnClicked() {
    location.reload();
}


//KEYBOARD
//CACHE 
let sq1 = document.getElementById('A')
let sq2 = document.getElementById('B')
let sq3 = document.getElementById('C')
let sq4 = document.getElementById('D')
let sq5 = document.getElementById('E')
let sq6 = document.getElementById('F')
let sq7 = document.getElementById('G')
let sq8 = document.getElementById('H')
let sq9 = document.getElementById('I')
let sq10 = document.getElementById('J')
let sq11 = document.getElementById('K')
let sq12 = document.getElementById('L')
let sq13 = document.getElementById('M')
let sq14 = document.getElementById('N')
let sq15 = document.getElementById('O')
let sq16 = document.getElementById('P')
let sq17 = document.getElementById('Q')
let sq18 = document.getElementById('R')
let sq19 = document.getElementById('S')
let sq20 = document.getElementById('T')
let sq21 = document.getElementById('U')
let sq22 = document.getElementById('V')
let sq23 = document.getElementById('W')
let sq24 = document.getElementById('X')
let sq25 = document.getElementById('Y')
let sq26 = document.getElementById('Z')


//DOM 
sq1.addEventListener('click', sq1Clicked)
sq2.addEventListener('click', sq2Clicked)
sq3.addEventListener('click', sq3Clicked)
sq4.addEventListener('click', sq4Clicked)
sq5.addEventListener('click', sq5Clicked)
sq6.addEventListener('click', sq6Clicked)
sq7.addEventListener('click', sq7Clicked)
sq8.addEventListener('click', sq8Clicked)
sq9.addEventListener('click', sq9Clicked)
sq10.addEventListener('click', sq10Clicked)
sq11.addEventListener('click', sq11Clicked)
sq12.addEventListener('click', sq12Clicked)
sq13.addEventListener('click', sq13Clicked)
sq14.addEventListener('click', sq14Clicked)
sq15.addEventListener('click', sq15Clicked)
sq16.addEventListener('click', sq16Clicked)
sq17.addEventListener('click', sq17Clicked)
sq18.addEventListener('click', sq18Clicked)
sq19.addEventListener('click', sq19Clicked)
sq20.addEventListener('click', sq20Clicked)
sq21.addEventListener('click', sq21Clicked)
sq22.addEventListener('click', sq22Clicked)
sq23.addEventListener('click', sq23Clicked)
sq24.addEventListener('click', sq24Clicked)
sq25.addEventListener('click', sq25Clicked)
sq26.addEventListener('click', sq26Clicked)



//FUNCTION 

function sq1Clicked(evt) {
    evt.target.disabled = true;
    clickAll()
    targetWord = "A";
    setTimeout(function() { evt.target.disabled = false; }, 10000);

    for (i = 0; i < splitWord.length; i++) {
        console.log(splitWord[i])
        if (targetWord == splitWord[i]) {
            guess[i] = splitWord[i]
            document.getElementById(i).innerHTML = "A"
            console.log(i)
        } else {
            console.log("no it doesnt exist")
        }
        winnerLogic();
    }
}


function sq2Clicked(evt) {
    evt.target.disabled = true;
    clickAll()
    targetWord = "B";
    setTimeout(function() { evt.target.disabled = false; }, 10000);

    for (i = 0; i < splitWord.length; i++) {
        console.log(splitWord[i])
        if (targetWord == splitWord[i]) {
            guess[i] = splitWord[i]
            document.getElementById(i).innerHTML = "B"
            console.log(i)
        } else {
            console.log("no it doesnt exist")
        }
        winnerLogic();
    }
}

function sq3Clicked(evt) {
    evt.target.disabled = true;
    clickAll()
    targetWord = "C";
    setTimeout(function() { evt.target.disabled = false; }, 10000);

    for (i = 0; i < splitWord.length; i++) {
        console.log(splitWord[i])
        if (targetWord == splitWord[i]) {
            guess[i] = splitWord[i]
            document.getElementById(i).innerHTML = "C"
            console.log(i)
        } else {
            console.log("no it doesnt exist")
        }
        winnerLogic();
    }
}

function sq4Clicked(evt) {
    evt.target.disabled = true;
    clickAll()
    targetWord = "D";
    setTimeout(function() { evt.target.disabled = false; }, 10000);

    for (i = 0; i < splitWord.length; i++) {
        console.log(splitWord[i])
        if (targetWord == splitWord[i]) {
            guess[i] = splitWord[i]
            document.getElementById(i).innerHTML = "D"
            console.log(i)
        } else {
            console.log("no it doesnt exist")
        }
        winnerLogic();
    }
}

function sq5Clicked(evt) {
    evt.target.disabled = true;
    clickAll()
    targetWord = "E";
    setTimeout(function() { evt.target.disabled = false; }, 10000);

    for (i = 0; i < splitWord.length; i++) {
        console.log(splitWord[i])
        if (targetWord == splitWord[i]) {
            guess[i] = splitWord[i]
            document.getElementById(i).innerHTML = "E"
            console.log(i)
        } else {
            console.log("no it doesnt exist")
        }
        winnerLogic();
    }
}

function sq6Clicked(evt) {
    evt.target.disabled = true;
    clickAll()
    targetWord = "F";
    setTimeout(function() { evt.target.disabled = false; }, 10000);

    for (i = 0; i < splitWord.length; i++) {
        console.log(splitWord[i])
        if (targetWord == splitWord[i]) {
            guess[i] = splitWord[i]
            document.getElementById(i).innerHTML = "F"
            console.log(i)
        } else {
            console.log("no it doesnt exist")
        }
        winnerLogic();
    }
}

function sq7Clicked(evt) {
    evt.target.disabled = true;
    clickAll()
    targetWord = "G";
    setTimeout(function() { evt.target.disabled = false; }, 10000);


    for (i = 0; i < splitWord.length; i++) {
        console.log(splitWord[i])
        if (targetWord == splitWord[i]) {
            guess[i] = splitWord[i]
            document.getElementById(i).innerHTML = "G"
            console.log(i)
        } else {
            console.log("no it doesnt exist")
        }
        winnerLogic();
    }
}

function sq8Clicked(evt) {
    evt.target.disabled = true;
    clickAll()
    targetWord = "H";
    setTimeout(function() { evt.target.disabled = false; }, 10000);

    for (i = 0; i < splitWord.length; i++) {
        console.log(splitWord[i])
        if (targetWord == splitWord[i]) {
            guess[i] = splitWord[i]
            document.getElementById(i).innerHTML = "H"
            console.log(i)
        } else {
            console.log("no it doesnt exist")
        }
        winnerLogic();
    }
}

function sq9Clicked(evt) {
    evt.target.disabled = true;
    clickAll()
    targetWord = "I";
    setTimeout(function() { evt.target.disabled = false; }, 10000);

    for (i = 0; i < splitWord.length; i++) {
        console.log(splitWord[i])
        if (targetWord == splitWord[i]) {
            guess[i] = splitWord[i]
            document.getElementById(i).innerHTML = "I"
            console.log(i)
        } else {
            console.log("no it doesnt exist")
        }
        winnerLogic();
    }
}

function sq10Clicked(evt) {
    evt.target.disabled = true;
    clickAll()
    targetWord = "J";
    setTimeout(function() { evt.target.disabled = false; }, 10000);

    for (i = 0; i < splitWord.length; i++) {
        console.log(splitWord[i])
        if (targetWord == splitWord[i]) {
            guess[i] = splitWord[i]
            document.getElementById(i).innerHTML = "J"
            console.log(i)
        } else {
            console.log("no it doesnt exist")
        }
        winnerLogic();
    }
}

function sq11Clicked(evt) {
    evt.target.disabled = true;
    clickAll()
    targetWord = "K";
    setTimeout(function() { evt.target.disabled = false; }, 10000);

    for (i = 0; i < splitWord.length; i++) {
        console.log(splitWord[i])
        if (targetWord == splitWord[i]) {
            guess[i] = splitWord[i]
            document.getElementById(i).innerHTML = "K"
            console.log(i)
        } else {
            console.log("no it doesnt exist")
        }
        winnerLogic();
    }
}

function sq12Clicked(evt) {
    evt.target.disabled = true;
    clickAll()
    targetWord = "L";
    setTimeout(function() { evt.target.disabled = false; }, 10000);

    for (i = 0; i < splitWord.length; i++) {
        console.log(splitWord[i])
        if (targetWord == splitWord[i]) {
            guess[i] = splitWord[i]
            document.getElementById(i).innerHTML = "L"
            console.log(i)
        } else {
            console.log("no it doesnt exist")
        }
        winnerLogic();
    }
}

function sq13Clicked(evt) {
    evt.target.disabled = true;
    clickAll()
    targetWord = "M";
    setTimeout(function() { evt.target.disabled = false; }, 10000);

    for (i = 0; i < splitWord.length; i++) {
        console.log(splitWord[i])
        if (targetWord == splitWord[i]) {
            guess[i] = splitWord[i]
            document.getElementById(i).innerHTML = "M"
            console.log(i)
        } else {
            console.log("no it doesnt exist")
        }
        winnerLogic();
    }
}

function sq14Clicked(evt) {
    evt.target.disabled = true;
    clickAll()
    targetWord = "N";
    setTimeout(function() { evt.target.disabled = false; }, 10000);

    for (i = 0; i < splitWord.length; i++) {
        console.log(splitWord[i])
        if (targetWord == splitWord[i]) {
            guess[i] = splitWord[i]
            document.getElementById(i).innerHTML = "N"
            console.log(i)
        } else {
            console.log("no it doesnt exist")
        }
        winnerLogic();
    }
}

function sq15Clicked(evt) {
    evt.target.disabled = true;
    clickAll()
    targetWord = "O";
    setTimeout(function() { evt.target.disabled = false; }, 10000);

    for (i = 0; i < splitWord.length; i++) {
        console.log(splitWord[i])
        if (targetWord == splitWord[i]) {
            guess[i] = splitWord[i]
            document.getElementById(i).innerHTML = "O"
            console.log(i)
        } else {
            console.log("no it doesnt exist")
        }
        winnerLogic();
    }
}

function sq16Clicked(evt) {
    evt.target.disabled = true;
    clickAll()
    targetWord = "P";
    setTimeout(function() { evt.target.disabled = false; }, 10000);

    for (i = 0; i < splitWord.length; i++) {
        console.log(splitWord[i])
        if (targetWord == splitWord[i]) {
            guess[i] = splitWord[i]
            document.getElementById(i).innerHTML = "P"
            console.log(i)
        } else {
            console.log("no it doesnt exist")
        }
        winnerLogic();
    }
}

function sq17Clicked(evt) {
    evt.target.disabled = true;
    clickAll()
    targetWord = "Q";
    setTimeout(function() { evt.target.disabled = false; }, 10000);

    for (i = 0; i < splitWord.length; i++) {
        console.log(splitWord[i])
        if (targetWord == splitWord[i]) {
            guess[i] = splitWord[i]
            document.getElementById(i).innerHTML = "Q"
            console.log(i)
        } else {
            console.log("no it doesnt exist")
        }
        winnerLogic();
    }
}

function sq18Clicked(evt) {
    evt.target.disabled = true;
    clickAll()
    targetWord = "R";
    setTimeout(function() { evt.target.disabled = false; }, 10000);

    for (i = 0; i < splitWord.length; i++) {
        console.log(splitWord[i])
        if (targetWord == splitWord[i]) {
            guess[i] = splitWord[i]
            document.getElementById(i).innerHTML = "R"
            console.log(i)
        } else {
            console.log("no it doesnt exist")
        }
        winnerLogic();
    }
}

function sq19Clicked(evt) {
    evt.target.disabled = true;
    clickAll()
    targetWord = "S";
    setTimeout(function() { evt.target.disabled = false; }, 10000);

    for (i = 0; i < splitWord.length; i++) {
        console.log(splitWord[i])
        if (targetWord == splitWord[i]) {
            guess[i] = splitWord[i]
            document.getElementById(i).innerHTML = "S"
            console.log(i)
        } else {
            console.log("no it doesnt exist")
        }
        winnerLogic();
    }
}

function sq20Clicked(evt) {
    evt.target.disabled = true;
    clickAll()
    targetWord = "T";
    setTimeout(function() { evt.target.disabled = false; }, 10000);

    for (i = 0; i < splitWord.length; i++) {
        console.log(splitWord[i])
        if (targetWord == splitWord[i]) {
            guess[i] = splitWord[i]
            document.getElementById(i).innerHTML = "T"
            console.log(i)
        } else {
            console.log("no it doesnt exist")
        }
        winnerLogic();
    }
}

function sq21Clicked(evt) {
    evt.target.disabled = true;
    clickAll()
    targetWord = "U";
    setTimeout(function() { evt.target.disabled = false; }, 10000);

    for (i = 0; i < splitWord.length; i++) {
        console.log(splitWord[i])
        if (targetWord == splitWord[i]) {
            guess[i] = splitWord[i]
            document.getElementById(i).innerHTML = "U"
            console.log(i)
        } else {
            console.log("no it doesnt exist")
        }
        winnerLogic();
    }
}

function sq22Clicked(evt) {
    evt.target.disabled = true;
    clickAll()
    targetWord = "V";
    setTimeout(function() { evt.target.disabled = false; }, 10000);

    for (i = 0; i < splitWord.length; i++) {
        console.log(splitWord[i])
        if (targetWord == splitWord[i]) {
            guess[i] = splitWord[i]
            document.getElementById(i).innerHTML = "V"
            console.log(i)
        } else {
            console.log("no it doesnt exist")
        }
        winnerLogic();
    }
}

sq23.addEventListener('click', sq23Clicked)

function sq23Clicked(evt) {
    clickAll()
    evt.target.disabled = true;
    targetWord = "W";
    setTimeout(function() { evt.target.disabled = false; }, 10000);

    for (i = 0; i < splitWord.length; i++) {
        console.log(splitWord[i])
        if (targetWord == splitWord[i]) {
            guess[i] = splitWord[i]
            document.getElementById(i).innerHTML = "W"
            console.log(i)
        } else {
            console.log("no it doesnt exist")
        }
        winnerLogic();
    }
}

function sq24Clicked(evt) {
    evt.target.disabled = true;
    clickAll()
    targetWord = "X";
    setTimeout(function() { evt.target.disabled = false; }, 10000);

    for (i = 0; i < splitWord.length; i++) {
        console.log(splitWord[i])
        if (targetWord == splitWord[i]) {
            guess[i] = splitWord[i]
            document.getElementById(i).innerHTML = "X"
            console.log(i)
        } else {
            console.log("no it doesnt exist")
        }
        winnerLogic();
    }
}

function sq25Clicked(evt) {
    evt.target.disabled = true;
    clickAll()
    targetWord = "Y";
    setTimeout(function() { evt.target.disabled = false; }, 10000);

    for (i = 0; i < splitWord.length; i++) {
        console.log(splitWord[i])
        if (targetWord == splitWord[i]) {
            guess[i] = splitWord[i]
            document.getElementById(i).innerHTML = "Y"
            console.log(i)
        } else {
            console.log("no it doesnt exist")
        }
        winnerLogic();
    }
}

function sq26Clicked(evt) {
    evt.target.disabled = true;
    clickAll()
    targetWord = "Z";
    setTimeout(function() { evt.target.disabled = false; }, 10000);

    for (i = 0; i < splitWord.length; i++) {
        console.log(splitWord[i])
        if (targetWord == splitWord[i]) {
            guess[i] = splitWord[i]
            document.getElementById(i).innerHTML = "Z"
            console.log(i)
        } else {
            console.log("no it doesnt exist")
        }
        winnerLogic();
    }
}


//IMAGES 
//cache 
let imageJpg = document.getElementById('imageHolder')
let serenaJpg = document.getElementById('serena')
let danJpg = document.getElementById('dan')
let chuckJpg = document.getElementById('chuck')
let bartJpg = document.getElementById('bart')
let vanessaJpg = document.getElementById('vanessa')
let nateJpg = document.getElementById('nate')
let blairJpg = document.getElementById('blair')
let lilyJpg = document.getElementById('lily')
let jennyJpg = document.getElementById('jenny')
let rufusJpg = document.getElementById('rufus')
let ericJpg = document.getElementById('eric')

//create function to blur images 


// LIVES LEFT 
let heart1 = document.getElementById('h1')
let heart2 = document.getElementById('h2')
let heart3 = document.getElementById('h3')
let heart4 = document.getElementById('h4')
let heart5 = document.getElementById('h5')


// AUDIO 
function clickAll() {
    const y = new Audio('click.wav');
    y.play();
}




//LOSER POPUP

// function loserPopupFunction() {
//       var popup = document.getElementById("myPopup");
//       popup.classList.toggle("show");
// }

// //WINNER POPUP

// function winnerPopupFunction() {
//   var popup = document.getElementById("myPopup1");
//   popup.classList.toggle("show");
// }

// function loserPopupFunction() {
// let popup = document.getElementById("myPopup");
// popup.classList.toggle("show");
//  loserPopUpFunction(); 
//}