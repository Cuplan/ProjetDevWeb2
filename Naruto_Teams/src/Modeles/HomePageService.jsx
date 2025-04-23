export class HomePageService {
  constructor({ nom, email, message }) {
    this.nom = nom;
    this.email = email;
    this.message = message;
  }

  // https://stackoverflow.com/questions/50330109/simple-regex-pattern-for-email 
  isValidEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(this.email);
  }

  isValid() {
    return (
      this.nom.trim() !== '' &&
      this.isValidEmail() &&
      this.message.trim() !== ''
    );
  }

  getErrors() {
    const errors = {};
    if (this.nom.trim() === '') errors.nom = "T'as pas de nom? Dattebayo...";
    if (!this.isValidEmail()) errors.email = "Email invalide... Dattebayo!.";
    if (this.message.trim() === '') errors.message = "Choisi un village, Dattebayo!.";
    return errors;
  }
}
