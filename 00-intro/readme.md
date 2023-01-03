# Note projet node js

## subititle

Petit architecture node JS pour comprendre sa mise en place (arrete toi au 0-layout inclu), aller au lien si-dessou.

    https://discordapp.com/channels/771458511610839060/900349839139831818/1059394500117663754
---------------------------------
Guide installation de node.js sur Windows,aller sur le lien si-dessou.

    https://www.ionos.fr/digitalguide/sites-internet/developpement-web/introduction-a-nodejs/
---------------------------------
A la découverte de node.js.

Node à disposition un Paket Manager NPM, pour installer des programmes individuelle.

Node.js-Module

Pour charger n'importe quel module de base dans une application Node.js.
    Est la fonction => require("string").

Schéma de base, selon lequel un module peut être chargé dans une application Node.js :

var nommodule = require('emplacement/nommodule');

    Exemple à charger le module de base « os », voici à quoi ressemblerait le code :

```js
var os = require('os');

Le module « os » offre diverses fonctions grâce auxquelles des informations liées au système d’exploitation peuvent être distribuées.

    Exemple connaître son espace de mémoire libre en byte, le code suivant intervient :

var os = require('os');
var freemem = os.freemem();
console.log(freemem);
```

On connait la mémoire libre en byte grace à la fonction 
=> freemem().

Pour en savoir plus sur les fonctions du module os et sur les autres modules de bases de Node.js, consultez le lien si-dessou.

    https://nodejs.org/dist/latest-v4.x/docs/api
-----------------------------------------------------------------

    Module qu'on va plus utiliser

    Http => Hyper Text Transfert Protocol

    Ce que fait le module:
    
    Le module http dans NodeJS, nous permet de creer un server web (HTTP), afin de distribuer notre application sur un port spécifié de la machine (Linux, Win, ...). Depuis notre application nous pouvons distribuer les ressources de notre choix, HTML, image/png/..., JSON en casde création d'API, ...

    Comment fonctionne le Protocol HTTP ?
Le Protocol HTTP fonctionne sur un principe de requètes et de réponse.

REQUETE (req) = client -> serveur RÉPONSE (res) = serveur -> client

Example: Nous avons un client (navigateur web (brave, mozzilla, chrome, ...)) qui demande (requète) une ressource à un serveur via une URL (IP, DNS) ce qui pointe sur le serveur hébergeur du site web qui nous distribue (réponse) la ressource (Une page html par exemple)

Voire le lien si-dessou:

https://nodejs.org/api/http.html
https://fr.wikipedia.org/wiki/Hypertext_Transfer_Protocol
---------------------------------------------------------------------------------------------------------
Module Express {(FRAMEWORK)}

Express est un framework pour creer des services web (site web, api, ...) à partir de Node JS.

Nous allons débuter par faire des routes et des controllers afin de réaliser des actions a partir d'une URL, ses actions peuvent être différentes suivants les besoins.

Exemple 1: Rendre une ressource (HTML, PNG, JSON, ...) ou Intéragir avec un autre service web ou Intéragir avec une base de données ...

ou bien tout ça à la fois.

Voire le lien si-dessou:

https://www.npmjs.com/package/express
https://expressjs.com/fr/starter/hello-world.html
----------------------------------------------------------------------------------------------------------
Module Express-Handlebars

Handlebars c'est quoi ?
Handlebars est un moteur de templating, qui nous permet de parser (fractionner) les vues HTML.

Comment cela fonctionne ?

Pour commencer handlebars ce décompose en 4 grosses parties:

Les layouts : template / modèle structure de notre page (il contient souvent navbar, footer, sidebar, button call to action, ...)
Les views : La page composer de partials
Les partials : fragment de code
Les register-helpers : function permettant d'ajouter un comportement spécifié. (que nous verrons au chapitre "Layouts-Helper-Each")

Voire le lien si-dessou:

https://www.npmjs.com/package/express-handlebars
https://handlebarsjs.com/

Module Layouts-Helper-Each

ayouts Helpers Each c'est quoi ?

Le layout nous permettra de creer un modèle de page, par exemple nous pourrions creer un layout main (par default avec handlebars) qui nous permettra de recevoir les visiteurs, puis nous pourrions creer un layout admin pour tout ce qui est gestion/administration du site, un espace qui serait réserver pour les admin et modérateur.

Les helpers sont des ajouts de mécanique logique dans notre code tel que forcer la mise en majuscule d'un texte, limiter l'affichage d'un tableau à un nombre précis, limiter une chaine de charactère à un certains nombre.

Les each sont des ajouts de mécanique logique dans notre HTML, par exemple nous pourrions avoir un tableau d'objet et répété un fragement de code à l'intérieur ce qui nous faciliterais les taches répété. Nous pourrions aussi utiliser des if, with, ... ce sont des helpers par default dans handlebars, ceux que nous ferions à la main serait aussi des register helpers



--------------------------------
Qu'est que node.js ?

Node n'est pas un framework web.

Node est une technologie qui va permetre d'utilisé du javaScripte,du coté server et d effectuer différente opération.
---------------------------------
Listes de tout les versions de node js.

url git version node js:
  - https://github.com/nodesource/distributions
---------------------------------
Comment fermer l'éditeur VIM ?
  - https://www.journaldunet.fr/web-tech/developpement/1202999-comment-fermer-l-editeur-vim/#:~:text=Pour%20cela%2C%20appuyez%20sur%20la,ZQ%20pour%20quitter%20sans%20sauvegarder.
---------------------------------
 1 Creer un dossier node
 2 Entree dans le dossier 
 3 initialiser notre dossier avec node

 npm init

 4 cree un fichier index.js

 vim index.js

 demarrer le fichier
 node index.js

 Si petit trou mémoire consulté le lien si-dessou.

 https://github.com/arinfo-student/nodev16-hbs/tree/main/00-Intro