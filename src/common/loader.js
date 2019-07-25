import React, { PureComponent } from 'react';
import Spinner from 'react-bootstrap/Spinner';

class Loader extends PureComponent {
  render() {
    const { message } = this.props;
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
        <span style={{ marginLeft: '5px' }}>{message}</span>
      </div>
    )
  }
}
export default Loader;