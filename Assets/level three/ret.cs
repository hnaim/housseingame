using UnityEngine;
using System.Collections;

public class ret : MonoBehaviour {
	
	public Texture2D texture = null;
	
	private void OnGUI()
	{
		
		
		if(GUI.Button(new Rect (149, 500, 100, 35), texture)){
			Application.LoadLevel("Level3");
		}
	}
	
	
}