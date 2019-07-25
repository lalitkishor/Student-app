import React, { PureComponent } from 'react';
import Card from 'react-bootstrap/Card';

class StudentCard extends PureComponent {
    render() {
        const {
            name,
            rollNo,
            studentClass
        } = this.props;
        return (
            <div style={{ marginBottom: '20px' }}>
                <Card style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <h3>{rollNo}</h3>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                     </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default StudentCard;
