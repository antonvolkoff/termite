import React from 'react'

class StatusBar {
  render() {
    return (
      <footer className="statusbar">
        <section className="statusbar-section">
          {this.props.username}@{this.props.hostname}
        </section>

        <section className="statusbar-section">
          {this.props.currentPath}
        </section>

        <section className="statusbar-section">
          {this.props.gitStatus}
        </section>

        <section className="statusbar-section">
          {this.props.branch}
        </section>
      </footer>
    );
  }
}

export default StatusBar
