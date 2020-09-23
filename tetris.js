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
    let currentPos
    let currentRotate
    let currentShape
    let currentPiece 
    let started = null

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

    function gameOver() {

    }

    function moveDown() {  
        stop()        
        isInEvent = true     
        undrawPiece()
        currentPos += height
        drawPiece()         
        isInEvent = false  
    }

    function moveLeft() {      
        let atLimit = false
        let pieceOnLeft = false
        for (index of currentPiece) {
            if ((currentPos+index) % height === 0) {
                atLimit = true
                break
            } else if ((currentPos+index) > 0 && squares[currentPos+index-1].classList.contains("freeze")) {
                pieceOnLeft = true
                break
            }
        }
        if (!atLimit && !pieceOnLeft) {
            undrawPiece()
            currentPos -= 1
            drawPiece()
        }
    }

    function moveRight() {       
        let atLimit = false
        let pieceOnRight = false
        for (index of currentPiece) {
            if ((currentPos+index) % height === height-1) {                
                atLimit = true
                break
            } else if ((currentPos+index) > 0 && squares[currentPos+index+1].classList.contains("freeze")) {
                pieceOnRight = true
                break
            }
        }
        if (!atLimit && !pieceOnRight) {
            undrawPiece()
            currentPos += 1
            drawPiece()
        }         
    }

    function rotate() {        
        if (currentRotate < 3) {
            currentRotate++
        } else {
            currentRotate = 0
        }
        oldRotation = currentPiece
        currentPiece = pieces[currentShape][currentRotate]      
            
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

    function goDown(e) {
        if (e.keyCode === 40) {
            moveDown()
        }
    }

    function startAndPause() {
        if (started === null) {
            currentPos = 4
            currentRotate = 0
            currentShape
            currentPiece = nextPiece()               
            timerId = setInterval(moveDown, 700)
            started = true
        } else if (started === true) {
            started = false
            clearInterval(timerId)
        } else {
            started = true
            timerId = setInterval(moveDown, 700)
        }
        
    }

    drawGrids()
    startBt.addEventListener('click', startAndPause)    
    document.addEventListener('keyup', control)
    document.addEventListener('keydown', goDown)
})


