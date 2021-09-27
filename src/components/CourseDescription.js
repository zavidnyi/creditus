import React, {useState} from 'react';

const CourseDescription = ({course, deleteCourse}) => {
    const [willLeave, setWillLeave] = useState(false)
    const deleteSelf = () => {
        setWillLeave(true)
        setTimeout(deleteCourse, 300)
    }
    return (
        <div className={"course-description" + (willLeave ? " leaving" : "")} key={course.code}>
            <div className="text">
                <a>{course.code}</a>
                <p>{course.name}</p>
                <p>{course.belongsTo}</p>
            </div>
            <div className="delete" onClick={deleteSelf}/>
        </div>
    );
}

export default CourseDescription;