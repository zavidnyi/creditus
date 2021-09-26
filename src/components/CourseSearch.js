import React, {useState, useEffect} from "react";

const CourseSearch = ({courses, addCourse}) => {
    const [searchResults, setSearchResults] = useState([])
    const [query, setQuery] = useState("");
    const searchMatch = (input) => {
        if (input === "") {
            setSearchResults([]);
            return
        }
        const regExp = new RegExp(input)
        setSearchResults(courses.filter((course)=>{
            if (course.code.match(regExp) || course.name.match(regExp))
                return course
        }))
    }

    useEffect(()=>searchMatch(query), [query])
    return (
        <div className="courseSearch">
            <input type="text" placeholder="Add Course" value={query} onChange={(e)=>setQuery(e.target.value)} />
            <div className={searchResults.length === 0 ? "nil" : "autocomplete"}>
                {
                    searchResults.map(course => 
                        <div key={course.code} onClick={()=>{
                            addCourse(course)
                            setSearchResults([])
                            setQuery("")
                        }}>
                            <p>{course.name}</p>
                            <p className="courseCode">{course.code}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default CourseSearch;