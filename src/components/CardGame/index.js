import "./style.css";

function CardGame(icon = "uefa", alt = "Logo da UCL") {
  return /*html*/ `
    <article class="card-game">
      <img src="img/${icon}.png" alt="${alt}">
    </article>
  `;
}

export default CardGame;
