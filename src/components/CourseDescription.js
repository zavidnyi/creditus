import React from 'react';

const CourseDescription = ({course, deleteCourse}) => {
    return (
        <div className="course-description">
            <div className="text">
                <a>{course.code}</a>
                <p>{course.name}</p>
                <p>{course.belongsTo}</p>
            </div>
            <div className="delete" onClick={deleteCourse}/>
        </div>
    );
}

export default CourseDescription;