import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import mainImg from '../../img/qq.png';
import styles from '../../css/DeleteForm.module.css';

const DeleteForm = () => {
    const [searchId, setSearchId] = useState('')
    const [result, setResult] = useState('')  

    const onSearch =() => {
        axios
             .get(`http://localhost:8080/user/getUser?id=${searchId}`)
             .then((res)=> {
                 res.data===null ?
                     setSearchId('') || setResult('찾는아이디없다') // ||- 연결연산자
                     :
                     axios
                        .get(`http://localhost:8080/user/delete?id=${searchId}`)
                        .then(() => {
                            setResult('')
                            alert("삭제완료")
                            navigate("/user/list")
                        })
                        .catch(error => console.log(error)) 
             })   
             .catch(error => console.log(error)); 
    }
    
     const navigate = useNavigate()
    
    return (
        <div>
              <h3>
           <Link to='/'>
                {/* <img src='../image/qq.png'width='50' height=''50' style={{ cursor: 'pointer' }}/> */}
                <img src={ mainImg } width="50" height= "50" style={{ cursor: 'pointer' }} />
            </Link>
            회원정보삭제
        </h3>
        <hr/>

        <p>
            삭제할 아이디 입력 : &nbsp;
            <input type="text" name="searchId" value={ searchId } onChange={e => setSearchId(e.target.value)}/>
            &emsp;
            <button  onClick={ onSearch } >검색</button>
        </p>

        <div id="resultDiv" style={{ color: 'red', fontWeight: 'bold' }}>{ result }</div>    
        </div>
    );
};

export default DeleteForm;