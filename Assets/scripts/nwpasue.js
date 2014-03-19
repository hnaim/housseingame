#pragma strict



var paused : boolean = false;
var pausedGUI : GUITexture;




function Update () {
if(Input.GetButtonDown("Pause")){
if(!paused){
Time.timeScale=0;
paused=true;
audio.mute=true;

}
else{
Time.timeScale=1;
paused=false;
audio.mute=false;
pausedGUI.enabled = false;
}
}

}






function OnGUI () {

 
if (paused){
if(GUI.Button(Rect(460,340,60,30),"Resume")){



paused=false;
pausedGUI.enabled = false;
audio.mute=false;
Time.timeScale = 1.0;
}




}
}