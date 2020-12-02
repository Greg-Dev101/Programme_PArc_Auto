
class Car {
    constructor(immat, color, weight, power, tankcapacity, fuelQuantity, seats, assurance, bordMessage){
    this.immat = immat;
    this.color = color;
    this.weight = weight;
    this.power = power;
    this.tankcapacity = tankcapacity;
    this.fuelQuantity = fuelQuantity;
    this.seats = seats
    this.assurance = false;
    this.bordMessage = "Bienvenue";
    }
    
    repeindre(newColor) {
        if (newColor === this.color) {
        console.log('Couleur identique');
        } 
        else {
        this.color = newColor;
        console.log('La nouvelle couleur est : ' + this.color);
        }
    }

    mettreEssence(newFuelQuantity) {
        if ((newFuelQuantity+this.fuelQuantity) <= this.tankcapacity) {
            console.log("Appoint d'essence effectué, vous disposez désormais de " + (newFuelQuantity+this.fuelQuantity) + " litres d'essence." )
            this.fuelQuantity = (newFuelQuantity+this.fuelQuantity)
        }
        else {
            console.log("Appoint impossible, veuillez recommencer")
        }
    }
    
    sedeplacer(distance, speed) {
        
        if ((speed<=50)) {
        let consumption=distance*0.1
            if ((consumption>=this.fuelQuantity)) {
                console.log ("Trajet impossible")
            }
            else {
                console.log("Vous avez consommé " + consumption + " litres. Il vous reste " + (this.fuelQuantity-consumption) + " litres.")
            }
        }
              
        if ((speed>50) && (speed<=90)) {
        let consumption=distance*0.05
            if ((consumption>=this.fuelQuantity)) {
                console.log ("Trajet impossible")
            }
            else {
                console.log("Vous avez consommé " + consumption + " litres. Il vous reste " + (this.fuelQuantity-consumption) + " litres.")
            }
        }

        if ((speed>90) && (speed<=130)) {
        let consumption=distance*0.08
            if ((consumption>=this.fuelQuantity)) {
                console.log ("Trajet impossible")
            }
            else {
                console.log("Vous avez consommé " + consumption + " litres. Il vous reste " + (this.fuelQuantity-consumption) + " litres.")
            }
        }

        if ((speed>130)) {
            let consumption=distance*0.12
            if ((consumption>=this.fuelQuantity)) {
                console.log ("Trajet impossible")
            }
            else {
                console.log("Vous avez consommé " + consumption + " litres. Il vous reste " + (this.fuelQuantity-consumption) + " litres.")
            }
        }
    }
}

const car1 = new Car("AA 111 BB", "red", 1200, 110, 40.0, 5.0, 5, false, "")
console.log(car1)

car1.repeindre("red")

car1.repeindre("black")

car1.mettreEssence(36)
console.log(car1)

car1.mettreEssence(34)
console.log(car1)

car1.sedeplacer(300, 120)