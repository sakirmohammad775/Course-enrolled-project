/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "./Cart.css";

const Cart = ({seletedCourses,remaining,totalCredit}) => {
    console.log(seletedCourses);

    return (
        <div className='right-part'>
           
           <h5 className='remaining'>Credit Hour Remaining {remaining} hr</h5>
           <hr />
           <h5 className='course-name pb-5 pt-5'>Course Name</h5>
           {seletedCourses.map((courses)=>(
            <li key={courses.id}>{courses.courseTitle}</li>
           ))} 
           <hr />
           <h5 className='credit-hour pb-5 pt-5'>Total Credit Hour:{totalCredit}</h5>
           
        </div>
    );
};

export default Cart;