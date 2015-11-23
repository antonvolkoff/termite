import React from 'react'

class Autocomplete extends React.Component {
  render() {
    let elements = this.props.items.map((item) => {
      return <div>{item.name}</div>
    })

    return (
      <div className="autocomplete">
        {elements}
      </div>
    )
  }
}

export default Autocomplete
