using UnityEngine;
using System.Collections;

public class tesr : MonoBehaviour {
	public Texture2D texture = null;
	
	private void OnGUI()
	{
		
		
		if(GUI.Button(new Rect (130, 450, 100, 35), texture)){
			Application.LoadLevel("Level2");
		}
	}
	
	
}