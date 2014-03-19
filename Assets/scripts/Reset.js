#pragma strict

function Start ()
{
   Reset();
}

function Reset() 
{
   PlayerPrefs.SetInt("NewLevel2Save", 0);
   PlayerPrefs.SetInt("NewLevel3Save", 0);
}