export default class NinjasService {
    
    constructor() {
        this.apiUrl = 'https://dattebayo-api.onrender.com/'
    }


    async getNinjasAsync(endpoint='characters') { // doit avoir le mot-clé async
        const reponse = await fetch(this.apiUrl + endpoint);
        if( !reponse.ok ) {
            throw new Error(`Erreur ${reponse.status} : ${reponse.statusText}`);
        }
        const tabPays = await reponse.json();
        return tabPays;
    }

    async getNinjasDetails(url){
        const reponse = await fetch(url);
        if( !reponse.ok ) {
            throw new Error(`Erreur ${reponse.status} : ${reponse.statusText}`);
        }
        const pageNinja = await reponse.json();
        return pageNinja;
    }

}