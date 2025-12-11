import { clsx } from "clsx"

function LetterElements(props) {
  const letterElements = props.currentWord.split("").map((letter, index) => (
    <span key={index} className={clsx(props.isGameLost && !props.guessedLetters.includes(letter) && "notGuessed")}>
      {props.guessedLetters.includes(letter) ? letter.toUpperCase() :
        props.isGameLost ? letter.toUpperCase() : ""}
    </span>
  ))

  return (
    <section className="word">
      {letterElements}
    </section>
  )
}

export default LetterElements