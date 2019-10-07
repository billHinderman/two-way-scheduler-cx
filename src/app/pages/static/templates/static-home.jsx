import React, { Component } from 'react'

import Auth from 'j-toker'

class StaticHome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(Auth);
    return (
      <div className="template template--user template--user-new">
        {Auth.user.email}
        <div>asdfs</div>
      </div>
    );
  }
}

export default StaticHome;
