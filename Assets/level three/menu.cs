using UnityEngine;
using System.Collections;

public class menu : MonoBehaviour {

	public Texture2D texture = null;

	private void OnGUI()
	{


		if(GUI.Button(new Rect (125, 210, 150, 35), texture))
			Application.LoadLevel("Menu");

	}


}