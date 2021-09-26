import React from 'react';
import CourseDescription from './CourseDescription';

const CourseList = ({courses}) => {
    return (
            courses.map((course)=> (
                <CourseDescription course={course}/>
            ))
        );
}

export default CourseList;