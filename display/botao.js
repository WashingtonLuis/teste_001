/**
* Cria um botão
*/
function newButton(textProp, rectProp){
    var _container = container("btn", {x:rectProp.x, y:rectProp.y, w:rectProp.w, h:rectProp.h}, true);
    var _shape = new createjs.Shape(newRetangulo(rectProp.stroke, rectProp.strokeColor, (-rectProp.w * 0.5), 0, rectProp.w, rectProp.h, rectProp.r, rectProp.fillColor));
    var _label = newLabel(textProp.str, textProp.font, textProp.color, textProp.textAlign, rectProp.w, false, 0, 0);
    _container.addChild(_shape, _label);
    
    //=============================================
    
    _container.addEventListener("click", handleClick);
    //_container.addEventListener("mousedown", handlePress);
    
    //=============================================
    
    return _container;
}

function handleClick(event){
    // Click happenened
    
    window.confirm("Clicou!!!");
    
    console.log("clicou!", event.currentTarget);
}


function handlePress(event) {
    // A mouse press happened.
    // Listen for mouse move while the mouse is down:
    
    //console.log("Mouse Down");
    
    event.addEventListener("mousemove", handleMove);
}

function handleMove(event) {
    
    //console.log("move", event.currentTarget.currentTarget.name);
    //console.log("move", event.currentTarget.stageX);
    
    // Check out the DragAndDrop example in GitHub for more
}