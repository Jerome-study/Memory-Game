const grid = document.querySelector('.grid')
const resetButton = document.getElementById('reset')
const content = document.querySelector('.content')

const cards = [
    {
        name: 'axe',
        image: './image/axe.jpg',
        id: 0
    },
    {
        name: 'earthsaker',
        image: './image/earthshaker.jpg',
        id: 1
    },
    {
        name: 'invoker',
        image: './image/invoker.jpg',
        id: 2
    },
    {
        name: 'juggernaut',
        image: './image/juggernaut.jpg',
        id: 3
    },
    {
        name: 'mortred',
        image: './image/mortred.jpg',
        id: 4
    },
    {
        name: 'sandking',
        image: './image/sand-king.jpg',
        id: 5
    },
    {
        name: 'axe',
        image: './image/axe.jpg',
        id: 6
    },
    {
        name: 'earthsaker',
        image: './image/earthshaker.jpg',
        id: 7
    },
    {
        name: 'invoker',
        image: './image/invoker.jpg',
        id: 8
    },
    {
        name: 'juggernaut',
        image: './image/juggernaut.jpg',
        id: 9
    },
    {
        name: 'mortred',
        image: './image/mortred.jpg',
        id: 10
    },
    {
        name: 'sandking',
        image: './image/sand-king.jpg',
        id: 11
    },
]

let cardsChosen = []
let cardsFinish = []
let array = []


createBoard()

function createBoard () {
    for (let i = 0; i < cards.length; i++) {
        const box = document.createElement('div')
        const image = document.createElement('img')

        box.classList.add('cell')
        image.classList.add('picture')
        
        box.appendChild(image)
        grid.appendChild(box)

        image.setAttribute('src', './image/logo.jpg')
        image.setAttribute('dataIndex', i)

        image.addEventListener('click', buttonClick)

        
    }
    
    for (let i = grid.children.length; i >= 0; i--) {
        grid.appendChild(grid.children[Math.random() * i | 0]);
    }
}

const picture = document.querySelectorAll('.picture')



function buttonClick() {
    const index = this.getAttribute('dataIndex')
    this.setAttribute('src', cards[index].image)
    console.log(index)
    

    cardsChosen.push(cards[index].id)
    array.push(this)
    if (cardsChosen.length == 2) {
        checkCards() 
        
    }
    
    
}

function checkCards () {
   const firstCard = cards[cardsChosen[0]].name
   const secondCard = cards[cardsChosen[1]].name
   
   
   if (firstCard === secondCard) {
    setTimeout(() => {
        
        array.forEach(arr => {
            arr.setAttribute('src', './image/dota2.jpg')
            arr.removeEventListener('click', buttonClick)
        })
        array = []
        cardsChosen= []
        cardsFinish.push(array[0],array[1])

    },700)
    array
   
   } else if (firstCard !== secondCard) {
    setTimeout(() => {
        array.forEach(arr => {
            arr.setAttribute('src', './image/logo.jpg')
        })
        array = []
        cardsChosen= []
    },700)
   }
   console.log(cardsFinish.length)
   if (cardsFinish.length === 10) {
    console.log('You win')

    setTimeout(() => {
        content.style.filter = "brightness(30%)";
        generateResetButton()
    }, 700)
    

   } 
 
}


function generateResetButton () {
    resetButton.style.display = 'block'

    resetButton.addEventListener('click', ()=> {
        picture.forEach(icon => {
            icon.setAttribute('src', './image/logo.jpg')
            icon.addEventListener('click', buttonClick)

            cardsChosen = []
            array = []
            cardsFinish = []
        })

        let audio = new Audio('./image/refresher.mp3');
        audio.play();
        resetButton.style.display = 'none'
        content.style.filter = "brightness(100%)";
   
    })

    
}
