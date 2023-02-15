const myBtn = document.querySelectorAll('.myBtn')
const hintBtn = document.querySelector('.hintBtn')
const timer = document.querySelector('#timer')
const score = document.querySelector('#score')
const startButton = document.querySelector('#startBtn')
const nextBtn = document.querySelector('#next')
const myInput = document.querySelector('#myInput')
const inputs = document.querySelector('#inputs')
const wordHint = document.querySelector('.hint')

let words = [
    {
        word: "addition",
        hint: "The process of adding numbers"
    },
    {
        word: "meeting",
        hint: "Event in which people come together"
    },
    {
        word: "number",
        hint: "Math symbol used for counting"
    },
    {
        word: "exchange",
        hint: "The act of trading"
    },
    {
        word: "canvas",
        hint: "Piece of fabric for oil painting"
    },
    {
        word: "garden",
        hint: "Space for planting flower and plant"
    },
    {
        word: "position",
        hint: "Location of someone or something"
    },
    {
        word: "feather",
        hint: "Hair like outer covering of bird"
    },
    {
        word: "comfort",
        hint: "A pleasant feeling of relaxation"
    },
    {
        word: "tongue",
        hint: "The muscular organ of mouth"
    },
    {
        word: "expansion",
        hint: "The process of increase or grow"
    },
    {
        word: "country",
        hint: "A politically identified region"
    },
    {
        word: "group",
        hint: "A number of objects or persons"
    },
    {
        word: "taste",
        hint: "Ability of tongue to detect flavour"
    },
    {
        word: "store",
        hint: "Large shop where goods are traded"
    },
    {
        word: "field",
        hint: "Area of land for farming activities"
    },
    {
        word: "friend",
        hint: "Person other than a family member"
    },
    {
        word: "pocket",
        hint: "A bag for carrying small items"
    },
    {
        word: "needle",
        hint: "A thin and sharp metal pin"
    },
    {
        word: "expert",
        hint: "Person with extensive knowledge"
    },
    {
        word: "statement",
        hint: "A declaration of something"
    },
    {
        word: "second",
        hint: "One-sixtieth of a minute"
    },
    {
        word: "library",
        hint: "Place containing collection of books"
    },
]

let word, hint, interval;
let corrects = [];


function randomWords() {
    let wordList = words[Math.floor(Math.random() * words.length)]
    word = wordList.word;
    hint = wordList.hint;
    let html = ''
    for (let i = 0; i < word.length; i++) {
        html += `<input disabled type="text" class="w-[40px] mr-1 h-[40px] rounded-lg bg-gray-300 text-center text-black text-2xl">`
    }
    inputs.innerHTML = html
}

nextBtn.addEventListener('click', () => {
    randomWords()
    hinted()
    myBtn.forEach((item) => {
        if (item.disabled == true) {
            item.disabled = false;
        }
        item.style.backgroundColor = ''
        item.classList.add("bg-emerald-400");
    });
    startGame()
})

function hinted() {
    hintBtn.addEventListener('click', () => {
        wordHint.innerText = hint;
        wordHint.parentElement.style.display = 'block'
        hintBtn.disabled = true;
        score.innerText = `Score: ${Math.floor((score.innerText[score.innerText.length - 1] / 2))}`
    })
}

function initGame() {
    let loser = word.length;
    myBtn.forEach(item => {
        score.innerText = `Score:${word.length}`
        item.addEventListener('click', (e) => {
            let key = e.target.innerText
            if (word.includes(key)) {
                for (let i = 0; i < word.length; i++) {
                    if (word[i] === key) {
                        inputs.querySelectorAll('input')[i].value = key;
                        e.target.style.backgroundColor = 'green';
                        e.target.disabled = true;
                        corrects.push(key)
                    }
                }
            }
            else {
                e.target.style.backgroundColor = 'red'
                e.target.disabled = true;
                if (hintBtn.disabled == true) {
                    score.innerText = `Score: ${Math.floor((score.innerText[score.innerText.length - 1] / 2))}`
                }
                else{
                    loser--;
                    score.innerText = `Score: ${loser}`
                }
            }
        })
    })
}

function WinAndFalseCase() {
    clearInterval(interval);
    timer.innerText = `Time`
    timer.style.backgroundColor = 'gray'
    startButton.disabled = false;
    score.innerHTML = `Score`;
    for (let i = 0; i < word.length; i++) {
        inputs.querySelectorAll('input')[i].value = ''
    }
    reloadPage()
}

const reloadPage = () => {
    scoreNumber = word.length;
    let time = 30;
    timer.innerText = `Time:${time}`;
    score.innerHTML = `Score : ${scoreNumber}`;
    myBtn.forEach((item) => {
        if (item.disabled == false) {
            item.disabled = true;
        }
        item.style.backgroundColor = ''
        item.classList.add("bg-emerald-400");
    });
};

startGame()


function startGame() {
    startButton.addEventListener('click', () => {
        randomWords()
        myBtn.forEach((item) => {
            item.disabled = false;
            item.style.boxShadow = "0px 0px 11px 4px white"
        });
        startButton.disabled = true;
        timer.style.backgroundColor = 'green'
        let seconds = 30;
        initGame()
        hinted()
        interval = setInterval(() => {
            seconds--
            timer.innerText = `Time:${seconds}`
            console.log(score.innerText[score.innerText.length - 1])
            if (Number(score.innerText[score.innerText.length - 1]) == 0 || seconds == 0 ) {
                alert('Game Over');
                WinAndFalseCase()
                location.reload()
            }
            else if (corrects.length === word.length) {
                alert('You Win')
                WinAndFalseCase()
                location.reload()
            }
        }, 1000)
    })
}

