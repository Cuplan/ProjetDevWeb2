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


  async getNinjaById(id) {
    const res = await fetch(`${this.apiUrl}characters/${id}`);
    if (!res.ok){
      throw new Error(`Erreur ${res.status} : ${res.statusText}`);
    } 
    const dataID =  await res.json()
    return dataID;
  }

}