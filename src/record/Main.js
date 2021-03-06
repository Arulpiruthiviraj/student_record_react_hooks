import React, { useState ,useEffect} from 'react';
import StudentRecord from "./StudentRecord";
import AddStudentRecord from "./AddStudentRecord";
import EditRecordForm from "./EditRecordForm";
import { Nav } from 'office-ui-fabric-react/lib/Nav';


const Main = () => {
    const studentData = [
        { id: 1, student_name: 'Arul', student_class: 'A' ,student_mark:'85',student_grade:'A'},
        { id: 2, student_name: 'Geri', student_class: 'B' ,student_mark:'99',student_grade:'A'},
        { id: 3, student_name: 'Hari', student_class: 'B' ,student_mark:'100',student_grade:'A'},
        { id: 4, student_name: 'Pakeerathan', student_class: 'A' ,student_mark:'100',student_grade:'A'}
    ];
    const [jokeOfTheDay, setjokeOfTheDay] = useState([]);

    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await axios({
    //             method:'GET',
    //             url:'https://api.chucknorris.io/jokes/random',
    //         });
    //         setjokeOfTheDay(response.data.value);
    //         console.log(response.data.value);
    //     }
    //     fetchData();
    // },[]);
    const [students, setStudents] = useState(studentData);
    const [editing, setEditing] = useState(false);
    const initialFormState = { id: null, student_name: '', student_class: '',student_mark: '',student_grade: '' };
    const [currentRecord, setCurrentRecord] = useState(initialFormState);

    const addRecord = student => {
        const mark=student.student_mark;
       gradeChecker(mark,student);
        student.id = students.length + 1;
        setStudents([...students, student]);
    };

    const searchData = event => {
        let searcjQery = event.target.value.toLowerCase();
        setStudents(students.filter(function(item){
            return item.student_name.toLowerCase().search(searcjQery) !== -1;
        }))
        // setStudents( students.filter((el) => {
        //     let searchValue = el.student_name.toLowerCase();
        //     return searchValue.indexOf(searcjQery) !== -1;
        // }));
    };
    const deleteRecord = id => {
        setStudents(students.filter(user => user.id !== id))
    };
    const editRecord = student => {
        setEditing(true);
        setCurrentRecord({
            id: student.id,
            student_name: student.student_name,
            student_class: student.student_class,
            student_mark: student.student_mark,
        })
    };
    const updateRecord = (id,  updatedRecord) => {
        const mark=updatedRecord.student_mark;
        gradeChecker(mark,updatedRecord);
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
                    <StudentRecord students={students} searchData={searchData} editData={editRecord} deleteStudent={deleteRecord} />
                    <div className="card">
                        <div className="card-content">
                            <p className="title">
                                Grade A:&nbsp; Mark 85 and Above
                                <br/>
                                Grade B:&nbsp; Mark between 65 and 85
                                <br/>
                                Grade C:&nbsp; Mark between 65 and 35
                                <br/>
                                Grade FAIL:&nbsp;Below 35
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export  default Main;

function gradeChecker(mark,record) {
    switch(true) {
        case mark>85:
            record.student_grade='A';
            break;
        case mark<85&&mark>65:
            record.student_grade='B';
            break;
        case mark<65&&mark>35:
            record.student_grade='C';
            break;
        case mark<35:
            record.student_grade='FAIL';
            break;
    }
    return record.student_grade;
}
