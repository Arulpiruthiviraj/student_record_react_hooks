import React from 'react'

const StudentRecord = props => (
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
                        <button className="button muted-button" onClick={() => {
                            props.editData(student)
                        }}>Edit</button>
                        <button className="button muted-button" onClick={() => props.deleteStudent(student.id)} className="button muted-button">Delete</button>
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
)

export default StudentRecord