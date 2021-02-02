canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

car_x=10;
car_y=100;
car_width=100;
car_height=90;

car2_x=10;
car2_y=10;
car2_width=100;
car2_height=90;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackround;
    background_imgTag.src = "racing.jpg";

    car_imgTag = new Image();
    car_imgTag.onload = uploadcar;
    car_imgTag.src = "car1.png";

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = "car2.png";
}

function uploadBackround() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar() {
    ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '38') {
            up();
            console.log("up")
        }
        if(keyPressed == '40') {
            down();
            console.log("down")
        }
        if(keyPressed == '37') {
            left();
            console.log("left")
        }
        if(keyPressed == '39') {
            right();
            console.log("right")
        }
        if(keyPressed == '87') {
            w();
            console.log("up")
        }
        if(keyPressed == '83') {
            s();
            console.log("down")
        }
        if(keyPressed == '65') {
            a();
            console.log("left")
        }
        if(keyPressed == '68') {
            d();
            console.log("right")
        }
        
if(car_x > 700){
    console.log("Car 1 Won");
    document.getElementById("game_status").innerHTML = "Car 1 Won!!!";
}

if(car2_x > 700){
    console.log("Car 2 Won");
    document.getElementById("game_status").innerHTML = "Car 2 Won!!!";
}

}

function up() {
    if(car_y >=0) {
        car_y -= 10;
         console.log("When up arrow is pressed = " + car_x + "-" +car_y);
         uploadBackround();
         uploadcar();
         uploadcar2();
    }
}

function down() {
    if(car_y <=500) {
        car_y += 10;
         console.log("When up down is pressed, x = " + car_x + "| y" +car_y);
         uploadBackround();
         uploadcar();
         uploadcar2();
    }
}

function left() {
    if(car_x >=0) {
        car_x -= 10;
         console.log("When up left is pressed, x = " + car_x + "| y" +car_y);
         uploadBackround();
         uploadcar();
         uploadcar2();
    }
}

function right() {
    if(car_x <=700) {
        car_x += 10;
         console.log("When up right is pressed, x = " + car_x + "| y" +car_y);
         uploadBackround();
         uploadcar();
         uploadcar2();
    }
}

function w() {
    if(car2_y >=0) {
        car2_y -= 10;
         console.log("When up arrow is pressed = " + car2_x + "-" +car2_y);
         uploadBackround();
         uploadcar2();
         uploadcar();
    }
}

function s() {
    if(car2_y <=500) {
        car2_y += 10;
         console.log("When up down is pressed, x = " + car2_x + "| y" +car2_y);
         uploadBackround();
         uploadcar2();
         uploadcar();
    }
}

function a() {
    if(car2_x >=0) {
        car2_x -= 10;
         console.log("When up left is pressed, x = " + car2_x + "| y" +car2_y);
         uploadBackround();
         uploadcar2();
         uploadcar();
    }
}

function d() {
    if(car2_x <=700) {
        car2_x += 10;
         console.log("When up right is pressed, x = " + car2_x + "| y" +car2_y);
         uploadBackround();
         uploadcar2();
         uploadcar();
    }
}
