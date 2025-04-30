// Gestion de la sauvegarde des teams! 
export default class TeamService {
  // Static 
    // Récupère la team depuis localStorage https://www.w3schools.com/jsref/prop_win_localstorage.asp (une autre source)
    // https://medium.com/front-end-weekly/understanding-static-in-javascript-10782149993 - Static en REACT 
    // Le static permet d'en faire des outils utilisable par les classes globalement
    // Petite boîte à outil de sauvegarde de team :P ! 
    // utile parce que c'est JUSTE des outils, pas d'instances needed babyy. (J'essaye des affaires)

    static getTeam() {
      const data = localStorage.getItem('team');
      return data ? JSON.parse(data) : []; // Ici on return le date si il existe, si non un tableau vide ! 
    }
  
    // Enregistre la team dans localStorage
    static enregistrerTeam(membres) {
      localStorage.setItem('team', JSON.stringify(membres)); // STRINGIFY ! 
    }
  
    // Ajoute un ninja à la team (évite les doublons)
    static ajouterMembre(ninja) {
      const team = this.getTeam(); // On get notre team jasonnifiée, ou vide 
      if (!team.find(membre => membre.id === ninja.id)) { // Si y'a pas de ninja avec le même ID 
        team.push(ninja); // ON PUSH DANS LA TEAMMMM
        this.enregistrerTeam(team); // Et on enregistre le tout 
      }
      return team;
    }
  
    // Retire un ninja de la team par son id
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
    // .splice() me demandait de trouver l'index du ninja... j'aime mieux travailler avec l'ID ! 
    /*const index = team.findIndex(membre => membre.id === id);
      if (index !== -1) {
        team.splice(index, 1);
      }
        
      mais les deux fonctionnent */
    static retirerMembre(id) {
      let team = this.getTeam(); // let car on va la modifier 
      team = team.filter(membre => membre.id !== id); // permet de garder les membres dont l'ID n'est pas celui qu'on passe en paramètre
      this.enregistrerTeam(team); // Le ninja est alors TUÉ, car on sauvegarde la liste filtrée
      return team;
    }
  
    // Vide complètement la team
    static viderTeam() {
      this.enregistrerTeam([]); // tab vide 
      return [];
    }

  }
  