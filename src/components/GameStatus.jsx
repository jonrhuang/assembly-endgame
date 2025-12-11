import { getFarewellText } from "../utils/utils"
import { clsx } from "clsx"

export function GameStatus(props) {
  const gameStatusClass = clsx("game-status", {
    won: props.isGameWon,
    lost: props.isGameLost,
    farewell: props.isLastGuessIncorrect
  })

  return (
    <section
      aria-live="polite"
      role="status"
      className={gameStatusClass}
    >
      {!props.isGameOver && props.isLastGuessIncorrect &&
        <p className="farewell-message">
          {getFarewellText(props.languages[props.wrongGuessCount - 1].name)}
        </p>}
      {props.isGameOver && props.isGameWon &&
        <>
          <h2>You win!</h2>
          <p>Well done! 🎉</p>
        </>}
      {props.isGameOver && props.isGameLost &&
        <>
          <h2>Game over!</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </>}
    </section>
  )
}

export default GameStatus