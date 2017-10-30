var pLife = 100
var cLife = 100
var hits = 0
var power = 10
var shield = 10

//-------------------------------------start game

function newGame(){
    pLife = 100
    cLife = 100
    hits = 0
    life = 1
    shield = 10
    power = 10
    powerAction()
    shieldAction()
    update()
}

function clickPower(){
    power += 3
    update()
    
}

function clickLife(){
    pLife += 1
    update()
    
}

function clickShield(){
    shield += 1
    update()
    
}

function attack(){
    hits += 1
    power -= 1
    var m = Math.random();
    if(m>=.36 && power >= 1)
    cLife -= 8
    if(m<=.30)
    pLife -= 5
    shield -= 1
    
}
//---------------------take power level down interaval : 1 per second----------------------
function powerAction() {
    setInterval(dePower, 1000/10);
}
//------------------------power action
function dePower() {
    if (power > 0) {
        power -= .05
    }
    update()
}

//-----------------------shield action

function shieldAction() {
    setInterval(deShield, 1000/10);
}
function deShield() {
    if (shield > 0) {
        shield -= .005
    }
    update()
}
//----------------update stats function -------------------------

function update(){
    if(pLife == 0 || cLife == 0)
    newGame()

    document.getElementById("cLife").innerText = cLife;
    document.getElementById("pLife").innerText = pLife
    document.getElementById("hits").innerText = hits
    document.getElementById("power").innerText = power
    document.getElementById("shield").innerText = shield
    
}
function checkReset(){
    if(pLife === 0)
    newGame()
    if(cLife === 0)
    //"you win!"
    newGame()
}

newGame()

//---------------------------------------------------


/*

function endGame(){

}

}














/*




/*### Step 3 - JS - Declare variables and write the Slap function

1. Create a global variable: var health=100;
2. Create a function: slap()
  - Have the function reduce the health variable by 1.
  - For now, have the function alert(health).
  - Test the function by calling slap() at the end of the game.js file. 
    - You should see an alert of 99 show on the screen.
    - If this is working, remove the test to prevent popups on every page load.



var opHealth = 100
var uHealth = 100
var hits = 0
var dollarsSpent = 0

var slap = -1
var punch = -5
var kick = -10


function update() {
    checkReset()
    document.getElementById("opHealth").innerText = opHealth;
    document.getElementById("uHealth").innerText = uHealth
    document.getElementById("hits").innerText = hits
    document.getElementById("dollarsSpent").innerText = dollarsSpent
    
}

function checkReset() {
    if (opHealth < 0) {
        opHealth = 0;
        reset()
    }
}

function outcome() {
    document.getElementById("result").innerText = result
}

//------------------------------------------------------------

function myFunction() {
    setInterval(killUser, 1000);
}

function killUser() {
    if (uHealth > 0) {
        uHealth -= 1
    }
    update()
}

//------------------------------------------------------------


function reset() {
    opHealth = 100
    uHealth = 100
    hits = 0
    dollarsSpent *= 2
    myFunction()
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



reset()
update()



----------------------------------------------------*/
/*
function thisFunction(){
    var q = Math.random();
    if(usersChoice > q){
        uHealth += 18
    }
}

function dealDam(){
    var bat = Math.random();
    if(bat > .80){
        uHealth += 20;
    }else if(bat < .20){
        uHealth -= 30;
    }
}
var usersChoice = 


//---------------------NEW-GAME---------------\\
//----------------------Life------------------\\

/

var bank = 10
var spend = -1
var income = 1
var lottery = 1000
var purchase = ""


function spend(){
 bank -= spend
}

function invest(){
 bank += income
}

//----------------timing----------------
function reoccuringExp() {
    setInterval(addReoExp, 1000);
}

function addReoExp() {
    if (bank > 0) {
        bank -= 1
    }
}

//-------------------------------------END\\

function update(){
    if(bank = 0)

    checkReset()
    document.getElementById("opHealth").innerText = opHealth;
    document.getElementById("uHealth").innerText = uHealth
    document.getElementById("hits").innerText = hits
    document.getElementById("dollarsSpent").innerText = dollarsSpent
    
}

function checkReset() {
    if (bank < 0) {
        bank = 0;
        endGame()
    }
}



function endGame(){
}    
function addReoInc(){

}

var player = true
var computer = true
var playerWinCount = 0
var computerWinCount = 0

function kill(){
 if(!computer){
    playerWinCount += 1
}if(!player){
    computerWinCount += 1
}

function spin(){
    var deathNum = Math.random();
    if(deathNum <= .20)
    computer = false
    if(deathnum >= .80)
    player = false
    kill()
}

/*

*/ 