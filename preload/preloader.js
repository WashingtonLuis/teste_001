var conteiner;
var graphic;
var label;

function loadBg(){
    if(confirm(window.innerWidth +" "+ window.innerHeight +" "+ canvas.width +" "+ canvas.height)){
        var _loader = new createjs.LoadQueue();
        _loader.loadFile({id:"bg", src:"assets/images/bg.png", type:createjs.LoadQueue.IMAGE});
        _loader.addEventListener("complete", loadAssets);
    }
}

function loadAssets(e){
    
    //stage.addChild(img);
    
    queue = new createjs.LoadQueue();
    queue.addEventListener("progress", handleProgress);
    queue.addEventListener("fileload", handleFileload);
    queue.addEventListener("complete", handleComplete);
    
    graphic = newRetangulo(0.5,"#cccccc", 0, 0, 400, 20);
    var shape = new createjs.Shape(graphic);
    conteiner = container("preLoader", {x:400, y:300, width:400, height:50}, true);
    label = newLabel("Carregando aplicativo: 0%", "bold 14px Arial", "#0077ff", "center", 400, true, conteiner.x, 25);
    
    var linhas = Math.round(canvas.width / e.target.getResult("bg").width);
    var colunas = Math.round(canvas.height / e.target.getResult("bg").height);
    
    if(linhas > colunas)
        colunas = linhas;
    else
        linhas = colunas;
    
    console.log(linhas, colunas, e.target.getResult("bg").width, e.target.getResult("bg").height);
    
    for(var i= 0; i < (linhas * colunas); i++){
        
        var img = new createjs.Bitmap(e.target.getResult("bg"));
        img.x = -400 + ((e.target.getResult("bg").width) * (i % linhas));
        img.y = -300 + ((e.target.getResult("bg").height) * (Math.floor(i / linhas)));
        conteiner.addChild(img);
    }
    
    conteiner.addChild(shape, label);
    stage.addChild(conteiner);
    queue.loadManifest(manifest);
}

function handleProgress(e){
    graphic.clear();
    graphic.beginStroke("#cccccc").setStrokeStyle(0.5).drawRect(0, 0, 400, 20);
    graphic.beginFill("#0077ff").drawRect(0,0, Math.round(e.progress * 400), 20);
    label.text = "Carregando aplicativo: " + Math.round(e.progress * 100) + "%"
}

function handleFileload (e){
    
}

function handleComplete (e){
    
    if(confirm("Continuar")){
        stage.removeChild(conteiner);
        inicializa();
    }
}