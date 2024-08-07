import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onType = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="input" className="input-description">
            Enter the phrase
          </label>
          <input
            type="text"
            placeholder="Enter the phrase"
            className="text-box"
            id="input"
            onChange={this.onType}
          />
          <p className="letters-box">No.of letters: {count}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}

export default LettersCalculator
