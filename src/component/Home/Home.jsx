/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import "./Home.css"
import Cart from '../Cart/Cart';

const Home = () => {
    const [allCoursess,setAllcourses]=useState([]);
    const [seletedCourses,setseletedCourses] =useState([]);
    const [remaining,setRemaining]=useState(0);
    const [totalCredit,setTotalCredit]=useState(0)

    useEffect(()=>{
        fetch('/public/data.json')
        .then((res)=>res.json())
        .then((data)=>setAllcourses(data));
    },[]);

    const handleSelectCourses =(courses)=>{
        const isExist =seletedCourses.find((item)=>item.id==courses.id);
        let count=courses.credit;

        if (isExist){
            return alert('already booked');
        } else{
            seletedCourses.forEach((item)=>{
                count=count+item.credit;
            });

            const totalRemaining = 20 - count;
            
            if(count>20){
                 alert('taka shesh')
            }
            else{
                setTotalCredit(count);
                setRemaining(totalRemaining);
                setseletedCourses([...seletedCourses,courses]);
            }
           
        }
    };


        


    
    

    return (
        
        <div className='container'>
            <h1 className='header'>Course Registration</h1>
            <div className='home-container'>
                <div className='card-container grid grid-cols-3'>
                    {
                        allCoursess.map(courses =>(
                        <div key={courses.id} className='card'>
                            <div className='card-img'>
                            <img className='photo' src={courses.image} alt="" />
                        </div>
                        <h2 className='course-title'>{courses.courseTitle}</h2>
                        <p className= 'course-details text-gray-500  text-base font-normal  bg-transparent  border-gray-300 '>{courses.courseDetails}</p>
                        <div className='info'>
                            <p>Price: {courses.price}</p>
                            <p className='credit'>Credit: {courses.credit}hr</p>
                        </div>
                        <button onClick={()=>handleSelectCourses(courses)} className='card-btn'>select</button>

                    </div>))

                    }
                </div>

                <div className='cart'>
                    
                    <Cart seletedCourses={seletedCourses}remaining={remaining} totalCredit={totalCredit}></Cart>
                </div>
            </div>

            
        </div>
    );
};

export default Home;