using UnityEngine;
using System.Collections;

public class levemen : MonoBehaviour {
	
	public Texture2D texture = null;
	
	private void OnGUI()
	{
		
		
		if(GUI.Button(new Rect (100, 260, 150, 35), texture)){
			Application.LoadLevel("levels");
		}
	}
	
	
}