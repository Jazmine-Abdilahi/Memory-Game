document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'fries',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/hotdog.png'
      },
      {
        name: 'fries',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'https://raw.githubusercontent.com/kubowania/memory-game/master/images/hotdog.png'
      },
    
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    