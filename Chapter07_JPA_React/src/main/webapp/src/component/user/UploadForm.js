import React from 'react';

const UploadForm = () => {

    const onUploadBtn = useCallback((e: React.ChangeEvent<HTMLInputElement>) =>
        {
            if(!e.target.files){
                return;
            }
            console.log(e.target.files[0].name);
        }
    ,[])
       
    

    return (
        <div>
            <form id = 'uploadForm'>
                <div id="imgDiv"></div>
                <img id ="showImg" width="300" height="300"></img>
                <img id="camera" src="../image/camera.svg" width="50" height="50" alt="카메라" onClick={ onUploadBtn }></img>
                <input type="file" name="img" id="img"></input>
                <br/><br/>
                <input type="button" id="uploadBtn" value="이미지 등록"></input>
                <br/>
                <h4>이미지 등록 후</h4>
                <div id="imgDiv"></div>
            </form>
        </div>
    );
};

export default UploadForm;