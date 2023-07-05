import React from 'react';
import { AiFillInstagram } from 'react-icons/ai' ;


const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
     <AiFillInstagram fontSize={27} color="#DCCA87" />
    <p className="p__cormorant">{title}</p>
   
  </div>
);

export default SubHeading;