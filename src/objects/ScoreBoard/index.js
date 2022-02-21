import PlayerName from "../../components/PlayerName";
import PlayerVS from "../../components/PlayerVS";
import PlayerScore from "../../components/PlayerScore";
import ArrowDown from "../../components/ArrowDown";

import "./style.css";


function ScoreBoard() {
  return /*html*/ `
    <header class="score-board">
      ${ArrowDown()}
      ${PlayerName("Player1")}
      ${PlayerScore(0)}
      ${PlayerVS("VS")}
      ${PlayerScore(0)}
      ${PlayerName("Player2")}
    </header>
  `;
}

export default ScoreBoard;
