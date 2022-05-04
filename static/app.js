function poll() {
    window.fetch("/poll").then(response => response.json()).then(updateBoard);
    
    setTimeout(poll, 1000);
}

function cellClicked() {
    let currentId = event.currentTarget.id;
    let currentUser = getCurrentUser();

    let url = "/click?user="+currentUser+"&field="+currentId;
    
    // submits the click, then updates the playing field
    window.fetch(url).then(response => response.json()).then(updateBoard);
};

function reset() {
    // sends reset to Backend, then updates the field with the empty result
    window.fetch("/reset").then(response => response.json()).then(updateBoard);
}

// returns the current user
function getCurrentUser() {
    let select = document.getElementById("player");
    return select.options[select.selectedIndex].value;
}

// updates the style classes on the game-board
function updateBoard(response) {
    console.log(response);
    let cellNames = Object.getOwnPropertyNames(response);
    for(currCellName of cellNames) {
        currCellElement = document.getElementById(currCellName);
        currCellElement.className = "cell " + response[currCellName];
    }
    if(cellNames.length == 0) {
        resetBoard();
    }
}

// deletes all signs from the game-board
function resetBoard() {
    let cells = document.getElementsByClassName("cell");
    for(currCell of cells) {
        currCell.className = "cell";
    }
}

