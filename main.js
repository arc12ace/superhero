var canvas= new fabric.Canvas("myCanvas");
block_width=30;
block_height=30;
player_x=10;
player_y=10;
var player_objects=" "
var block_object=" "

function player_update(){
    fabric.Imager.fromURL("player.png", function(Img){
        player_objects=Img;
        player_objects.scaleToWidth(100);
        player_objects.scaleToHeight(150);
        player_objects.set({
            top:player_y,
            left:player_x,
        });
        canvas.add(player_objects);
    })
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x,
        });
        canvas.add(block_object);
    })
}