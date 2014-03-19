using UnityEngine;
using System.Collections;

public class levlmenu : MonoBehaviour {
	
	public Texture2D texture = null;
	
	private void OnGUI()
	{
		
		
		if(GUI.Button(new Rect (125, 260, 150, 35), texture)){
			Application.LoadLevel("levels");
		}
	}
	
	
}