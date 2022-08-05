// TODO: Declare any global variables we need
let headsCount = 0;
let tailsCount = 0;
let headsElement = document.getElementById("heads");
let headsPercent = document.getElementById("heads-percent");
let tailsElement = document.getElementById("tails");
let tailsPercent = document.getElementById("tails-percent");


let statusMessage = document.querySelector(".message-container");
let pennyImage = document.querySelector("#penny");




    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
    let flipButton = document.getElementById("flip");
    flipButton.addEventListener("click", function(){

        let randomNumber = Math.floor(Math.random() * 10 + 1);
        
        if (randomNumber % 2 === 0){
            console.log("Head");
            headsCount++;
            statusMessage.innerText = "You Flipped Heads";
            //overide the image source attribute
            pennyImage.setAttribute('src', './assets/images/penny-heads.jpg'); 


        }
        else{
            console.log("Tail");
            tailsCount++;
            statusMessage.innerText = "You Flipped Tails";
            //overide the image source attribute
            pennyImage.setAttribute('src', './assets/images/penny-tails.jpg'); 

        }

        updateScoreBoard();


    });

    
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard

        function updateScoreBoard(){

        headsElement.innerText = headsCount;
        let headPer = Math.round((headsCount/ (headsCount + tailsCount)) * 100);
        if (headsCount + tailsCount === 0){

            headsPercent.innerText = 0;

        }

        else 
            {
            headsPercent.innerText = headPer;
            }
        

        tailsElement.innerText = tailsCount;
        tailsPercent.innerText = Math.round((headsCount/ (headsCount + tailsCount)) * 100);
        let tailsPer = Math.round((tailsCount/ (headsCount + tailsCount)) * 100);
        if (headsCount + tailsCount === 0){

            tailsPercent.innerText = 0;

        }

        else 
            {
            tailsPercent.innerText = tailsPer;
            }
        }


        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

        let clearBoard = document.getElementById("clear")
        clearBoard.addEventListener("click", function(){

            headsCount = 0;
            tailsCount = 0;

            updateScoreBoard();

        });


        



