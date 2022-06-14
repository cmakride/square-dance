// Please create a web page that has a 4x4 grid, with a border around it. The grid should be horizontally centered in the web page. Every 250 milliseconds, one of the eligible squares should be randomly selected to change colors. Squares are eligible for a color change if its color has not changed in the last two seconds.

// Feel free to conduct research on the web, but do not ask anyone for help. Also, do not use any libraries (e.g. jQuery) or any publishing software such as Microsoft Word. If you’re unable to create this page (even after consulting the web), this role probably won’t be a good fit. We encourage you to spend some time to verify the logic in your solution.


const grid = document.querySelector("#grid")

//? creating a div for each grid element total of 16 being a 4-4 grid
for (let i = 0; i < 16; i++) {
  let newDiv = document.createElement('div')
  newDiv.id = `gridEl-${i}`
  newDiv.style.width = "100px"
  newDiv.style.height = "100px"
  newDiv.style.backgroundColor = "#f5f1dc"
  grid.appendChild(newDiv)
}

//variables of change
let grid0 = 0
let grid1 = 0
let grid2 = 0
let grid3 = 0
let grid4 = 0
let grid5 = 0
let grid6 = 0
let grid7 = 0
let grid8 = 0
let grid9 = 0
let grid10 = 0
let grid11 = 0
let grid12 = 0
let grid13 = 0
let grid14 = 0
let grid15 = 0



//create random color
//select random square
//start a timer
//have variable for each square of last changed if greater than certain amount change the color
//

intervalId = setInterval(() => {

  //pick random number from 0-15
  const randomSquare = Math.floor(Math.random() * 16)


  //pick a random color
  const color = `hsl(${Math.random() * 360}, 50%, 50%)`
  // const square = document.querySelector(`#gridEl-${i}`)

  for(let i = 0 ; i < 16 ; i++ ){

    if(randomSquare === i){
      const square = document.querySelector(`#gridEl-${i}`)
      square.style.backgroundColor = color
    }

  }
  

}, 250)