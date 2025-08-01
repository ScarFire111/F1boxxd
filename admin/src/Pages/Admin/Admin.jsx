import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import {Routes,Route} from 'react-router-dom'
import Addproduct from '../../Components/Addproduct/addproduct'
import Listproduct from '../../Components/ListProduct/Listproduct'

const Admin = () => {
  return (
    <div className='admin'>
       <Sidebar/>   
       <Routes>
        <Route path='/addproduct' element={<Addproduct/>}/>
        <Route path='/listproduct' element={<Listproduct/>}/>
       </Routes>
    </div>
  )
}

export default Admin