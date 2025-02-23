const canvas=document.getElementById("myCanvas");
canvas.height=window.innerHeight;
canvas.width=200;

const animation= canvas.getContext("2d");
const car= new Car(100,100,35,55);
car.draw(animation);