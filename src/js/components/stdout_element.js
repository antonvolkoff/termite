import React from 'react'

class StdoutElement extends React.Component {
  render() {
    let lines = this.props.element.value.split("\n").map((line) => {
      return <div>{line}</div>
    });

    return (
      <div className="element element-stdout">
        {lines}
      </div>
    )
  }
}

export default StdoutElement
