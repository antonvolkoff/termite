import React from 'react'
import { findDOMNode }  from 'react-dom'

class StdoutElement extends React.Component {
  componentDidUpdate() {
    let node = findDOMNode(this.refs.output);
    node.style.height = (node.scrollHeight)+"px";
  }

  render() {
    return (
      <div className="element element-stdout">
        <textarea ref="output" value={this.props.element.value} readOnly={true}></textarea>
      </div>
    )
  }
}

export default StdoutElement
