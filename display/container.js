function container(name, bounds, centralize){
    var conteiner = new createjs.Container();
    conteiner.name = name;
    conteiner.x = bounds.x;
    conteiner.y = bounds.y;
    conteiner.width = bounds.width;
    conteiner.height = bounds.height;
    if(centralize){
        conteiner.regX = bounds.width * 0.5;
        conteiner.regY = bounds.height * 0.5;
    }
    
    return conteiner;
}