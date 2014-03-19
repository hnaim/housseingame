using UnityEngine;
using System.Collections;

public class mutelevel1 : MonoBehaviour {

	
	private bool muteToggle = false;
	
	
	void Start (){
		AudioListener.volume = 1.0f;
		
	}
	
	void OnGUI()
		
	{
		muteToggle = GUI.Toggle (new Rect(80, 144, 100, 50), muteToggle, "       mute");
		
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
