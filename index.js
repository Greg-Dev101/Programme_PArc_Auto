
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

    mettreEssence(addedFuel) {
        if ((addedFuel+this.fuelQuantity) <= this.tankcapacity) {
            console.log("Appoint d'essence effectué, vous disposez désormais de " + (addedFuel+this.fuelQuantity) + " litres d'essence." )
            this.fuelQuantity = (addedFuel+this.fuelQuantity)
        }
        else {
            console.log("Appoint impossible, veuillez recommencer")
        }
    }
    
    seDeplacer(distance, speed) {
        
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

    toString() {
        console.log ("Voiture immatriculé " + this.immat + " , une puissance de " + this.power + " et de couleur " + this.color + ".")

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

car1.seDeplacer(300, 120)

car1.toString()