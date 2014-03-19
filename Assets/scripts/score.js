 
var score1 : GUIText;
 
var myScore : int = 0;
var myCurScore : int = 500;
 
function Update () {
 
 
score1.text = "Score: " + myScore;
 
 
if(myScore < myCurScore) {
 
myScore += 10;
 
 
}
 
 

if(Input.GetKeyDown("b")) {
 
 
myCurScore += 100;
 
 
 
}
 
 
 
 
 
}