import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import mainImg from '../../img/qq.png';
import styles from '../../css/WriteForm.module.css';
import axios from 'axios';

const WriteForm = () => {
    const [form, setForm] = useState({
        name: '',
        id:'',
        pwd: ''
    })    
    const { name, id, pwd } = form

    const [nameDiv, setNameDiv] = useState('')
    const [idDiv, setIdDiv] = useState('')
    const [pwdDiv, setPwdDiv] = useState('')
 

    const onInput= (e) => {
        const { name, value }= e.target
        setForm({
            ...form,
            [name] : value
        })
    }

    const onWriteSubmit = (e) => {
        e.preventDefault()//일단 submit막기

        var sw=1;
        if(!name){
            setNameDiv('이름을 입력하세요')
            sw = 0            
        }
        if(!id){
            setIdDiv('아이디를 입력하세요')
            sw = 0
        }
        if(!pwd){
            setPwdDiv('비번를 입력하세요')
            sw = 0
        }

        

        
        
        //[방법1] (userController 바꿔야한다)        
        //  if(sw === 1){
        //     axios.post('http://localhost:8080/user/write', null,{
        //        params: {
        //             id: id,
        //             name: name,
        //             pwd: pwd
        //         }
        //     })
        //          .then(() =>{
        //             alert("회원가입을 축하합니다.");
        //             navigate("/user/list");
        //          })
        //          .catch(error => console.log(error))
        // }
        

       
        
       //[방법2]
    //    if (sw === 1) {
    //        axios.post(
    //                "http://localhost:8080/user/write",
    //                "name=" + name + "&id=" + id + "&pwd=" + pwd
    //            )
    //            .then(() => {
    //                alert("회원가입 완료");
    //                navigate("/user/list");
    //            })
    //            .catch((error) => console.log(error));
    //    }
       
       

        
        //[방법3]
        if(sw === 1){
            axios.post('http://localhost:8080/user/write', null, {params:form})
                 .then(() =>{
                    alert("회원가입을 축하합니다.");
                    navigate("/user/list");
                 })
                 .catch(error => console.log(error))
        }
        
    }

    const onReset = () => {
        setForm({
            name: '',
            id: '',
            pwd: ''
        })
    } 



    const checkId = () => {
        axios
        .get(`http://localhost:8080/user/isExistId?id=${id}`)
        .then(res => {
            setIdDiv(res.data === 'non_exist' ? '사용 가능' : '사용 불가능')           
        })
        .catch(error => console.log(error))

    }

    const navigate = useNavigate()
    

    return (
        <div>
            <h1>
                <Link to='/'>
                    {/* <img src='../image/qq.png'width='100' height="100" style={{ cursor: 'pointer' }}/> */}
                    <img src={ mainImg } width="50" height= "50" style={{ cursor: 'pointer' }} />
                </Link>
                회원가입
            </h1>
            <hr/>
            <form className={ styles.writeForm } >
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
                            <input type="text" name="id" id="id" value={ id } onChange={ onInput } onBlur={ checkId }/> {/*onBlur - 포커스 나갈때*/}
                            <div id="idDiv">{ idDiv }</div>
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
                                <button onClick={ onWriteSubmit }>등록</button>
                                <button onClick={ onReset }>취소</button>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </form>


          
        </div>
    );
};

export default WriteForm;