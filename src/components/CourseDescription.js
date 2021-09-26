import React from 'react';

const CourseDescription = ({course}) => {
    return (
        <div className="course-description">
            <a>{course.code}</a>
            <p>{course.name}</p>
            <p>{course.belongsTo}</p>
        </div>
    );
}

export default CourseDescription;