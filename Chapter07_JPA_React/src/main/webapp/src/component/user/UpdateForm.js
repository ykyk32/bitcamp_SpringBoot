import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import mainImg from '../../img/qq.png';
import styles from '../../css/UpdateForm.module.css';

const UpdateForm = () => {
    const [searchId, setSearchId] = useState('')
    const [form, setForm] = useState({
        name: '',
        id:'',
        pwd: ''
    })  
    const { name, id, pwd } = form

    const [result, setResult] = useState('')    
    const [show, setShow] = useState(true)

    const onSearch =() => {
       axios
            .get(`http://localhost:8080/user/getUser?id=${searchId}`)
            .then((res)=> {
                res.data===null ?
                    setSearchId('') || setResult('찾는아이디없다') || setShow(true) // ||- 연결연산자
                    :
                    setForm(res.data) || setResult('') || setShow(false)     
            })   
            .catch(error => console.log(error)); 
    }

    const [nameDiv, setNameDiv] = useState('')    
    const [pwdDiv, setPwdDiv] = useState('')

    const onInput= (e) => {
        const { name, value }= e.target
        setForm({
            ...form,
            [name] : value
        })
    }

    const onUpdateSubmit =(e) => {
        e.preventDefault()//일단 submit막기

        var sw=1;
        if(!name){
            setNameDiv('이름을 입력하세요')
            sw = 0            
        }       
        if(!pwd){
            setPwdDiv('비번를 입력하세요')
            sw = 0
        }

        if(sw === 1){
            axios.post('http://localhost:8080/user/update', null, {params:form})
                 .then(() =>{
                    alert("수정완료.");
                    navigate("/user/list");
                 })
                 .catch(error => console.log(error))
        }
    }

    const navigate = useNavigate()

    return (
        <>
        <h3>
           <Link to='/'>
                {/* <img src='../image/qq.png'width='50' height=''50' style={{ cursor: 'pointer' }}/> */}
                <img src={ mainImg } width="50" height= "50" style={{ cursor: 'pointer' }} />
            </Link>
            회원정보수정
        </h3>
        <hr/>

        <p>
            수정할 아이디 입력 : &nbsp;
            <input type="text" name="searchId" value={ searchId } onChange={e => setSearchId(e.target.value)}/>
            &emsp;
            <button  onClick={ onSearch } >검색</button>
        </p>

        <div id="resultDiv" style={{ color: 'red', fontWeight: 'bold' }}>{ result }</div>         

        
        <div id='updateDiv' hidden = { show }>
            <form className={styles.updateForm} onSubmit={ onUpdateSubmit }>
            <table>
                    <tbody>
                        <tr>
                            <td>이름</td>
                            <td>
                                <input type="text" name="name" value={ name } onChange={ onInput }/>
                                <div id="nameDiv" >{ nameDiv }</div>
                            </td>
                        </tr>
                        <tr>
                            <td>아이디</td>
                            <td>
                            <input type="text" name="id" id="id" value={ id } readOnly/>
                            
                            </td>
                        </tr>
                        <tr>
                            <td>비밀번호</td>
                            <td>
                            <input type="password" name="pwd" value={ pwd } onChange={ onInput }/>
                            <div id="pwdDiv">{ pwdDiv }</div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='2' align='center'>
                                <button>등록</button>
                                <button>취소</button>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </form>           
        </div>

        </>
    );
};

export default UpdateForm;