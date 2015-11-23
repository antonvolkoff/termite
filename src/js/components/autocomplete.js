import React from 'react'

class Autocomplete extends React.Component {
  render() {
    let elements = this.props.suggestions.map((item) => {
      let klass = "item";
      if (item.id == this.props.selected.id) {
        klass += " selected";
      }

      return <div key={item.id} className={klass}>{item.name}</div>
    })

    return (
      <div className="autocomplete">
        {elements}
      </div>
    )
  }
}

export default Autocomplete
