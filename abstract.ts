abstract class Animal{
    abstract animalSound():void;
}

class Dog extends Animal{
    animalSound(): void {
        console.log("Dog is Barking");
        
    }

}

const dog=new Dog();
dog.animalSound();