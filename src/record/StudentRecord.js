import React from 'react';
import {PrimaryButton} from 'office-ui-fabric-react';



const StudentRecord = props => (

    <div>
        <input type="text"  name="search" placeholder={"search"} onChange={(event) => {
            props.searchData(event)
        }} />
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Class</th>
                <th>Mark</th>
                <th>Grade</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {props.students.length > 0 ? (
                props.students.map(student => (
                    <tr key={student.id}>
                        <td>{student.student_name}</td>
                        <td>{student.student_class}</td>
                        <td>{student.student_mark}</td>
                        <td>{student.student_grade}</td>
                        <td>
                            <PrimaryButton text="Edit" className="button muted-button" onClick={() => {
                                props.editData(student)
                            }}/>
                            <PrimaryButton text="Delete"  allowDisabledFocus={true} className="button muted-button" onClick={() => props.deleteStudent(student.id)} />
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>No Record</td>
                </tr>
            )}
            </tbody>
        </table>
    </div>
)

export default StudentRecord