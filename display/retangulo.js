/**
* Cria um retângulo, se o parametro radius for nulo irá criar um retangulo, caso seja passado um valor será criado um retangulo arredondado.
* rectFill - Object preenchimento.
* rectFill (color, width, height, radius).
*/
function newRetangulo(stroke, color, x, y, w, h, r, fillColor){
    var graphic = new createjs.Graphics();
    graphic.setStrokeStyle(stroke);
    graphic.beginStroke(color);
    if(r != null){
        graphic.drawRoundRect(x, y, w, h, r);
        if(fillColor != null)
            graphic.beginFill(fillColor).drawRoundRect(x, y, w, h, r);
    }else{
        graphic.drawRect(x, y, w, h);
        if(fillColor != null)
            graphic.beginFill(fillColor).drawRect(x, y, w, h);
    }
    return graphic;
}