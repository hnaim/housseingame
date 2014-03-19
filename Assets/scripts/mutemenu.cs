using UnityEngine;
using System.Collections;

public class mutemenu : MonoBehaviour {
	
	// Use this for initialization
	
	
	
	
	private bool muteToggle = false;
	
	
	void Start (){
		AudioListener.volume = 1.0f;
		
	}
	
	void OnGUI()
		
{     
		muteToggle = GUI.Toggle (new Rect(470, 406, 100, 50), muteToggle, "\n  Mute");


	
		if(muteToggle == false)
		{
			AudioListener.volume = 0.1f;
		}
		else if(muteToggle == true)
		{
			AudioListener.volume = 0;
		}
	}
	
	
}
