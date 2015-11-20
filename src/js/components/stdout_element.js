import React from 'react'

class StdoutElement extends React.Component {
  render() {
    return (
      <div className="element element-stdout">
        {this.props.element.value}
      </div>
    )
  }
}

export default StdoutElement
