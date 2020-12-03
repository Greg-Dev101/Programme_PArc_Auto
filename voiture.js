
class Car {
    constructor(immat, color, weight, power, tankCapacity, fuelQuantity, seats, insurance, boardMessage) {
    this.immat = immat
    this.color = color
    this.weight = weight
    this.power = power
    this.tankCapacity = tankCapacity
    this.fuelQuantity = fuelQuantity
    this.seats = seats
    this.insurance = false
    this.boardMessage = "Attention, véhicule non assuré. Conduite interdite !"
    }
    
    toPaint(newColor) {
        if (newColor === this.color) {
        return "La couleur demandée est identique à celle du véhicule."
        } 
        else {
        this.color = newColor;
        return "La couleur de votre véhicule est désormais : " + this.color + "."
        }
    }

    toRefuel(addedFuel) {
        if ((addedFuel+this.fuelQuantity) <= this.tankCapacity) {
            this.fuelQuantity = (addedFuel+this.fuelQuantity)
            return "Appoint de " + addedFuel + " litres d'essence effectué, vous disposez désormais de " + (this.fuelQuantity) + " litres d'essence."
        }
        else {
            return "Appoint de " + addedFuel + " litres impossible, réservoir trop petit."
        }
    }
    
    toMove(distance, speed) {
        if ((speed<=50)) {
        let consumption=distance*0.1
            if ((consumption>=this.fuelQuantity)) {
                return "Trajet impossible, quantité d'essence insuffisante."
            }
            else {
                return "Pendant votre trajet, vous consommerez " + consumption + " litres d'essence. A l'arrivée, il vous restera " + (this.fuelQuantity-consumption) + " litres."
            }
        }
              
        if ((speed>50) && (speed<=90)) {
        let consumption=distance*0.05
            if ((consumption>=this.fuelQuantity)) {
                return "Trajet impossible, quantité d'essence insuffisante."
            }
            else {
                return "Pendant votre trajet, vous consommerez " + consumption + " litres d'essence. A l'arrivée, il vous restera " + (this.fuelQuantity-consumption) + " litres."
            }
        }

        if ((speed>90) && (speed<=130)) {
        let consumption=distance*0.08
            if ((consumption>=this.fuelQuantity)) {
                return "Trajet impossible, quantité d'essence insuffisante."
            }
            else {
                return "Pendant votre trajet, vous consommerez " + consumption + " litres d'essence. A l'arrivée, il vous restera " + (this.fuelQuantity-consumption) + " litres."
            }
        }

        if ((speed>130)) {
            let consumption=distance*0.12
            if ((consumption>=this.fuelQuantity)) {
                return "Trajet impossible, quantité d'essence insuffisante."
            }
            else {
                return "Pendant votre trajet, vous consommerez " + consumption + " litres d'essence. A l'arrivée, il vous restera " + (this.fuelQuantity-consumption) + " litres."
            }
        }
    }

    toString() {
        return "Véhicule immatriculé " + this.immat + ", d'une puissance de " + this.power + " chevaux et de couleur " + this.color + "."
    }

    addInsurance(newInsurance) {
        if ((newInsurance === this.insurance)) {
            return this.boardMessage
            }
            else {
                this.insurance = newInsurance
                this.boardMessage = "Véhicule désormais assuré, bonne route."
                return this.boardMessage
            }
    }
}