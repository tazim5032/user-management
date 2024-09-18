import React, { useState } from 'react';
import { MdBlock, MdDelete } from "react-icons/md";
import ShowTable from './ShowTable';
import Navbar from './Navbar';

const Home = () => {

  return (
    <div className='mt-24'>
      <ShowTable></ShowTable>
    </div>
  );
};

export default Home;
