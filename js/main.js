var elModal = document.querySelector('.modal');
var elClose = document.querySelector('.close');
var elX = document.querySelector('.x');
var elOpen = document.querySelector('.btn');
var elShadow = document.querySelector('.shadow')


elOpen.addEventListener('click', ()=>{
    elModal.classList.add('open');
    elShadow.classList.add('shadow__open')
})

elX.addEventListener('click', ()=>{
    elModal.classList.remove('open');
    elShadow.classList.remove('shadow__open')
})

elClose.addEventListener('click', ()=>{
    elModal.classList.remove('open');
    elShadow.classList.remove('shadow__open')
})

elShadow.addEventListener('click', ()=> {
    elModal.classList.remove('open')
    elShadow.classList.remove('shadow__open')
})



var  elInp1 = document.querySelector('.text');
var  elInp2 = document.querySelector('.pass');
var  elTitle = document.querySelector('.title')



elOpen.addEventListener('click', ()=>{
    var a = elInp1.value;
    var b = elInp2.value;
    if (a == 'bahodir' && b == 'bahodir'){
        elTitle.textContent = 'siz togri kiritdingiz'
        elInp1.classList.add('yes');
        elInp1.classList.remove('no')
        elInp2.classList.add('yes')
        elInp2.classList.remove('no')
    }
    else{
        elTitle.textContent = 'siz xato kiritdingiz'
        elInp1.classList.add('no')
        elInp1.classList.remove('yes')
        elInp2.classList.add('no')
        elInp2.classList.remove('yes')
    }
})

