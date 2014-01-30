/**
* Busca a imagem pelo id, centraliza o ponto de registro, atribui  o nome, o tamanho e posiciona x e y
*/
function getBitmapById(str, x, y, centralize){
    var img = new createjs.Bitmap(queue.getResult(str));
    img.width = queue.getResult(str).width;
    img.height = queue.getResult(str).height;
    if(centralize){
        img.regX = img.width * 0.5;
        img.regY = img.height * 0.5;
    }
    img.name = str;
    img.x = x;
    img.y = y;
    return img;
}