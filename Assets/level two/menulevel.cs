using UnityEngine;
using System.Collections;

public class menulevel : MonoBehaviour {

	public Texture2D texture = null;
	
	private void OnGUI()
	{
		
		
		if(GUI.Button(new Rect (100, 240, 150, 35), texture)){
			Application.LoadLevel("levels");
		}
	}
	
	
}