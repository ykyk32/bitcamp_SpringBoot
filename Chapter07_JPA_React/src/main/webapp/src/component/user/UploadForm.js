import axios from 'axios';
import React, { useRef, useState } from 'react';

const UploadForm = () => {
    const imgRef = useRef()

    const [file, setFile] = useState('')
    const [showImgSrc, setShowImgSrc] = useState();
    const [uploadImgSrc, setUploadImgSrc] = useState();

    const onCamera = (e) => {
        imgRef.current.click() // 트리거 역할- 클릭이벤트
    }
    const readURL =(input) => {
        var reader = new FileReader();
        reader.readAsDataURL(input.files[0])//읽어오기

        reader.onload = () => {//읽어온 거 뿌리기
            console.log(input.files[0])
            setShowImgSrc( reader.result )
            setFile(input.files[0])
        }
    } 

    const onUploadSubmit =() => {
        var formData = new FormData()
        formData.append('img', file)

        axios
        .post('http://localhost:8080/user/upload2', formData, {//formdata보낸다
            headers: {
                'content-Type': `multipart/form-data`
            }
        })
        .then(res => setUploadImgSrc(res.data))
        .catch(error => console.log(error))
    }

    return (
        <div>
            <img src={ showImgSrc } width='300' height='300' /> &emsp;            
            <img src='../image/camera.svg' width='50' height='50' onClick={ onCamera } alt='카메라' /> {/* 프로그램의 시작점 index.html 가 위치기준 */}
            <input type='file' name='img' ref={ imgRef } onChange={ e => readURL(e.target) } style={{ visibility: 'hidden'}}/> {/* 안보이게 감추고 카메라아이콘에 파일선택 일임*/}
            <br/>
            <button onClick={ onUploadSubmit }>이미지 등록</button>
            <br/>
            <h4>이미지 등록후</h4>  
            <img src = { uploadImgSrc } width='200' height='200' />
        </div>
    );
};

export default UploadForm;