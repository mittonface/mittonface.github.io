var canvas, context, id, d, pixels;

function init(e, scale){
    canvas = e;
    context = canvas.getContext("2d");
    id = context.createImageData(scale, scale);
    d = id.data;

    pixels = [];

    // initialize the pixels
    for (var i=0; i<(e.height)/scale; i++){
        pixels[i] = [];
        for (var j=0; j<(e.width)/scale; j++){
            pixels[i][j] = new Pixel(i, j, j*scale, i*scale);
        }
    }
    drawAll(pixels, scale);
}

function drawAll(pixels, scale){
    for (var i=0; i<pixels.length; i++){
        for (var j=0; j<pixels[i].length; j++){
            pixels[i][j].draw();
        }
    }
}

function Pixel(i, j, x, y){
    this.i = i;
    this.j = j;
    this.x = x;
    this.y = y;

    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 255;

    this.draw = function(){
        
        // using imagedata, so I need to specify the color of each pixel
        // right now, all pixels in image data are going to be the same
        // color
        for (var i=0; i<d.length; i+=4){
            d[i+0] = this.r;
            d[i+1] = this.g;
            d[i+2] = this.b;
            d[i+3] = this.a;
        }

        context.putImageData(id, this.x, this.y);
    }
    
    this.setColor = function(color){

        // for right now some predefined colors are good. I want to make
        // this translate hex a bit further down the road

        if (color == "blue"){
            this.r = this.g = 0;
            this.b = 255;
        }
        if (color == "red"){
            this.b = this.g = 0;
            this.r = 255;
        }
        if (color == "green"){
            this.r = this.b = 0;
            this.g = 255;
        }
        if (color == "black"){
            this.r = this.b = this.g = 0;
        }
        if (color == "white"){
            this.r = this.b = this.g = 255;
        }
    }
}

