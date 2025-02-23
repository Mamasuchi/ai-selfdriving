const canvas=document.getElementById("myCanvas");
canvas.width=200;

const animation= canvas.getContext("2d");
const car= new Car(100,100,30,50);
car.draw(animation);

animate();

function animate(){
    car.update();
    canvas.height=window.innerHeight;
    car.draw(animation);
    requestAnimationFrame(animate);
}