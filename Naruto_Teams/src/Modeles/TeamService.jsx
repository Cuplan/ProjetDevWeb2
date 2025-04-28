export default class TeamService {
    // Récupère la team depuis localStorage
    static getTeam() {
      const data = localStorage.getItem('equipe');
      return data ? JSON.parse(data) : [];
    }
  
    // Enregistre la team dans localStorage
    static enregistrerTeam(membres) {
      localStorage.setItem('equipe', JSON.stringify(membres));
    }
  
    // Ajoute un ninja à la team (évite les doublons)
    static ajouterMembre(ninja) {
      const team = this.getTeam();
      if (!team.find(m => m.id === ninja.id)) {
        team.push(ninja);
        this.enregistrerTeam(team);
      }
      return team;
    }
  
    // Retire un ninja de la team par son id
    static retirerMembre(id) {
      let team = this.getTeam();
      team = team.filter(m => m.id !== id);
      this.enregistrerTeam(team);
      return team;
    }
  
    // Vide complètement la team
    static viderTeam() {
      this.enregistrerTeam([]);
      return [];
    }
  }
  