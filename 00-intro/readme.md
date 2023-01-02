# Note projet node js

## subititle

Petit architecture node JS pour comprendre sa mise en place (arrete toi au 0-layout inclu), aller au lien si-dessou.

    https://discordapp.com/channels/771458511610839060/900349839139831818/1059394500117663754

Guide installation de node.js sur Windows,aller sur le lien si-dessou.

    https://www.ionos.fr/digitalguide/sites-internet/developpement-web/introduction-a-nodejs/

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

Qu'est que node.js ?

Node n'est pas un framework web.

Node est une technologie qui va permetre d'utilisé du javaScripte,du coté server et d effectuer différente opération.


url git version node js:
  - https://github.com/nodesource/distributions

Comment fermer l'éditeur VIM ?
  - https://www.journaldunet.fr/web-tech/developpement/1202999-comment-fermer-l-editeur-vim/#:~:text=Pour%20cela%2C%20appuyez%20sur%20la,ZQ%20pour%20quitter%20sans%20sauvegarder.

 1 Creer un dossier node
 2 Entree dans le dossier 
 3 initialiser notre dossier avec node

 npm init

 4 cree un fichier index.js

 vim index.js

 demarrer le fichier
 node index.js