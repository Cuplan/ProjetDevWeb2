export default class NinjasService {
    
    constructor() {
        this.apiUrl = 'https://dattebayo-api.onrender.com/'
    }


    async getNinjasAsync(endpoint = 'characters?limit=1350&page=1') {
        const response = await fetch(this.apiUrl + endpoint);
        if (!response.ok) {
          throw new Error(`Erreur ${response.status} : ${response.statusText}`);
        }
        const data = await response.json();
        return data.characters;  //  on renvoie le tableau lui‑même
      }
      

      async getNinjaById(id) {
        const res = await fetch(`${this.apiUrl}characters/${id}`);
        if (!res.ok) throw new Error(`Erreur ${res.status} : ${res.statusText}`);
        return res.json(); 
      }

}