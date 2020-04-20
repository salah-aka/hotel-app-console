var ur1 = 'http://localhost:8080/clients';
// importation de la librairie request
// recherche par défaut dans le répertoire node_modules

var request = require('request');

function listerClients(callbackSuccess, callbackErr){
    // Envoie de la requête http
    // L'option { json: true } permet d'obtenir un objet JavaScript dans body (au lieu d'une chaîne de caractères).
    request(ur1 + '?start=0&size=8', { json: true }, function(err, res, body) {
            if (err) { 
                callbackErr(err)     // Affichage d'un Erreur 
            } else {
                callbackSuccess(body)   // body contient les données récupérées
            }               
        });
    }

 exports.listerClients = listerClients;

 function ajouterClient(saisieNom, saisiePrenom, callbackSuccess, callbackErr) {
    request(ur1, { json: true ,
        method: 'POST',
        body: {
            nom : saisieNom,
            prenoms : saisiePrenom
        }
    }, function(err, res, body) {
        if (err) { 
            callbackErr(err)     // Affichage d'un Erreur 
        } else {
            callbackSuccess(body)   // body contient les données récupérées
        }               
    });
 }

 exports.ajouterClient = ajouterClient;