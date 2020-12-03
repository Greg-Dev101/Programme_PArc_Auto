
class Car {
    constructor(immat, color, weight, power, tankcapacity, fuelQuantity, seats, assurance, boardMessag){
    this.immat = immat;
    this.color = color;
    this.weight = weight;
    this.power = power;
    this.tankcapacity = tankcapacity;
    this.fuelQuantity = fuelQuantity;
    this.seats = seats
    this.assurance = false;
    this.boardMessage = "";
    }
    
    repeindre(newColor) {
        if (newColor === this.color) {
        return "Couleur identique"
        } 
        else {
        this.color = newColor;
        return "La nouvelle couleur est : " + this.color
        }
    }

    mettreEssence(addedFuel) {
        if ((addedFuel+this.fuelQuantity) <= this.tankcapacity) {
            this.fuelQuantity = (addedFuel+this.fuelQuantity)
            return "Appoint de " + addedFuel + " litres d'essence effectué, vous disposez désormais de " + (this.fuelQuantity) + " litres d'essence."
        }
        else {
            return "Appoint de " + addedFuel + " impossible, réservoir trop petit."
        }
    }
    
    seDeplacer(distance, speed) {
        
        if ((speed<=50)) {
        let consumption=distance*0.1
            if ((consumption>=this.fuelQuantity)) {
                return "Trajet impossible, quantité d'essence insuffisante."
            }
            else {
                return "Pendant votre trajet, vous consommerez " + consumption + " litres. A l'arrivée, il vous restera " + (this.fuelQuantity-consumption) + " litres."
            }
        }
              
        if ((speed>50) && (speed<=90)) {
        let consumption=distance*0.05
            if ((consumption>=this.fuelQuantity)) {
                return "Trajet impossible, quantité d'essence insuffisante."
            }
            else {
                return "Pendant votre trajet, vous consommerez " + consumption + " litres. A l'arrivée, il vous restera " + (this.fuelQuantity-consumption) + " litres."
            }
        }

        if ((speed>90) && (speed<=130)) {
        let consumption=distance*0.08
            if ((consumption>=this.fuelQuantity)) {
                return "Trajet impossible, quantité d'essence insuffisante."
            }
            else {
                return "Pendant votre trajet, vous consommerez " + consumption + " litres. A l'arrivée, il vous restera " + (this.fuelQuantity-consumption) + " litres."
            }
        }

        if ((speed>130)) {
            let consumption=distance*0.12
            if ((consumption>=this.fuelQuantity)) {
                return "Trajet impossible, quantité d'essence insuffisante."
            }
            else {
                return "Pendant votre trajet, vous consommerez " + consumption + " litres. A l'arrivée, il vous restera " + (this.fuelQuantity-consumption) + " litres."
            }
        }
    }

    toString() {
        return "Voiture immatriculé " + this.immat + ", d'une puissance de " + this.power + " chevaux et de couleur " + this.color + "."
    }

    souscrireAssurance(value) {
        this.assurance = value;
        return this.boardMessage ? "Voiture assurée, bonne route !" : "Voiture non assurée, conduite interdite."
    }

}

const car1 = new Car("AA 111 BB", "red", 1200, 110, 40.0, 5.0, 5, false, "")
console.log(car1)

console.log(car1.repeindre("red"))

console.log(car1.repeindre("black"))

console.log(car1.mettreEssence(36))

console.log(car1)

console.log(car1.mettreEssence(34))

console.log(car1)

console.log(car1.seDeplacer(100, 120))

console.log(car1.toString())

console.log(car1.souscrireAssurance(true))