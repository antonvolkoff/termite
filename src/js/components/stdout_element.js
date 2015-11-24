import React from 'react'

class StdoutElement extends React.Component {
  render() {
    let i = 0;
    let lines = this.props.element.value.split("\n").map((line) => {
      i += 1;
      return <div key={i}>{line}</div>
    });

    return (
      <div className="element element-stdout">
        {lines}
      </div>
    )
  }
}

export default StdoutElement
