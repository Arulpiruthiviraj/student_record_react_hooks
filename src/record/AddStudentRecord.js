import React, { useState } from 'react'

    const AddStudentRecord= props => {
        const initialFormState = { id: null, student_name: '', student_class: '',student_mark:'' };
        const [student, setStudent] = useState(initialFormState);
        const handleInputChange = event => {
            const { name, value } = event.target;
            setStudent({ ...student, [name]: value })
        };
        const handleRecordSubmission = event =>{
                event.preventDefault();
                props.addStudent(student);
                setStudent(initialFormState)
            };
    return (
        <form onSubmit={handleRecordSubmission}>
            <label>Name</label>
            <input type="text" name="student_name" value={student.student_name} onChange={handleInputChange} required />
            <label>Class</label>
            <input type="text" name="student_class" value={student.student_class} onChange={handleInputChange} required />
            <label>Mark</label>
            <input type="text" name="student_mark" value={student.student_mark} onChange={handleInputChange} required/>
            <button>Add</button>
        </form>
    )
}

export default AddStudentRecord