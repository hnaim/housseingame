using UnityEngine;
using System.Collections;

public class paused : MonoBehaviour {
	
	public bool isPaused = false;
	public string currentMenu;
	
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
	
		if(Input.GetKeyDown(KeyCode.Escape) && isPaused == false) {
			currentMenu = "Main";
			isPaused = true;

		}
		else if(Input.GetKeyDown(KeyCode.Escape) && isPaused == true) {
			currentMenu = null;
			isPaused = false;

		}
	}
	
	void OnGUI() {
		if(currentMenu == "Main")
			Menu_Main();
		if(currentMenu == "Opt")
			Menu_Opt();
	}
	
	public void NavigateTo(string nextmenu) {
		currentMenu = nextmenu;
	}
	
	public void Menu_Main() {
		GUI.Label(new Rect(10, 10, 200, 50), "Paused");
		if(GUI.Button(new Rect(10, 70, 200, 50), "Options")) {
			NavigateTo("Opt");
		}
	}
	
	public void Menu_Opt() {
		GUI.Label(new Rect(10, 10, 200, 50), "Options");
		if(GUI.Button(new Rect(10, 70, 200, 50), "Back")) {
			NavigateTo("Main");
		}	
	}
}