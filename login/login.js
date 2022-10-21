let nameEl = document.getElementById('name');
let surnameEl = document.getElementById('surname');
let btnEl = document.getElementById('Login');
let overflow1 = document.getElementById('overflow');
nameEl.oninput = check;
surnameEl.oninput = check;
function check() {
    if (nameEl.value !== '' && surnameEl.value !== '') {
        btnEl.removeAttribute('disabled')
        localStorage.setItem('fullname', `${nameEl.value} ${surnameEl.value}`)
    }
}
btnEl.addEventListener('click', () => {
    overflow1.classList.add('lds-spinner')
    document.querySelector('.container').style.display = 'none'
    setTimeout(() => {
        location.replace('../index.html')
    }, 2000)
})
