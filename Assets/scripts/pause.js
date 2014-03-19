#pragma strict

var skin : GUISkin;
private var gldepth = -0.5;
private var starttime =  0.1;
var nativeVerticalResolution = 1200.0;
var scaledResolutionWidth = nativeVerticalResolution / Screen.height * Screen.width;
var mat:Material;
private var tris = 0;
private var verts = 0;
private var savedTimeScale:float;
private var pauseFilter;
private var showfps:boolean;
private var showtris:boolean;
private var showvtx:boolean;
private var showfpagraph:boolean;
var lowFPSColor = Color.red;
var highFPSColor = Color.green;
var lawFPS = 30;
var highFPS = 50;
var url = "webplayer.html";
var statColor:Color = Color.yellow;
var GuiColor:Color = Color.white;

var credits:String[]=[

"Credits:",
"armedunity.com",
"bbb",
"aaa"];
var crediticons:Texture[];

enum Page { None,Main,Options,Credits }

var currentPage:Page;

private var fpsarray:int[];
private var fps:float;

function Start()
{
}



