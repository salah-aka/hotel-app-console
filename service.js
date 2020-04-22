// importation de la librairie request
// recherche par défaut dans le répertoire node_modules
const request = require('request-promise-native');

let ur1 = 'http://localhost:8080/clients';

function listerClients(){
    return request(`${ur1} + ?start=0&size=10`, { json: true })

    .then(body => {
        let result = "";

        body.forEach(el => {
            result += `${el.nom} ${el.prenoms}`;
        });
        return result;
    })
}
 exports.listerClients = listerClients;

 function ajouterClient(saisieNom, saisiePrenom) {

    return request({url,
        method: "POST",
        body: {
            'nom': saisieNom,
            'prenoms': saisiePrenom
        },
        json: true
    }).then(body => {
        return `Client crée :  ${body.uuid}\n ${body.nom}\n ${body.prenoms}`
    });
}
 exports.ajouterClient = ajouterClient;



