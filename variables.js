//Conversion variables
sticksToWood = 10;
sticksToAxe = 4;
woodToAxe = 8;


//Resource Object
var resources = new Object();
resources.gold = 0;
resources.sticks = 0;
resources.wood = 0;

//Tools Object
var tools = new Object();
tools.axes = new Object();
tools.axes.wood = 0;

var goods = new Object();
goods.berries = 0;
goods.truffles = 0;

var topBar = document.getElementById('topBar');
var berries = document.getElementById('berries');
var truffles = document.getElementById('truffles');