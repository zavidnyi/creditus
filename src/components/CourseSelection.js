import React from 'react';
import CourseList from './CourseList';

const CourseSelection = ({chosenCourses}) => {
    return(
        <CourseList courses={chosenCourses}/>
    );
}

export default CourseSelection;