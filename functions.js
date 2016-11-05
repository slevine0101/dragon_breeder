// Initializing Function
function showGame(debug){
	document.getElementById('loader').style.display='none';
	document.getElementById('game').style.display='inline-block';

	/*if(debug){
		document.getElementById('debug_menu').style.display = 'block';
	}*/
}

function updateValue(value_to_update){
	var value = 0;

	switch(value_to_update){
		case "gold":
			value = resources.gold;
			break;
		case "sticks":
			value = resources.sticks;
			break;
		case "wood":
			value = resources.wood;
			break;
		case "woodenAxes":
			value = tools.axes.wood;
			break;	
	}
	document.getElementById(value_to_update).innerHTML = value;
}

function forage(){
	var stickProb = getRandomInt(1,9);
	var berryProb = getRandomInt(1,100);
	var truffleProb = getRandomInt(1,1000);

	if(berryProb == 50){
		var berryNumProb = getRandomInt(1,3);
		switch(berryNumProb){
			case 3:
				goods.berries += 2;
				break;
			default:
				goods.berries++;
				break;
		}
		berries.innerHTML = goods.berries;
	}

	if(truffleProb == 500){
		goods.truffles++;
		truffles.innerHTML = goods.truffles;
	}

	switch(stickProbability){
		case 7: //fallthrough
		case 8:
			resources.sticks += 2;
			break;
		case 9:
			resources.sticks += 3;
			break;
		default:
			resources.sticks++;
	}


}

function collectSticks(){
	var sticksCollected = getRandomInt(1,3);
	resources.sticks += sticksCollected;
	updateValue("sticks");
	topBar.innerHTML = topBar.innerHTML + '<br/>You gained <b>' + sticksCollected + '</b> Sticks';
	topBar.scrollTop = topBar.scrollHeight;
}

function convertSticks(){
	if(resources.sticks >= sticksToWood){
		resources.sticks -= sticksToWood;
		resources.wood++;

		updateValue("sticks");
		updateValue("wood");
	}
}

function getRandomInt(min,max){
	return Math.floor(Math.random() * (max-min+1)) + min;
}

function buildAxe(type){
	switch(type){
		case "wood":
			if(resources.sticks >= sticksToAxe &&  resources.wood >= woodToAxe){
				resources.sticks -= sticksToAxe;
				resources.wood -= woodToAxe;
				tools.axes.wood++;

				updateValue("sticks");
				updateValue("wood");
				updateValue("woodenAxes"); 
			}
	}
}

function sellAxe(type){
	switch(type){
		case "wood":
			if(tools.axes.wood > 0){
				tools.axes.wood--;
				resources.gold++;

				updateValue("woodenAxes");
				updateValue("gold");
			}
	}
}