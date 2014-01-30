/**
* Cria um Label
*/
function newLabel(str, font, color, textAlign, w, centralize, x, y){
    var label = new createjs.Text(str, font, color);
    label.textAlign = textAlign;
    label.width = w;
    if(centralize)
        label.regX = w * 0.5;
    label.x = x;
    label.y = y;
    return label;
}