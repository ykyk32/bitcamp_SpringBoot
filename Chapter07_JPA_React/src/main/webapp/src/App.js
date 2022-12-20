import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './main/Index';
import List from './user/List';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <>  
            {/* 화면에 보이는 영역 */}
            <Routes>
            <Route path='/' element={<Index />} />
            {/* <Route path="/user/write" element={<WriteForm />} /> */}
            <Route path="/user/list" element={ <List /> } />  
            </Routes>
        </>
      </BrowserRouter>      
    </div>
  );
};

export default App;