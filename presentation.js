var service = require('./service');

// récupération du module `readline`
var readline = require('readline');
// création d'un objet `rl` permettant de récupérer la saisie utilisateur
var rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

function start(){
    console.log('1. Lister les clients \n',  '2. Ajouter un client \n', '99. Sortir \n');
  
    // récupération de la saisie utilisateur
rl.question('', function(saisie) {
    // la variable `saisie` contient la saisie effectuée
    switch (saisie){
        case '1': 
        console.log(">> Liste des clients");
        service.listerClients( function (listeCli) {
                listeCli.forEach(el => console.log(el.nom + ' ' + el.prenoms))
                start()
            }, function (err) {
                console.log('oops', err)
                start()
            })
        break;
        case '2': 
        rl.question('Entrer le nom : ', function (saisieNom) {

            rl.question('Entrer le prenom du client : ', function (saisiePrenom) {

                service.ajouterClient(saisieNom, saisiePrenom, function (clientAjout) {
                    console.log('Le neauveau client créé  =', clientAjout);
                    start()
                }, function (err) {
                    console.log('Erreur détecté', err)
                    start()
                    })
                })
            })
        break;    
        default:
            console.log("Aurevoir");
            rl.close();   // attention, une fois l'interface fermée, la saisie n'est plus
        }
    });
}
exports.start = start;


