/*
  Třída pro jednu knihu v knihovně.

  Vlastnosti:
  - author: autor knihy
  - title: název khiny
  - year: rok vydání
  - image: obrázek knihy
  - isRead: boolean (true/false) zda máme knihu přečtenou

  Metody:
  - read(): označí knihu jako přečtenou
*/
export default class Book {

  constructor(author, title, year, image) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.image = image;
    this.isRead = false;
  }



  read() {
    this.isRead = true;
    console.log(`Super, přečetl jsi knihu ${this.title}.`);
  }

  renderHTML(library) {
    let html =
      `<div class="book">
  <div class="book__image">
    <img src="images/${this.image}" alt="Obálka Název knihy">
  </div>
  <div class="book__info">
    <h3 class="book__title">${this.title}</h3>
    <p class="book__meta">${this.author}, ${this.year}</p>
  </div>`

    if (this.isRead) {
      html += `<div class="book__badge book__badge--read">Přečteno</div>`
    }
    if (library.currentBook && library.currentBook.title === this.title) {
      html += `<div class="book__badge book__badge--current">Právě čtu</div>`
    }
    html += `</div>`

    return html;
  }


}