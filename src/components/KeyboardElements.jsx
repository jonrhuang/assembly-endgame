import { clsx } from "clsx"

function KeyboardElements(props) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  const keyboardElements = alphabet.split("").map(letter => {
    const isGuessed = props.guessedLetters.includes(letter)
    const isCorrect = isGuessed && props.currentWord.includes(letter)
    const isWrong = isGuessed && !props.currentWord.includes(letter)
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
      farewell: !props.isGameOver && props.isLastGuessIncorrect
    })

    return (
      <button
        className={className}
        key={letter}
        onClick={() => props.addGuessedLetter(letter)}
        disabled={props.guessedLetters.includes(letter)}
        aria-disabled={props.guessedLetters.includes(letter)}
        aria-label={`Letter ${letter}`}
      >
        {letter.toUpperCase()}
      </button>
    )
  })

  return (
    <section className="keyboard">
      {keyboardElements}
    </section>
  )
}

export default KeyboardElements