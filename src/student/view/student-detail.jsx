import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Loader from "../../common/loader";
import { fetchStudent } from "../student-action";

class StudentDetail extends PureComponent {
    componentDidMount() {
        this.props.fetchStudent()
    }
    render() {
        const { id } = this.props.match.params;
        const { student, isLoading } = this.props;
        if (isLoading) {
            return (
                <>
                    <div style={{

                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'cetner',
                        marginTop: '15px'
                    }}>
                        <Loader message="fetching student detail..." />
                    </div>
                </>
            )
        }
        return (
            <div>
                {
                    student && <div style={{ marginTop: '25px' }}>
                        <h3 style={{ textAlign: 'center' }}>  Name of Student :{student[id].name}</h3>
                        <h3 style={{ textAlign: 'center' }}> class : {student[id].class}   </h3>
                        <h3 style={{ textAlign: 'center' }}>  rollNo : {student[id].rollNo}  </h3>
                        <h3 style={{ textAlign: 'center' }}>   Totalmark : {student[id].totalMark}  </h3>
                    </div>
                }
            </div>)
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
export default connect(mapStateToProps, mapDispatchToProps)(StudentDetail);