"use strict";

class Car {
    constructor(name,speed){
        this.name = name;
        this.speed = speed;
    }
    accelerate = function(){
        this.speed +=10;
    }
    brake = function(){
        this.speed -=5;
    }
    
}