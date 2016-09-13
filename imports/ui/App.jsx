import React, { Component } from 'react';

import DaycareCenter from './DaycareCenter.jsx';

// App component - represents the whole app
export default class App extends Component {
  getDaycareCenters() {
    return [
      { _id: 1, text: 'This is daycare center 1' },
      { _id: 2, text: 'This is daycare center 2' },
      { _id: 3, text: 'This is daycare center 3' },
    ];
  }

  renderDaycareCenters() {
    return this.getDaycareCenters().map((daycareCenter) => (
      <DaycareCenter key={daycareCenter._id} daycareCenter={daycareCenter} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Daycare Centers</h1>
        </header>

        <ul>
          {this.renderDaycareCenters()}
        </ul>
      </div>
    );
  }
}
