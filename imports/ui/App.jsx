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
          <div className="col s6 offset-s6">
            <AccountsUIWrapper/>
          </div>

        </div>

      </div>
    );
  }
}

export default App;