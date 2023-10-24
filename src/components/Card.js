import React from 'react'
import {FcLike, FcLikePlaceholder} from 'react-icons/fc';
import { toast } from 'react-toastify';
function Card(props) {
    let course = props.course;
    let description = course.description.substring(0, 100) + "....";
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    function clickHandler(){
        if(likedCourses.includes(course.id)){
            // setLikedCourses((prev)=>{
            //     prev.filter((cid)=>{
            //         return cid !== course.id;
            //     })
            // })

            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("Liked Removed");
        }
        else{
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }
            else{   
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }
    return (
        <div className='card'>
            <div className='card-image-container'>
                <img src={course.image.url} alt={course.image.alt}></img>
                <div className='heart-container'>
                    <button onClick={clickHandler}>
                    {
                        likedCourses.includes(course.id) ? <FcLike fontSize='1.75rem' /> : <FcLikePlaceholder fontSize='1.75rem'/>
                    }
                    </button>
                </div>
            </div>
            <div className='card-details'>
                <h3>{course.title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card
