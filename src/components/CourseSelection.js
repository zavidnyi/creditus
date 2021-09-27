import React, {useEffect} from 'react';
import CourseList from './CourseList';
import CourseSearch from './CourseSearch';
import Footer from './Footer';

const CourseSelection = ({requiredCourses, electiveGroups, userData}) => {

    useEffect(() => {
        const data = localStorage.getItem("userData")
        if (data)
            userData.set(JSON.parse(data))
    }, [])

    const addCourse = (toAdd) => {
        let course = toAdd
        if (userData.courses.includes(course))
            return
        let newData = userData
        for (let i = 0; i < electiveGroups.length; i++)
            if (electiveGroups[i].courses.includes(course)) {
                newData.eGroup[i] += course.credits
                course.belongsTo = electiveGroups[i].name
            }
        if (requiredCourses.courses.includes(course)) {
            newData.required++
            course.belongsTo = requiredCourses.name
        }
        newData.courses.push(course)
        userData.set({...newData})
        localStorage.setItem("userData", JSON.stringify(userData))
    }
    const deleteCourse = (crs) => {
        let toDelete = crs
        delete toDelete.belongsTo
        let newData = userData
        for (let i = 0; i < electiveGroups.length; i++)
            if (electiveGroups[i].courses.includes(toDelete)) {
                newData.eGroup[i] -= toDelete.credits
                toDelete.belongsTo = electiveGroups[i].name
            }
        if (requiredCourses.courses.includes(toDelete)) {
            newData.required--
            toDelete.belongsTo = requiredCourses.name
        }
        newData.courses = newData.courses.filter((course)=>course!==toDelete)
        userData.set({...newData})
        localStorage.setItem("userData", JSON.stringify(userData))
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
            <CourseList courses={userData.courses} deleteCourse={deleteCourse}/>
            <Footer/>
        </>
    );
}

export default CourseSelection;