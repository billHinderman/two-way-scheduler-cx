import React, { Component } from 'react'

import Auth from 'j-toker'

class StaticHome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(Auth);
    return (
      <div className="template template--static template--static-home">
        {Auth.user.email}
      </div>
    );
  }
}

export default StaticHome;
