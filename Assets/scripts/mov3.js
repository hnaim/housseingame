var slot : Transform;
var xtemp;
var ytemp;


private var GetTile1Pos : GameObject;
private var GetTile2Pos : GameObject;
private var GetTile3Pos : GameObject;
private var GetTile4Pos : GameObject;
private var GetTile5Pos : GameObject;
private var GetTile6Pos : GameObject;
private var GetTile7Pos : GameObject;
private var GetTile8Pos : GameObject;
private var GetTile9Pos : GameObject;
private var GetTile10Pos : GameObject;
private var GetTile11Pos : GameObject;
private var GetTile12Pos : GameObject;
private var GetTile13Pos : GameObject;
private var GetTile14Pos : GameObject;
private var GetTile15Pos : GameObject;
private var GetTile16Pos : GameObject;
private var GetTile17Pos : GameObject;
private var GetTile18Pos : GameObject;
private var GetTile19Pos : GameObject;




var Tile1WinPos =Vector3(-3.0,3.0,0.0);
var Tile2WinPos =Vector3(-2.0,3.0,0.0);
var Tile3WinPos =Vector3(-1.0,3.0,0.0);
var Tile4WinPos =Vector3(0.0,3.0,0.0);
var Tile5WinPos =Vector3(1.0,3.0,0.0);
var Tile6WinPos =Vector3(-3.0,2.0,0.0);
var Tile7WinPos =Vector3(-2.0,2.0,0.0);
var Tile8WinPos =Vector3(-1.0,2.0,0.0);
var Tile9WinPos =Vector3(0.0,2.0,0.0);
var Tile10WinPos =Vector3(1.0,2.0,0.0);
var Tile11WinPos =Vector3(-3.0,1.0,0.0);
var Tile12WinPos =Vector3(-2.0,1.0,0.0);
var Tile13WinPos =Vector3(-1.0,1.0,0.0);
var Tile14WinPos =Vector3(0.0,1.0,0.0);
var Tile15WinPos =Vector3(1.0,1.0,0.0);
var Tile16WinPos =Vector3(-3.0,0.0,0.0);
var Tile17WinPos =Vector3(-2.0,0.0,0.0);
var Tile18WinPos =Vector3(-1.0,0.0,0.0);
var Tile19WinPos =Vector3(0.0,0.0,0.0);


function Start()
{

GetTile1Pos = GameObject.Find("Tile1");
GetTile2Pos = GameObject.Find("Tile2");
GetTile3Pos = GameObject.Find("Tile3");
GetTile4Pos = GameObject.Find("Tile4");
GetTile5Pos = GameObject.Find("Tile5");
GetTile6Pos = GameObject.Find("Tile6");
GetTile7Pos = GameObject.Find("Tile7");
GetTile8Pos = GameObject.Find("Tile8");
GetTile9Pos = GameObject.Find("Tile9");
GetTile10Pos = GameObject.Find("Tile10");
GetTile11Pos = GameObject.Find("Tile11");
GetTile12Pos = GameObject.Find("Tile12");
GetTile13Pos = GameObject.Find("Tile13");
GetTile14Pos = GameObject.Find("Tile14");
GetTile15Pos = GameObject.Find("Tile15");
GetTile16Pos = GameObject.Find("Tile16");
GetTile17Pos = GameObject.Find("Tile17");
GetTile18Pos = GameObject.Find("Tile18");
GetTile19Pos = GameObject.Find("Tile19");

} 

function OnMouseUp()
{

if(Vector3.Distance(transform.position,slot.position)==1)
{
xtemp = transform.position.x;
ytemp = transform.position.y;
transform.position.x=slot.position.x;
transform.position.y=slot.position.y;
slot.position.x=xtemp;
slot.position.y=ytemp;

}

}

function Update()
{ 
var Tile1CurPos = GetTile1Pos.GetComponent(Transform).transform.position;
var Tile2CurPos = GetTile2Pos.GetComponent(Transform).transform.position;
var Tile3CurPos = GetTile3Pos.GetComponent(Transform).transform.position;
var Tile4CurPos = GetTile4Pos.GetComponent(Transform).transform.position;
var Tile5CurPos = GetTile5Pos.GetComponent(Transform).transform.position;
var Tile6CurPos = GetTile6Pos.GetComponent(Transform).transform.position;
var Tile7CurPos = GetTile7Pos.GetComponent(Transform).transform.position;
var Tile8CurPos = GetTile8Pos.GetComponent(Transform).transform.position;
var Tile9CurPos = GetTile9Pos.GetComponent(Transform).transform.position;
var Tile10CurPos = GetTile10Pos.GetComponent(Transform).transform.position;
var Tile11CurPos = GetTile11Pos.GetComponent(Transform).transform.position;
var Tile12CurPos = GetTile12Pos.GetComponent(Transform).transform.position;
var Tile13CurPos = GetTile13Pos.GetComponent(Transform).transform.position;
var Tile14CurPos = GetTile14Pos.GetComponent(Transform).transform.position;
var Tile15CurPos = GetTile15Pos.GetComponent(Transform).transform.position;
var Tile16CurPos = GetTile16Pos.GetComponent(Transform).transform.position;
var Tile17CurPos = GetTile17Pos.GetComponent(Transform).transform.position;
var Tile18CurPos = GetTile18Pos.GetComponent(Transform).transform.position;
var Tile19CurPos = GetTile19Pos.GetComponent(Transform).transform.position;



if( Tile1CurPos == Tile1WinPos && Tile2CurPos == Tile2WinPos )
{
if( Tile3CurPos == Tile3WinPos && Tile4CurPos == Tile4WinPos )
{ 
if( Tile5CurPos == Tile5WinPos && Tile6CurPos == Tile6WinPos )
{
if( Tile7CurPos == Tile7WinPos && Tile8CurPos == Tile8WinPos )
{
if( Tile9CurPos == Tile9WinPos && Tile10CurPos == Tile10WinPos )
{
if( Tile11CurPos == Tile11WinPos && Tile12CurPos == Tile12WinPos )
{
if( Tile13CurPos == Tile13WinPos && Tile14CurPos == Tile14WinPos )
{
if( Tile15CurPos == Tile15WinPos && Tile16CurPos == Tile16WinPos )
{
if( Tile17CurPos == Tile17WinPos && Tile18CurPos == Tile18WinPos )
{
if( Tile19CurPos == Tile19WinPos )
{
Application.LoadLevel("win");
}
}
}
}
}
}
}
}
}}}