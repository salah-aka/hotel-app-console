const service = require('./service.js');

// récupération du module `readline`
const readline = require('readline');
// création d'un objet `rl` permettant de récupérer la saisie utilisateur
let rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

function start(){
       
    console.log('1. Lister les clients \n',  '2. Ajouter un client \n', '99. Sortir \n');
  
    // récupération de la saisie utilisateur
    rl.question('Quel est votre choix',  saisie => {
    // la variable `saisie` contient la saisie effectuée
    switch (saisie){
        case 1: 
        console.log('>> Liste des clients');
        service.listerClients(  listeCli => {
                listeCli.forEach(el => console.log`${el.nom} ${el.prenoms}`)
                start()
            }).catch(erreur => {
                console.log(`Erreur : ${erreur}\n`);
                start();
            });
        break;

        case 2: 
        rl.question('Entrer le nom : ',  saisieNom => {

            rl.question('Entrer le prenom du client : ', saisiePrenom => {

                service.ajouterClient(saisieNom, saisiePrenom, clientAjoute => {
                    console.log(`Le neauveau client créé  ${clientAjoute}`)
                    start();
                }).catch(erreur => {
                    console.log(`Erreur : ${erreur}`);
                    start();
                });
            });
            });
        break;    
    default:
        console.log("Aurevoir");
        rl.close();   // attention, une fois l'interface fermée, la saisie n'est plus
        }
    });
}
exports.start = start;


