let hourEl = document.getElementById('hour')
let secondEl = document.getElementById('second')
let minuteEl = document.getElementById('minute')
let minutesEl = document.getElementById('minutes')
let secondsEl = document.getElementById('seconds')
let hoursEl = document.getElementById('hours')
let spanEl = document.querySelectorAll('span')
let btn = document.getElementById("btn")
let haEl = document.getElementById("ha")
let yoqEl = document.getElementById("yoq")
let modals = document.getElementById("modals")
let modal = document.getElementById('modal')
let falsiy = document.getElementById('false')
let overflow = document.getElementById('overflow')
let conatiner = document.querySelector('.container')
let userEl = document.getElementById('user')
let txtEl = document.getElementById('txt')
setInterval(() => {
    if (localStorage.getItem('fullname')) {
        let username = localStorage.getItem("fullname");
        txtEl.textContent = "Ro'yhatdan o'tganingiz uchun rahmat"
        userEl.textContent = username
        user()
    }
    else {
        txtEl.textContent = ''
        userEl.textContent = ''
    }
}, 100)
function user() {
    modals.style.display = 'none'
    modal.style.display = 'none'
}
let audio = new Audio('aoudio.wav')
document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        let date = new Date()
        let hour = date.getHours()
        let minute = date.getMinutes()
        let second = date.getSeconds()
        secondEl.style.transform = `rotate(${second * 6}deg)`
        hourEl.style.transform = `rotate(${hour * 30}deg)`
        minuteEl.style.transform = `rotate(${minute * 6}deg)`
        audio.play()
        clock(hour, second, minute)
    }, 1000)
})

function clock(hour, second, minute) {
    hoursEl.textContent = `${hour}`.padStart(2, '0')
    secondsEl.textContent = `${second}`.padStart(2, '0')
    minutesEl.textContent = `${minute}`.padStart(2, '0')
}
setTimeout(() => {
    modals.style.transform = 'translateY(10px)'
    modals.style.opacity = '1'
}, 3000)
function open() {
    setTimeout(() => {
        modal.style.transform = 'translateY(10px)'
        modal.style.opacity = '1'
    }, 1000)
}

haEl.addEventListener('click', () => {
    opacityNone2()
    open()
})
yoqEl.addEventListener('click', () => {
    opacityNone2()
})
function opacityNone() {
    modal.style.transform = 'translateY(-23px)'
    modal.style.opacity = '0'
}

function opacityNone2() {
    modals.style.transform = 'translateY(-23px)'
    modals.style.opacity = '0'
}

btn.addEventListener("click", () => {
    opacityNone()
    loading()
    setTimeout(() => {
        window.location.replace('../login/login.html')
    }, 3000)
})
falsiy.addEventListener('click', () => {
    loading()
    opacityNone()
    setTimeout(() => {
        window.close()
    }, 3000)
})
function loading() {
    conatiner.style.display = 'none'
    overflow.classList.add('lds-spinner')
    setTimeout(() => {
        conatiner.style.display = 'block'
        overflow.classList.remove('lds-spinner')
    }, 3000)
}