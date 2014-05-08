
function AllToSelected(listID) {
    var list = document.getElementById(listID),
     avList = list.getElementsByClassName("available")[0],
     selList = list.getElementsByClassName("selected")[0],    
     children = avList.children,
     i,
     option;

    for (i = 0; i < children.length; i++) {
        option = document.createElement('li');
        option.innerHTML = children[i].innerHTML;
        option.onclick = children[i].onclick;
        option.className = children[i].className;
        option.id = children[i].id;
            
        selList.appendChild(option); 
    }

        avList.innerHTML = "";    
}

function AllToAvailable(listID) {
    var list = document.getElementById(listID),
     avList = list.getElementsByClassName("available")[0],
     selList = list.getElementsByClassName("selected")[0],
   
     children = selList.children,
     i,
     option;

    for (i = 0; i < children.length; i++) {
        option = document.createElement('li');
        option.innerHTML = children[i].innerHTML;
        option.onclick = children[i].onclick;
        option.className = children[i].className;
        option.id = children[i].id;
            
        avList.appendChild(option);
    }

    selList.innerHTML = "";    
}

function ToSelected(listID) {
    var list = document.getElementById(listID),
     avList = list.getElementsByClassName("available")[0],
     selList = list.getElementsByClassName("selected")[0],

     marked = false,

    children = avList.children;

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

function ToAvailable(listID) {
    var list = document.getElementById(listID),
     avList = list.getElementsByClassName("available")[0],
     selList = list.getElementsByClassName("selected")[0],

     marked = false,
     children = selList.children,
     i;

    for (i = 0; i < children.length; i++) {

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

function Mark(listID, elemClass) {
    var list = document.getElementById(listID),
    elements = list.getElementsByClassName(elemClass),
    elem;

    for (var elem = 0; elem < elements.length; elem++) {
        if (elements[elem].className.indexOf("marked") === -1) {
            elements[elem].className += " marked";
        }
        else {
            //element.classList = "";
            elements[elem].className = elements[elem].className.replace(/(?:^|\s)marked(?!\S)/, '');
        }
    }
}




