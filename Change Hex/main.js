//Start with variables
// select the targeted variable in css
const hexBtn = document.querySelector('.hexBtn');
// select the body in css
const bodyBcg = document.querySelector('body');
const hex = document.querySelector('.hex');
//An Array of colors to choose from
const hexNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9,'A','B', 'C', 'D', 'E', 'F'];
// add event listener
hexBtn.addEventListener('click', getHex);
// a function that gets invoked by the variable  which 
// gets triggered by the click event
function getHex(){
    let hexCol = '#';
    // an example of the final app function
    // bodyBcg.style.backgroundColor = 'black';
    // bodyBcg.style.backgroundColor = colors[2];
    // assign a variable that generates a random number
    // tie it with a method to be random in selecting the
    // colors in the array
    for(let i = 0; i < 6; i++ ){
    let random = Math.floor(Math.random()*hexNumbers.length);
    hexCol += hexNumbers[random];
    }
    bodyBcg.style.backgroundColor = hexCol;
    hex.innerHTML = hexCol;
}
