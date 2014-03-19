#pragma strict


function Start() 
{
	if(PlayerPrefs.GetInt("NewLevel2Save") == 1)
	{
	GameObject.Find("LockLevel2").renderer.enabled = false;
	}
}
function OnMouseEnter()
{
 renderer.material.color = Color.red;
 }
 
 function OnMouseExit()
 {
   renderer.material.color = Color.white;
   }
   
function OnMouseDown()
   {
   if(PlayerPrefs.GetInt("NewLevel2Save") == 1)
   {
    Application.LoadLevel("Level2");
    }
  }