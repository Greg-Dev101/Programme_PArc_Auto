
class Voiture {
    constructor(immat, couleur, poids, puissance, capReserve, nivEssence, nbrePlace){
    this.immat = immat;
    this.couleur = couleur;
    this.poids = poids;
    this.puissance = puissance;
    this.capReserve = capReserve;
    this.nivEssence = nivEssence;
    this.nbrePlace = nbrePlace;
    }
    
    repeindre(nouvelleCouleur) {
        if (nouvelleCouleur === this.couleur) {
        console.log('Couleur identique');
        } else {
        this.couleur = nouvelleCouleur;
        console.log('La nouvelle couleur est : ' + this.couleur);
        }
    }
}

const voiture1 = new Voiture("AA 111 BB", "red", 1200, 6, 40.0, 5.0, 5)
console.log(voiture1)

voiture1.repeindre("red")
console.log(voiture1.immat + " " + voiture1.couleur)





