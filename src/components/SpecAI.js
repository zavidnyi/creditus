import React, {useState} from 'react';
import CourseSelection from './CourseSelection';
import Header from './Header';
import Tracker from './Tracker';

const SpecAI = () => {
    const [val, setVal] = useState(0)
    const [chosenCourses, setChosenCourses] = useState([
        {code: "NPRG041", name: "Programming in C++", belongsTo: "Group 2"},
        {code: "NPRG041", name: "Programming in C++", belongsTo: "Group 2"},
        {code: "NPRG041", name: "Programming in C++", belongsTo: "Group 2"}
    ])

    return (
        <>
            <Header specName="Artificial Intellifence"/>
            <div className="tracker-group">
                <Tracker name="Required Courses:" currentValue={val} maxValue={6}/>
                <Tracker name="Elective Group 1:" currentValue={val} maxValue={25}/>
                <Tracker name="Elective Group 2:" currentValue={val} maxValue={10}/>
                <Tracker name="Elective Group 3:" currentValue={val} maxValue={10}/>
            </div>
            <CourseSelection chosenCourses={chosenCourses}/>
            <button onClick={()=>setVal(val+10)}>Button</button>
        </>
    );
}

export default SpecAI;