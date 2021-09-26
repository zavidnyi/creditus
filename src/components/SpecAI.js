import React, {useState, useEffect} from 'react';
import { ref, onValue } from "firebase/database";
import database from '../firebase/firebase';
import CourseSelection from './CourseSelection';
import Header from './Header';
import Tracker from './Tracker';
import { refFromURL } from '@firebase/database';

const SpecAI = () => {
    const [requiredCourses, setRequiredCourses] = useState({})
    const [electiveGroup1, setElectiveGroup1] = useState({})
    const [electiveGroup2, setElectiveGroup2] = useState({})
    const [electiveGroup3, setElectiveGroup3] = useState({})
    const [takenCourses, setTakenCourses] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        const aiRef = ref(database, "spec-ai/")
        onValue(aiRef, (snapshot)=>{
            const data = snapshot.val();
            setRequiredCourses(data["Required Courses"])
            setElectiveGroup1(data["Elective Group 1"])
            setElectiveGroup2(data["Elective Group 2"])
            setElectiveGroup3(data["Elective Group 3"])
            setTakenCourses({
                required: 0,
                eGroup: [0,0,0],
                courses: []
            })
            setIsLoading(false)
        }, {onlyOnce: true})
    }, [])

    return (
        <>
            <Header specName="Artificial Intellifence"/>
            {
                isLoading ?
                <p>Loading</p> :
                <>
                    <div className="tracker-group">
                        <Tracker name="Required Courses:" currentValue={takenCourses.required} maxValue={requiredCourses.requiredNumber}/>
                        <Tracker name="Elective Group 1:" currentValue={takenCourses.eGroup[0]} maxValue={electiveGroup1.credits}/>
                        <Tracker name="Elective Group 2:" currentValue={takenCourses.eGroup[0]} maxValue={electiveGroup2.credits}/>
                        <Tracker name="Elective Group 3:" currentValue={takenCourses.eGroup[0]} maxValue={electiveGroup3.credits}/>
                    </div>
                    <CourseSelection
                        requiredCourses = {{
                            ...requiredCourses,
                            set: setRequiredCourses
                        }}
                        electiveGroups={[
                            {
                                ...electiveGroup1,
                                set: setElectiveGroup1
                            },
                            {
                                ...electiveGroup2,
                                set: setElectiveGroup2
                            },
                            {
                                ...electiveGroup3,
                                set: setElectiveGroup3
                            },
                        ]}
                        userData={{...takenCourses, set: setTakenCourses}}          
                    />
                </>
            }
        </>
    );
}

export default SpecAI;