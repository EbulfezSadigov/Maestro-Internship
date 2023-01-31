const now = document.querySelector('.now')
const days = document.querySelector('.days')
const week = document.querySelector('.week')
const month = document.querySelector('.month')
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
const holdays1 = document.querySelector('.holdays1')
const holdays2 = document.querySelector('.holdays2')
const holidays = document.querySelector('#holidays')

const date = new Date()
let currentMonth = date.getMonth()
let currentYear = date.getFullYear()

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const calendar = () => {
    let lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();//get days of month
    let lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();//get days of last month
    let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();//get week day
    let inactive;
    let liTag = ''
    if (firstDayOfMonth === 0) {
        inactive = 7;
    } else {
        inactive = firstDayOfMonth;
    }

    for (let i = inactive; i > 0; i--) {
        liTag += `<li class='inactive'>${lastDateOfLastMonth - i + 1}</li>`
    }
    for (let i = 1; i <= lastDateOfMonth; i++) {
        if (i == 18 && months[currentMonth] == 'January') {
            liTag += `<li class='holls'>${i}</li>`
        }
        else if (i == 26 && months[currentMonth] == 'January') {
            liTag += `<li class='holls2'>${i}</li>`
        }
        else {
            liTag += `<li>${i}</li>`
        }
    }
    now.innerHTML = `${months[currentMonth]} ${currentYear}`;
    days.innerHTML = liTag;
    Holidays()
}

calendar()


next.addEventListener('click', () => {
    if (currentMonth == 11) {
        currentMonth = 0;
        currentYear += 1;
        calendar()
        now.innerHTML = `${months[currentMonth]} ${currentYear}`;
    }
    else {
        currentMonth += 1;
        calendar()
        now.innerHTML = `${months[currentMonth]} ${currentYear}`;
    }
})

prev.addEventListener('click', () => {
    if (currentMonth == 0) {
        currentMonth = 11;
        currentYear -= 1;
        calendar()
        now.innerHTML = `${months[currentMonth]} ${currentYear}`;
    }
    else {
        currentMonth -= 1;
        calendar()
        now.innerHTML = `${months[currentMonth]} ${currentYear}`;
    }
})

function Holidays() {
    let daysLi = document.querySelectorAll('.days li')
    daysLi.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target.innerText == 18) {
                holidays.style.display = 'block';
                month.innerText = `${months[currentMonth]} , ${e.target.innerText < 10 ? `0${e.target.innerText}` : `${e.target.innerText}`}`
                week.innerText = weeks[new Date(currentYear, currentMonth, e.target.innerText).getDay()];
                holdays1.innerText = weeks[new Date(currentYear, currentMonth, e.target.innerText).getDay()].slice(0, 3) + ', ' + `${e.target.innerText}th`
                holdays2.innerText = weeks[new Date(currentYear, currentMonth, 26).getDay()].slice(0, 3) + ', ' + `${26}th`
            }
            else if (e.target.innerText == 26) {
                holdays1.innerText = weeks[new Date(currentYear, currentMonth, 26).getDay()].slice(0, 3) + ', ' + `${26}th`
                holidays.style.display = 'block';
                month.innerText = `${months[currentMonth]} , ${e.target.innerText < 10 ? `0${e.target.innerText}` : `${e.target.innerText}`}`
                week.innerText = weeks[new Date(currentYear, currentMonth, e.target.innerText).getDay()];
                holdays2.innerText = weeks[new Date(currentYear, currentMonth, e.target.innerText).getDay()].slice(0, 3) + ', ' + `${e.target.innerText}th`
            }
            else {
                holidays.style.display = 'none';
            }
        })
    })

}





