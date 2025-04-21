export default class NinjasService {
    
    constructor() {
        this.apiUrl = 'https://dattebayo-api.onrender.com/'
    }


    async getNinjasAsync(endpoint = 'characters') {
        const response = await fetch(this.apiUrl + endpoint);
        if (!response.ok) {
          throw new Error(`Erreur ${response.status} : ${response.statusText}`);
        }
        const data = await response.json();
        return data.characters;  //  on renvoie le tableau lui‑même
      }
      

    async getNinjasDetails(id){
        const reponse = await fetch(id);
        if( !reponse.ok ) {
            throw new Error(`Erreur ${reponse.status} : ${reponse.statusText}`);
        }
        const pageNinja = await reponse.json();
        return pageNinja;
    }

}