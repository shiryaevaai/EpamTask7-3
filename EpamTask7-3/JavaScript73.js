//var Available1 = new Array("elem1", "elem2", "elem3", "elem4");
//var List2 = new Array("1", "2", "3", "4", "5", "6");
//var List3 = new Array("Math", "History", "IT", "Music");
//var List4 = new Array("elem1");

//var Selected1 = new Array();

function AvailableElements(availableID) {
    
    var availableStr = "";
    for (var i = 0; i < availableID.length;i++)
    {
        availableStr += availableID [i]+ "\n";

    }
    return availableStr;
}

function AllToSelected(availableID, selectedID) {
    var avList = document.getElementById(availableID);
    var selList = document.getElementById(selectedID);
    var children = avList.children;

    for (var i = 0; i < children.length; i++) {
        var option = document.createElement('li');
        option.innerHTML = children[i].innerHTML;
        option.id = children[i].innerHTML;
        option.onclick = children[i].onclick;
        selList.appendChild(option);
    }

    avList.innerHTML = "";
}

function AllToAvailable(availableID, selectedID) {
    var avList = document.getElementById(availableID);    
    var selList = document.getElementById(selectedID);
    var children = selList.children;

    for (var i = 0; i < children.length; i++) {
        var option = document.createElement('li');
        option.innerHTML = children[i].innerHTML;
        option.id = children[i].innerHTML;
        option.onclick = children[i].onclick;
        avList.appendChild(option);
    }
    selList.innerHTML = "";
}

function ToSelected( availableID, selectedID) {

        var avList = document.getElementById(availableID);  //if !exists
        var selList = document.getElementById(selectedID);
        var marked = false;
        var children = avList.children;

        for (var i = 0; i < children.length; i++) {

            if (children[i].className.indexOf("marked") > -1) {
                children[i].className = children[i].className.replace(/(?:^|\s)marked(?!\S)/, '');
                selList.appendChild(children[i]);
             //   avList.removeChild(children[i]); ???
                marked = true;
                i--;
            }
        }

        if (!marked) {
            alert("Ничего не выделено");
        }
}

function ToAvailable(availableID, selectedID) {

    var avList = document.getElementById(availableID);
    var selList = document.getElementById(selectedID);
    var marked = false;
    var children = selList.children;

    for (var i = 0; i < children.length; i++) {

        if (children[i].className.indexOf("marked") > -1) {
            children[i].className = children[i].className.replace(/(?:^|\s)marked(?!\S)/, '');
            avList.appendChild(children[i]);
            //   avList.removeChild(children[i]);
            marked = true;
            i--;
        }
    }

    if (!marked) {
        alert("Ничего не выделено");
    }
}

function Mark(elem) {
    var element = document.getElementById(elem);
    
    if (element.className == null) {
        element.className = "marked";
    }
    else if (element.className.indexOf("marked")==-1) {
        element.className += " marked";
    }
    else {
        element.classList = "";
        element.className = element.className.replace(/(?:^|\s)marked(?!\S)/, '');
    }
}




