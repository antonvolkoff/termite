import React from 'react'

class StatusBar extends React.Component {
  render() {
    let branchStyle = {color: 'green'};
    if (this.props.gitStatus) {
      branchStyle = {color: 'yellow'};
    }

    return (
      <footer className="statusbar">
        <section className="statusbar-section">
          {this.props.username}@{this.props.hostname}
        </section>

        <section className="statusbar-section">
          {this.props.currentPath}
        </section>

        <section className="statusbar-section" style={branchStyle}>
          {this.props.branch}
        </section>
      </footer>
    );
  }
}

export default StatusBar
