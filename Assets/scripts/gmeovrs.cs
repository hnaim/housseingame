using UnityEngine;
using System.Collections;

public class gmeovrs : MonoBehaviour {
	
	public Texture2D texture = null;
	
	private void OnGUI()
	{
		
		
		if(GUI.Button(new Rect (600, 500, 150, 35), texture))
			Application.LoadLevel("Menu");
		
	}
	
	
}