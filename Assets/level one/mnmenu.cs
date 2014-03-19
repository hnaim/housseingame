using UnityEngine;
using System.Collections;

public class mnmenu : MonoBehaviour {
	
	public Texture2D texture = null;
	
	private void OnGUI()
	{
		
		
		if(GUI.Button(new Rect (100, 210, 150, 35), texture))
			Application.LoadLevel("Menu");
		
	}
	
	
}