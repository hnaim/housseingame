#pragma strict

var timer : float = 10.0;

function Update()
{
	timer -= Time.deltaTime;
	
	if(timer <=10){
	
	
	
	if(timer <=0){
	
	timer = 0;
	{
	Application.LoadLevel("Game Over Screen");
	}
	
	}
}
}
function OnGUI()
    {
    var min : int = timer / 60;
    var sec : int = timer % 60;
    if(sec >=10)
	GUI.Box(new Rect(500,170,100,20),min.ToString("0")+":"+sec.ToString("0"));
	else
	GUI.Box(new Rect(500,170,100,20),min.ToString("0")+" : 0"+sec.ToString("0"));
	
	}
