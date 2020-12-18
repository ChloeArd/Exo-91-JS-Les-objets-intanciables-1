function Personne(nom, prenom, age, sexe){
   this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.sexe = sexe;

   this.getPersonne = function (){
       return "Ma personne s'appelle " + this.nom + " " + this.prenom + ", elle a " + this.age + " ans, et est de sexe " + this.sexe;
   }

   this.setChangement = function (nouveauPrenom, nouveauAge){
       this.prenom = nouveauPrenom;
       this.age = nouveauAge;
   }
}

let chloe = new Personne("Ardoise", "Chloé", "18", "féminin");
let peter = new Personne("Parker", "Peter", "17", "Masculin");

document.getElementById("premier1").innerHTML = chloe.nom;
document.getElementById("deuxieme1").innerHTML = chloe.prenom;
document.getElementById("troisieme1").innerHTML = chloe.age;
document.getElementById("quatrieme1").innerHTML = chloe.sexe;

document.getElementById("premier2").innerHTML = peter.nom;
document.getElementById("deuxieme2").innerHTML = peter.prenom;
document.getElementById("troisieme2").innerHTML = peter.age;
document.getElementById("quatrieme2").innerHTML = peter.sexe ;

document.getElementById("premiereMethod1").innerHTML = chloe.getPersonne();
chloe.setChangement("Frédérique","46")
document.getElementById("deuxiemeMethod1").innerHTML = chloe.getPersonne();

document.getElementById("premiereMethod2").innerHTML = peter.getPersonne();
peter.setChangement("Johnny","64");
document.getElementById("deuxiemeMethod2").innerHTML = peter.getPersonne()

