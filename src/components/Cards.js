import React, { useState } from 'react'
import Card from './Card';
function Cards(props) {
    const [likedCourses, setLikedCourses] = useState([]);
    let courseData = props.courses;
    let allCourses = [];
    let category = props.category;
    function getAllCourses(){
        if(category === "All"){
            Object.values(courseData).forEach((coursesCategory)=>{
                coursesCategory.forEach((courses)=>{
                    allCourses.push(courses);
                })
            })
            return allCourses;
        }
        else{
            return courseData[category];
        }
    }

    return (
        <div className='card-container'>
            {
                getAllCourses().map((course)=>{
                    return(<Card key={course.id} course={course} likedCourses = {likedCourses} setLikedCourses = {setLikedCourses}/>)
                })
            }
        </div>
    )
}

export default Cards
