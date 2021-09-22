let keypad = document.querySelectorAll('.key')
let screen = document.querySelector('#screen-ipt')
let toggleButton = document.querySelector('.toggle-button')
let toggleSwitch = document.querySelector('.switch')
let calculator = document.querySelector('.calc')


keypad.forEach(ele=>{
    ele.addEventListener('click',e=>{
        let pressedKey =  e.target.childNodes[0].data
        if (pressedKey == "RESET") {
            screen.value = ''
        } else {
            screen.value += e.target.childNodes[0].data
        }
    })
})

let switchPosition = 2
toggleButton.addEventListener("click",e=>{
    if (switchPosition == 1) {

//         $main-background1: hsl(0, 0%, 90%);
//   $keypad-bg:  hsl(0, 5%, 81%);
//   $screen-bg: hsl(0, 0%, 93%);
//   $toggle-background:  hsl(0, 5%, 81%);
//   $dark-blue-kb: hsl(185, 42%, 37%);
//   $dark-blue-ks: hsl(185, 58%, 25%);
//   $red: hsl(25, 98%, 40%);
//   $dark-red: hsl(25, 99%, 27%);
//   $lgt-gray-orange: hsl(45, 7%, 89%);
//   $grayish-orange: hsl(35, 11%, 61%);

        toggleButton.style.justifyContent = 'start'
        switchPosition = 2
    }else if (switchPosition == 2) {
        calculator.classList.add('second')
        toggleButton.style.justifyContent = 'center'
        switchPosition = 3
    }else if(switchPosition == 3){
        toggleButton.style.justifyContent = 'end'
        switchPosition = 1
    }
})