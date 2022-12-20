import axios from 'axios';
import React, { useEffect, useState } from 'react';

const List = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/user/getUserList')//포트 다르니가 풀주소
            .then((res) => {//주소가서 res 받아오기
                setList(res.data)})//setList에 담기            
            .catch((error) => console.log(error));


    }, []);
    return (
        <div>
            <table border="1" >
                <thead>
                    <tr>
                   
                        <th width="150">이름</th>
                        <th width="150">아이디</th>
                        <th width="150">비밀번호</th>
                    </tr> 
                </thead>
                <tbody>
                    {
                        list.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td align='center'>{item.name}</td>
                                    <td align='center'>{item.id}</td>
                                    <td align='center'>{item.pwd}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
        
            </table>
        </div>
    );
};

export default List;