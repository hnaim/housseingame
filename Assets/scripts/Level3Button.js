#pragma strict


function Start() 
{
	if(PlayerPrefs.GetInt("NewLevel3Save") == 1)
	{
	GameObject.Find("LockLevel3").renderer.enabled = false;
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
   if(PlayerPrefs.GetInt("NewLevel3Save") == 1)
   {
    Application.LoadLevel("Level3");
    }
  }