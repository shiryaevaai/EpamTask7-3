﻿function Func(el) {
    var list = el;
    var target = event.srcElement;
    var actionType = event.srcElement.className;

    if (actionType !== null) {
      
        if (actionType.indexOf('allToSelected') > -1) {
            AllToSelected(list);
        }
                
        if (actionType.indexOf('allToAvailable') > -1) {
            AllToAvailable(list);
        }

        if (actionType.indexOf('toSelected') > -1) {
            ToSelected(list);
        }
        
        if (actionType.indexOf('toAvailable') > -1) {
            ToAvailable(list);
        }
       
    }
}

function AllToSelected(list) {
    var avList = list.getElementsByClassName("available")[0],
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

function AllToAvailable(list) {
    var avList = list.getElementsByClassName("available")[0],
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

function ToSelected(list) {
    var avList = list.getElementsByClassName("available")[0],
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

function ToAvailable(list) {
    var avList = list.getElementsByClassName("available")[0],
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

//function Mark(elem) {
//    //var list = document.getElementById(listID),
//    //elements = list.getElementsByClassName(elemClass),
//    //elem;

//    if (elem.className == null) {
//        elem.className = "marked";
//    }
//    else
//        if (elem.className.indexOf("marked") === -1) {
//            elem.className += " marked";
//        }
//        else {
//            //element.classList = "";
//            elem.className = elem.className.replace(/(?:^|\s)marked(?!\S)/, '');
//        }
    
//}




