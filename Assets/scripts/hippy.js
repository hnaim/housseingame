var paused : boolean = false;
var pausedGUI : GUITexture;

pausedGUI.enabled = false;

function Update (){

if(Input.GetKeyUp('p')){
if(paused == true){
paused = false;

}else{
paused =true;

}

if(paused == true){
 Time.timeScale = 0.0;
 
 pausedGUI.enabled = true;
}else{
Time.timeScale = 1.0;


pausedGUI.enabled = false;
}}}