import React, { useState, useEffect } from 'react'


const EditRecordForm = props => {
    const [student, setStudent] = useState(props.currentRecord);
    useEffect(() => {
        setStudent(props.currentRecord)
    }, [props])

    const handleInputChange = event => {
        const { name, value } = event.target

        setStudent({ ...student, [name]: value })
    }

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                props.updateRecord(student.id, student)
            }}
        >
            <label>Name</label>
            <input type="text" name="student_name" value={student.student_name} onChange={handleInputChange} />
            <label>Class</label>
            <input type="text" name="student_class" value={student.student_class} onChange={handleInputChange} />
            <label>Mark</label>
            <input type="text" name="student_mark" value={student.student_mark} onChange={handleInputChange} />
            <button>Update user</button>
            <button onClick={() => props.setEditing(false)} className="button muted-button">
                Cancel
            </button>
        </form>
    )
}

export default EditRecordForm