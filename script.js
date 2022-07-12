'use strict'
const share = document.querySelectorAll('.share-icon')
const user = document.querySelector('.user')
const icons = document.querySelector('.icons')
console.log(share);
const mobileView = window.matchMedia('(max-width: 664px')
share.forEach(s => {
    s.addEventListener('click', function(e){
        if(mobileView.matches){
            user.classList.add('hidden')
            icons.classList.remove('hidden')
            if(e.target.classList.contains('mobile-share__icon')){
                icons.classList.add('hidden')
                user.classList.remove('hidden')
            }
        }
        else{
            icons.classList.toggle('hidden')
            if(!icons.classList.contains('hidden')){
                s.style.backgroundColor = 'hsl(214, 17%, 51%)'
                s.src = './images/icon-share2.svg'
            }
            else{
                s.style.backgroundColor = 'hsla(212, 23%, 69%, 0.367)'
                s.src = './images/icon-share.svg'
            }


        }
    })
})
