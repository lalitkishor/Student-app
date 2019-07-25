
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudent } from "../student-action";
import StudentCard from "../component/student-card";
import Loader from "../../common/loader";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import NavBar from "../component/navbar";

class Student extends Component {
  componentDidMount() {
    this.props.fetchStudent()
  }
  render() {
    const { student, isLoading } = this.props;
    if (isLoading) {
      return (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'cetner',
          height: '100vh'
        }}>
          <Loader message="fetching student..." />
        </div>
      )
    }
    return (
      <>
        <NavBar />
        <Container>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "space-around", marginTop: '20px' }}>
            {

              student && Object.keys(student).map((stu) => {
                const { name, rollNo, class: studentClass } = student[stu]
                return (< StudentCard key={stu} name={name} rollNo={rollNo} studentClass={studentClass} />)

              })
            }
          </div>
        </Container >
      </>
    )
  }
}

const mapStateToProps = (state) => {
  const { student: { student, isLoading } } = state;
  return {
    student,
    isLoading
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchStudent: () => dispatch(fetchStudent())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Student);

