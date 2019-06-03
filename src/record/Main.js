import React, { useState } from 'react'
import StudentRecord from "./StudentRecord";
import AddStudentRecord from "./AddStudentRecord";
import EditRecordForm from "./EditRecordForm";


const Main = () => {
    const studentData = [
        { id: 1, student_name: 'Arul', student_class: 'A' ,student_mark:'85',student_grade:'A'},
        { id: 2, student_name: 'Geri', student_class: 'B' ,student_mark:'99',student_grade:'A'},
        { id: 3, student_name: 'Hari', student_class: 'B' ,student_mark:'100',student_grade:'A'},
        { id: 4, student_name: 'Pakeerathan', student_class: 'A' ,student_mark:'100',student_grade:'A'}

    ];

    const [students, setStudents] = useState(studentData);
    const [editing, setEditing] = useState(false)
    const initialFormState = { id: null, name: '', username: '' };
    const [currentRecord, setCurrentRecord] = useState(initialFormState);

    const addRecord = student => {
        student.id = students.length + 1;
        setStudents([...students, student])
    };
    const deleteRecord = id => {
        setStudents(students.filter(user => user.id !== id))
    };
    const editRecord = student => {
        setEditing(true);
        setCurrentRecord({ id: student.id,
            student_name: student.student_name,
            student_class: student.student_class,
            student_mark: student.student_mark, })
    };
    const updateRecord = (id,  updatedRecord) => {
        setEditing(false);
        setStudents(students.map(student => (student.id === id ? updatedRecord : student)))
    };

    return (
        <div className="container">
            <h1>Top Students Details</h1>
            <div className="flex-row">
                <div className="flex-large">
                    {editing ? (
                        <div>
                            <h2>Edit Record</h2>
                            <EditRecordForm
                                editing={editing}
                                setEditing={setEditing}
                                currentRecord={currentRecord}
                                updateRecord={updateRecord}
                            />
                        </div>
                    ) : (
                        <div>
                            <h2>Add Record</h2>
                            <AddStudentRecord addStudent={addRecord} />
                        </div>
                    )}
                </div>
                <div className="flex-large">
                    <h2>View Data</h2>
                    <StudentRecord students={students}  editData={editRecord} deleteStudent={deleteRecord} />
                </div>
            </div>
        </div>
    )
};
export  default Main;
