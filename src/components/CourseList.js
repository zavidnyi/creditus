import React from 'react';
import CourseDescription from './CourseDescription';

const CourseList = ({courses, deleteCourse}) => {
    return (
                courses.map((course)=> (
                    <CourseDescription course={course} deleteCourse={()=>deleteCourse(course)} key={course.code}/>
                ))
        );
}

export default CourseList;