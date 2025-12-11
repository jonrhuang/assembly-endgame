function NewGameButton(props) {
  return (
    <>
      {props.isGameOver &&
        <button
          className="new-game"
          onClick={props.startNewGame}
        >
          New Game
        </button>
      }
    </>
  )
}

export default NewGameButton