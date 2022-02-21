import "./style.css";
import CardFrontBack from "../../components/CardFrontBack";
import cards from "./data.js";

function BoardGame(amountCards) {


  const flipAndHideCards = ($cardsActive) => {

    $cardsActive.forEach((card) => card.classList.remove('-active'));

  }

  const swapPlayer = () => {
    const $arrowDown = document.querySelector('.arrow-down');
    const currentPlayer = $arrowDown.getAttribute('data-currentPlayer');

    $arrowDown.setAttribute('data-currentPlayer', currentPlayer == 1 ? 2 : 1);
  }



  window.boardGame = {};
  window.boardGame.handleClick = () => {

    const $boardGame = document.querySelector('.board-game')
    const $cardsActive = $boardGame.querySelectorAll('.card-front-back.-active')


    if ($cardsActive.length === 2) {
      setTimeout(() => {
        flipAndHideCards($cardsActive)
        swapPlayer()
        cardOpen($cardsActive)
      }, 1000);
    }

  }

  const htmlCardsList = cards.map((card) => CardFrontBack(card.icon, card.altIcon));

  const random = shuffleArray(htmlCardsList);

  // Função para randomizar array
  function shuffleArray(arr) {
    // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
      // Escolhendo elemento aleatório
      const j = Math.floor(Math.random() * (i + 1));
      // Reposicionando elemento
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Retornando array com aleatoriedade
    return arr;
  }

  console.log(shuffleArray(cards)); // [4, 2, 1, 5, 3]

  const $htmlCards = random.join('');

  /*Verificar se as cartas são iguais*/
  function cardOpen(card) {
    const len = card.length;
    if (len === 2) {
      if ($htmlCards[0].icon && $htmlCards[0].altIcon != $htmlCards[1].icon && $htmlCards[1].altIcon) {
        console.log('Igual')
      } else {
        console.log('Diferente')
      }
    }
  }


  return /*html*/ `
    <section class="board-game" onClick="boardGame.handleClick()">
      ${$htmlCards}
    </section>
  `;
}

export default BoardGame;
