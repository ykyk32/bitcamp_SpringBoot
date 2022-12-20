import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './component/main/Index';
import DeleteForm from './component/user/DeleteForm';
import List from './component/user/List';
import UpdateForm from './component/user/UpdateForm';
import WriteForm from './component/user/WriteForm';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <>  
            {/* 화면에 보이는 영역 */}
            <Routes>
            <Route path='/' element={<Index />} />
            <Route path="/user/writeForm" element={<WriteForm />} />
            <Route path="/user/list" element={ <List /> } />  
            <Route path="/user/updateForm" element={<UpdateForm /> }/>  
            <Route path="/user/deleteForm" element={<DeleteForm />} />
           
         
            </Routes>
        </>
      </BrowserRouter>      
    </div>
  );
};

export default App;