
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudent } from "../student-action";

class Student extends Component {
  componentDidMount() {
    this.props.fetchStudent()
  }
  render() {
    return (
      <div>welcome</div>
    )
  }
}

const mapStateToProps = () => {

}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchStudent: () => dispatch(fetchStudent())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Student);