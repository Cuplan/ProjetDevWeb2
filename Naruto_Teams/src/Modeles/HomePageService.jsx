export class HomePageService {
  constructor({ nom, email, village }) {
    this.nom = nom;
    this.email = email;
    this.village = village;
  }

  // https://stackoverflow.com/questions/50330109/simple-regex-pattern-for-email 
  isValidEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(this.email);
  }

  isValid() {
    return (
      this.nom.trim() !== '' ||
      this.isValidEmail() ||
      this.village.trim() !== ''
    );
  }

  getErrors() {
    const errors = {};
    if (this.nom.trim() === '') errors.nom = "T'as pas de nom? Dattebayo...";
    if (!this.isValidEmail()) errors.email = "Email invalide... Dattebayo!.";
    if (this.village.trim() === '') errors.village = "Choisi un village, Dattebayo!.";
    return errors;
  }
}
