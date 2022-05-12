import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import AuthService from "./service/auth_service";
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';

const authService = new AuthService();
const imageUploader = new ImageUploader();
const FileInput = props => (            //컴포넌트를 prop으로 보냄. 이렇게하면 원하는 것을 props마다 변경해주지 않고 여기서만 바꿔주면 됨.
  <ImageFileInput {...props} imageUploader={imageUploader} /> //ImageFileInput에 기존 명시된 props들을 전달하고, imageUploader 컴포넌트를 전달하는 함수.
)

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput}/>
  </React.StrictMode>,
  document.getElementById("root")
);
