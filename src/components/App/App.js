import React, { Component } from 'react'

import OptionsPanel from '../OptionsPanel'
import Board from '../Board'

import { createTiles } from '../../misc/utils'

import './App.css'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			numTiles: 35,
			playing: false,
			previousTileIndex: null,
			tiles: [],
			toBeCleared: null,
		}
	}

	startGame(numTiles) {
		this.setState((state) => ({
			playing: true,
			previousTileIndex: null,
			toBeCleared: null,
			tiles: createTiles(state.numTiles, this.handleTileClicked),
		}))
	}

	render() {
		const { numTiles, playing, previousTileIndex, tiles, toBeCleared } =
			this.state

		return (
			<div className="App">
				<header className="App-header">Turbo-Matcher</header>

				<OptionsPanel
					playing={playing}
					numTiles={numTiles}
					startGame={startGame}
				/>
				<Board numTiles={numTiles} tiles={tiles} />
			</div>
		)
	}
}

export default App
