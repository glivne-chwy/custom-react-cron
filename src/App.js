import React, { Component } from 'react'
import CustomCron from './lib'
class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
       
      };
      this.cronStyle = `
        .cron_builder {
          width: 90%;
        }

        .cron_builder_bordering {
          text-align: left;
        }

        .nav-tabs {
          border-bottom: 1px solid #ddd;
        }

        .tab-content>.active {
          display: block;
        }

        .row {
          margin-right: -15px;
          margin-left: -15px;
        }
      `
  }

  render() {
    return (<div>
      <CustomCron
        tabs={['Daily','Weekly', 'Monthly']}
        onChange={(e)=> {this.setState({value:e}); console.log(e)}}
        hours={2}
        minutes={15}
        style={this.cronStyle}
        value={this.state.value}
        showResultText={true}
        showResultCron={true}
        />
                            
    </div>)
  }
}

export default App;
