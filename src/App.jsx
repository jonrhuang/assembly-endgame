import { useWindowSize } from "react-use"
import Header from "./components/Header"
import GameStatus from "./components/GameStatus"
import Confetti from "react-confetti"
import useGameState from "./hooks/useGameState"
import LanguageElements from "./components/LanguageElements"
import LetterElements from "./components/LetterElements"
import SRSection from "./components/SRSection"
import KeyboardElements from "./components/KeyboardElements"
import NewGameButton from "./components/NewGameButton"

function App() {
  const {
    currentWord,
    guessedLetters,
    wrongGuessCount,
    isGameWon,
    isGameLost,
    isGameOver,
    lastGuessedLetter,
    isLastGuessIncorrect,
    numGuessesLeft, 
    addGuessedLetter,
    startNewGame,
    languages
  } = useGameState()

  const { width, height } = useWindowSize()

  return (
    <main>

      {isGameWon &&
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={1000}
        />
      }

      <Header />

      <GameStatus
        isGameOver={isGameOver}
        isGameLost={isGameLost}
        isGameWon={isGameWon}
        wrongGuessCount={wrongGuessCount}
        isLastGuessIncorrect={isLastGuessIncorrect}
        languages={languages}
      />

      <LanguageElements
        languages={languages}
        wrongGuessCount={wrongGuessCount}
      />

      <LetterElements
        currentWord={currentWord}
        isGameLost={isGameLost}
        guessedLetters={guessedLetters}
      />

      {/* Visually-hidden aria-live region for status updates */}
      <SRSection
        currentWord={currentWord}
        lastGuessedLetter={lastGuessedLetter}
        guessedLetters={guessedLetters}
        numGuessesLeft={numGuessesLeft}
      />

      <KeyboardElements
        guessedLetters={guessedLetters}
        currentWord={currentWord}
        isGameOver={isGameOver}
        isLastGuessIncorrect={isLastGuessIncorrect}
        addGuessedLetter={addGuessedLetter}
      />

      <NewGameButton
        isGameOver={isGameOver}
        startNewGame={startNewGame}
      />
    </main>
  )
}

export default App
