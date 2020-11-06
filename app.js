/*const observer = new IntersectionObserver(function (observables) {
    observables.forEach(function (observable) {
      // L'élément devient visible
      if (observable.intersectionRatio > 0.5) {
        console.log("hhaha")
        console.log(observable)
        observer.unobserve(observable.target)
      }
    })
  }, {
    threshold: [0.1]
  });
  
// On observe nos éléments
const items = document.querySelector('.test')
observer.observe(items)*/

const btn_second = document.getElementById('btn-second')
const second_box = document.querySelector('.second_box')
const anim_second = document.querySelector('.anim_second')

btn_second.addEventListener('click', (e) => {
  second_box.classList.add('none')
  anim_second.classList.remove('none')

})

const gamer_second = document.querySelector('.gamer_anim_second')
const third_box = document.querySelector('.third_box')

gamer_second.addEventListener('click', (e) => {
  anim_second.classList.add('none')
  third_box.classList.remove('none')
})

const shop = document.getElementById('shop_project')
const port_pro = document.getElementById('port_project')
const btn_plus = document.querySelector('.btn_plus')
const shaready = document.getElementById('shaready')
const anim_second_2 = document.getElementById('anim_second_2')

let i = 0

btn_plus.addEventListener('click', (e) => {
  i++
  if (i == 1) {
    shop.classList.remove('none')
  } else if (i == 2) {
    shop.classList.add('none')
    port_pro.classList.remove('none')
  } else if (i == 3) {
    port_pro.classList.add('none')
    shaready.classList.remove('none')
  } else if (i == 4) {
    third_box.classList.add('none')
    anim_second_2.classList.remove('none')
  }
})

const runner2 = document.getElementById('runner_2')
const fourth_box = document.querySelector('.fourth_box')
const time_class = document.querySelector('.timer')

runner2.addEventListener('click', (e) => {
  anim_second_2.classList.add('none')
  fourth_box.classList.remove('none')
  time_class.classList.remove('none')
})

function remove_second(time){
  console.log('je suis la')
  const id = setInterval(() => {
    time = time - 1
    time_class.innerHTML = "00:00:0" + time
    if (time === 0) {
      clearInterval(id)
    }
  }, 1000);
}

anim_second_2.addEventListener('click', (e) => {
  if (!time_class.classList.contains('none')) {
    remove_second(8)
  }
})

const swipe = document.getElementById('swipe')
const fifth = document.querySelector('.fifth_box')

swipe.addEventListener('click', (e) => {
  fourth_box.classList.add('none')
  fifth.classList.remove('none')
})

const victory = document.getElementById('victory')
const sixth = document.querySelector('.sixth_box')

victory.addEventListener('click', (e) => {
  fifth.classList.add('none')
  sixth.classList.remove('none')
})