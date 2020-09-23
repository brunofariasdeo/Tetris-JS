document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelectorAll('.grid div'))
    const score = document.querySelector('#score')
    const startBt = document.querySelector('#start-button')
    
    const height = 10
    
    const iShape = [
        [0, height, height*2, height*3], 
        [0, -1, 1, 2],  
        [0, height, height*2, height*3] ,
        [height, height-1, height+1, height+2]        
    ]

    const zShape = [
        [0, +1, -height, height+1],
        [0, +1, height, height-1],
        [0, +1, -height, height+1],
        [0, +1, height, height-1]
    ]

    const lShape = [
        [0, -height, height, height+1],
        [0, 1, -1, height-1],
        [0, height, -height, -height-1],
        [0, -1, +1, -height+1]
    ]

    const strangeShape = [
        [0, -height, -1, 1],
        [0, -height, height, 1],
        [0, 1, -1, height],
        [0, -height, height, -1]
    ]

    let pieces = [iShape, zShape, lShape, strangeShape]
    let currentPos = 4
    let currentRotate = 0
    let currentShape
    let currentPiece = nextPiece()
    timer = setInterval(moveDown, 700)

    function nextPiece() {
        currentShape = Math.floor(Math.random() * pieces.length)
        return pieces[currentShape][0]
    }

    function drawGrids() {
        for (let i=0; i<squares.length; i++) {           
            squares[i].classList.add("noPiece")            
        }      
    }

    function undrawPiece() {
        for (index of currentPiece) {
            if (currentPos+index > 0) {
                squares[currentPos + index].classList.remove("piece")
            }
        }
    }

    function drawPiece() {
        for (index of currentPiece) {
            if (currentPos+index > 0) {
                squares[currentPos + index].classList.add("piece")
            }
        }        
    }

    function updatePiece() {
        currentPos = 4
        currentPiece = nextPiece()
    }

    function stop() {
        for (index of currentPiece) {
            if (index+currentPos+height > 199 || squares[index+currentPos+height].classList.contains("freeze")) {   
                currentPiece.forEach(index => squares[currentPos+index].classList.add("freeze"))           
                updatePiece()
                break
            }                       
        }
    }

    function moveDown() {  
        stop()             
        undrawPiece()
        currentPos += height
        drawPiece()           
    }

    function moveLeft() {
        let atLimit = false
        let pieceOnLeft = false
        for (index of currentPiece) {
            if ((currentPos+index) % height === 0) {
                atLimit = true
                break
            } else if (index > 0 && squares[currentPos+index-1].classList.contains("freeze")) {
                pieceOnLeft = true
                break
            }
        }
        if (!atLimit && !pieceOnLeft) {
            undrawPiece()
            currentPos -= 1
            drawPiece()
        } else if(pieceOnLeft){
            updatePiece()
        }
    }

    function moveRight() {
        let atLimit = false
        let pieceOnRight = false
        for (index of currentPiece) {
            if ((currentPos+index) % height === height-1) {
                console.log(currentPos+index)
                atLimit = true
                break
            } else if (index > 0 && squares[currentPos+index+1].classList.contains("freeze")) {
                pieceOnRight = true
                break
            }
        }
        if (!atLimit && !pieceOnRight) {
            undrawPiece()
            currentPos += 1
            drawPiece()
        } else if(pieceOnRight){
            updatePiece()
        }
    }

    function rotate() {
        if (currentRotate < 3) {
            currentRotate++
        } else {
            currentRotate = 0
        }
        
        undrawPiece()
        currentPiece = pieces[currentShape][currentRotate]
        drawPiece()
    }

    function control(e) {
        if (e.keyCode === 37) {
            moveLeft()
        } else if (e.keyCode === 38) {
            rotate()
        } else if (e.keyCode === 39) {
            moveRight()            
        } else if (e.keyCode === 40) {
            moveDown()
        }
    }
    
    document.addEventListener('keydown', control)
    drawGrids()
    drawPiece() 
})


