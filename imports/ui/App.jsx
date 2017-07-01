import React, {Component} from 'react';


import Instagram from './Instagram';
import AccountsUIWrapper from './AccountsUIWrapper';


class App extends Component {
  render() {
    return (
      <div>

        <div className="row">
          <Instagram/>
        </div>

        <div className="row">
          <AccountsUIWrapper/>
        </div>

      </div>
    );
  }
}

export default App;