console.log('Siema!');
const name = 'Artur';
const age = 76;

console.log(name);
console.log(age);

console.log(`Nazywam się ${name} i mam ${age} lat`);


const mainHeader = document.querySelector('.mainHeader')

console.log(mainHeader);

const paragraphs = document.querySelectorAll('p')

console.log('.paragraph__test--js');

console.log(paragraphs[2]);




if (age < 20) {

    console.log('Masz mniej niż 20 lat');

} else if ((age >= 20) && (age <= 30)) {

    console.log('Masz więcej niż 20 lat ale mniej niż 30');
} else {

    console.log('jesteś 31+');

}


switch (age) {

    case 20:
        console.log('masz równo 20 lat');

        break

    case 30:
        console.log('masz równo 30 lat');

        break

    default:
        console.log(`masz ${age} lat`);

        break
}


const amIOld = (age > 70) ? 'yes' : 'no';
console.log(amIOld);


function calculate(x) {

    x = x + 3

    console.log(x);
    return x * 7
}

console.log(calculate(2));
const myCalculation = calculate(4);
console.log(myCalculation);


const button = document.querySelector('.header__button--js');

console.log(button);

function handleClick() {
    console.log('halo');
}

button.addEventListener('click', (e) => {
    const header = document.querySelector('.mainHeader--js');
    header.innerHTML = 'klik, kilk'
    header.classList.add('mainHeader--red');
});


const navigationSwitcher = document.querySelector('.naviagation__switcher--js');

navigationSwitcher.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.navigation__list--js');
    navigationList.classList.toggle('navigation__list--visible');
});