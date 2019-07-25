import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';
import Card from 'react-bootstrap/Card';

class StudentCard extends PureComponent {
  redirectToStudentDetail = () => {
    const { rollNo } = this.props;
    this.props.history.push(`./student-info/${rollNo}`)
  }
  render() {
    const {
      name,
      rollNo,
      studentClass,
      totalMark
    } = this.props;

    return (
      <div style={{ marginBottom: '20px', cursor: 'pointer' }} onClick={this.redirectToStudentDetail}>
        <Card style={{ width: '18rem' }}>
          <div >
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: '#343a40',
              color: 'white',
              borderRadius: '100px',
              width: '100px',
              height: '100px',
              marginLeft: '10px',
              marginTop: '10px'
            }}>
              <h3 style={{ color: 'white' }}> {name[0]}</h3>
            </div>
            <div >
              <h3 style={{ position: 'absolute', top: '30px', textAlign: 'center', right: '30px' }}> {name}</h3>
            </div>
          </div>
          <Card.Body>

            <h3>Roll No :{rollNo}</h3>
            <Card.Text>
              <p> Class Name : {studentClass}</p>
              <p> Totalmark :{totalMark}</p>
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </div >
    )
  }
}
export default withRouter(StudentCard);
