import React from 'react'

class StatusBar extends React.Component {
  render() {
    let status = "NO";
    if (this.props.gitStatus) {
      status = "YES";
    }

    return (
      <footer className="statusbar">
        <section className="statusbar-section">
          {this.props.username}@{this.props.hostname}
        </section>

        <section className="statusbar-section">
          {this.props.currentPath}
        </section>

        <section className="statusbar-section">
          {status}
        </section>

        <section className="statusbar-section">
          {this.props.branch}
        </section>
      </footer>
    );
  }
}

export default StatusBar
