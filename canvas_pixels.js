var canvas, context, g_scale, pixels;

function init(e, scale){
    canvas = e;
    context = canvas.getContext("2d");
    g_scale = scale;

    pixels = [];

    // initialize the pixels
    for (var i=0; i<(e.height)/scale; i++){
        pixels[i] = [];
        for (var j=0; j<(e.width)/scale; j++){
            pixels[i][j] = new Pixel(i*scale, j*scale);
        }
    }
    pixels[3][4].setColor("blue");
    drawAll(pixels);
}

function drawAll(pixels, scale){
    for (var i=0; i<pixels.length; i++){
        for (var j=0; j<pixels[i].length; j++){
            pixels[i][j].draw();
        }
    }
}

function Pixel(x, y){
    this.x = x;
    this.y = y;

    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 255;

    this.draw = function(){
        
        context.fillStyle = "rgba("+this.r+","+this.g+","+this.b+","+(this.a/255)+")";
        context.fillRect(x, y, g_scale, g_scale);
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

