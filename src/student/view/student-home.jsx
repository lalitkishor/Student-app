
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudent } from "../student-action";
import StudentCard from "../component/student-card";
import Loader from "../../common/loader";
import Container from 'react-bootstrap/Container';
import NavBar from "../component/navbar";

class Student extends Component {
  state = {
    searchText: '',
    isSetAccending: false,
    isSetDesending: false,
    isSetAccendingMark: false,
    isSetDesendingMark: false
  }
  componentDidMount() {
    this.props.fetchStudent()
  }
  setSearchText = (serach) => {
    this.setState((state) => {
      return { ...state, searchText: serach }
    })
  }
  getAccendingStudent = () => {
    const { student } = this.props;
    if (student) return Object.values(student).sort((a, b) => a.name.localeCompare(b.name)).reduce((a, b) => {
      a.push(b.rollNo)
      return a
    }, []);
    return [];
  }
  getDesendingStudent = () => {
    const { student } = this.props;
    if (student) return Object.values(student).sort((a, b) => b.name.localeCompare(a.name))
      .reduce((a, b) => {
        a.push(b.rollNo)
        return a
      }, []);
    return [];
  }
  getAccendingMark = () => {
    const { student } = this.props;
    if (student) return Object.values(student).sort((a, b) => {
      if (a.totalMark < b.totalMark) {
        return 1
      }
      if (a.totalMark > b.totalMark) {
        return -1
      }
      return 0
    }).reduce((a, b) => {
      a.push(b.rollNo)
      return a
    }, []);
    return [];
  }
  getDecendingMark = () => {
    const { student } = this.props;
    if (student) return Object.values(student).sort((a, b) => {
      if (a.totalMark > b.totalMark) {
        return 1
      }
      if (a.totalMark < b.totalMark) {
        return -1
      }
      return 0
    }).reduce((a, b) => {
      a.push(b.rollNo)
      return a
    }, []);
    return [];
  }

  setToggle = (obj) => {
    this.setState({
      ... this.state,
      ...obj
    })
  }
  middleWare = () => {
    const { student } = this.props;
    const { searchText, isSetAccending, isSetDesending, isSetAccendingMark, isSetDesendingMark } = this.state;
    if (isSetAccending) {
      return this.getAccendingStudent()

    }
    if (isSetDesending) {
      return this.getDesendingStudent()
    }
    if (isSetAccendingMark) {
      return this.getAccendingMark()
    }
    if (isSetDesendingMark) {
      return this.getDecendingMark()
    }
    return Object.keys(student).filter((res) => `${student[res].name}`.toLowerCase().indexOf(searchText) >= 0)
  }




  render() {
    const { student, isLoading } = this.props;
    if (isLoading) {
      return (
        <>
          <NavBar
            setSearchText={this.setSearchText}
            sortStudentname={this.setToggle}
          />
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'cetner',
            height: '100vh'
          }}>
            <Loader message="fetching student..." />
          </div>
        </>
      )
    }
    return (
      <>
        <NavBar
          setSearchText={this.setSearchText}
          sortStudentname={this.setToggle}
        />
        <Container>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "space-around", marginTop: '20px' }}>
            {
              student &&
              this.middleWare()
                .map((stu) => {
                  const { name, rollNo, class: studentClass, totalMark } = student[stu]
                  return (< StudentCard key={stu} name={name} rollNo={rollNo} totalMark={totalMark} studentClass={studentClass} />)
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
  console.log(student)
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

