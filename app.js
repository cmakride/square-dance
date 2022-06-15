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
  newDiv.style.color = "#f5f1dc"
  newDiv.innerHTML = "0"
  grid.appendChild(newDiv)
}

intervalId = setInterval(() => {

  //pick random number from 0-15
  const randomSquare = Math.floor(Math.random() * 16)


  //pick a random color
  const color = `hsl(${Math.random() * 360}, 50%, 50%)`


  for (let i = 0; i < 16; i++) {
    const square = document.querySelector(`#gridEl-${i}`)
    let counter = parseInt(square.innerHTML)
    counter += 250

    if (randomSquare === i && counter >= 2000) {
      square.style.backgroundColor = color
      square.style.color = color
      counter = 0
    }

    square.innerHTML = counter
  }


}, 250)