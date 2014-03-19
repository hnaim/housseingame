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




var Tile1WinPos =Vector3(-1.0,0.0,-3.0);
var Tile2WinPos =Vector3(0.0,0.0,-3.0);
var Tile3WinPos =Vector3(1.0,1.0,-3.0);
var Tile4WinPos =Vector3(0.0,1.0,-3.0);
var Tile5WinPos =Vector3(-1.0,1.0,-3.0);
var Tile6WinPos =Vector3(-1.0,2.0,-3.0);
var Tile7WinPos =Vector3(0.0,2.0,-3.0);
var Tile8WinPos =Vector3(1.0,2.0,-3.0);


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




if( Tile1CurPos == Tile1WinPos && Tile2CurPos == Tile2WinPos )
{
if( Tile3CurPos == Tile3WinPos && Tile4CurPos == Tile4WinPos )
{ 
if( Tile5CurPos == Tile5WinPos && Tile6CurPos == Tile6WinPos )
{
if( Tile7CurPos == Tile7WinPos && Tile8CurPos == Tile8WinPos )

{
Application.LoadLevel("levels");
}
}
}
}
}

