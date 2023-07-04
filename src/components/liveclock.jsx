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
        <h2 className="text-center text-2xl aurebesh">
          <div className="text-xs m-[10px]">GMT+05:30</div>
          <div className="">
            asr t+
            {this.state.date.toLocaleTimeString("en-IN", { hour12: false })}
          </div>
        </h2>
      </div>
    );
  }
}

export default LiveClockUpdate;
