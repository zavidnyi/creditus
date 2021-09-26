import React, {useEffect} from 'react';
import CourseList from './CourseList';
import CourseSearch from './CourseSearch';

const CourseSelection = ({requiredCourses, electiveGroups, userData}) => {

    const addCourse = (course) => {
        if (!userData.courses.includes(course))
            userData.set({...userData, courses:userData.courses.concat([course])})
    }
    const listOfAllCourses = () => {
        let electives = []
        electiveGroups.forEach(group => {
            electives = electives.concat(group.courses)
        });
        return electives.concat(requiredCourses.courses)
    }
    return(
        <>
            <CourseSearch courses={listOfAllCourses()} addCourse={addCourse}/>
            <CourseList courses={userData.courses}/>
        </>
    );
}

export default CourseSelection;