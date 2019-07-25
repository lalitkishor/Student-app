import React, { PureComponent } from 'react';
import Card from 'react-bootstrap/Card';

class StudentCard extends PureComponent {
  render() {
    const {
      name,
      rollNo,
      studentClass,
      totalMark
    } = this.props;
    return (
      <div style={{ marginBottom: '20px' }}>
        <Card style={{ width: '18rem' }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <h3> Name : {name}</h3>
            <h3>Roll No :{rollNo}</h3>
            <Card.Text>
              <p> Class Name : {studentClass}</p>
              <p> Totalmark :{totalMark}</p>
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </div>
    )
  }
}
export default StudentCard;
