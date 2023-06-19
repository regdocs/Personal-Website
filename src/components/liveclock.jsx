import { Component } from "react";

class LiveClockUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center text-4xl">
          <span className="text-sm">GMT+05:30</span>
          <br />
          T+
          {this.state.date.toLocaleTimeString("en-IN", { hour12: false })}
        </h2>
      </div>
    );
  }
}

export default LiveClockUpdate;
