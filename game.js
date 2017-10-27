/*### Step 3 - JS - Declare variables and write the Slap function

1. Create a global variable: var health=100;
2. Create a function: slap()
  - Have the function reduce the health variable by 1.
  - For now, have the function alert(health).
  - Test the function by calling slap() at the end of the game.js file. 
    - You should see an alert of 99 show on the screen.
    - If this is working, remove the test to prevent popups on every page load.

*/

var opHealth = 100
var uHealth = 100
var hits = 0

var slap = -1
var punch = -5
var kick = -10

var shield1 = 1
var shield2 = 5
var shield3 = 10

var userDam1 = -1
var userDam2 = -5
var userDam3 = -10

var result = "You beat a monkey Way to go, bucko!"


function update() {
    checkReset()
    document.getElementById("opHealth").innerText = opHealth;
    document.getElementById("uHealth").innerText = uHealth
    document.getElementById("hits").innerText = hits
    uHD()
}


function checkReset() {
    if (opHealth < 0) {
        opHealth = 0;
        reset()
    }
}

function outcome(){
    document.getElementById("result").innerText = result
}

function reset() {
    opHealth = 100
    uHealth = 100
    hits = 0
}

function slapC() {
    opHealth += slap
    hits += 1
    update()
}

function punchC() {
    opHealth += punch
    hits += 1
    update()
}

function kickC() {
    opHealth += kick
    hits += 1
    update()
}

var myVar;

function uHD() {
    myVar = setInterval(killUser, 1000);
}

function killUser() {
  uHealth - 1
}
update()
