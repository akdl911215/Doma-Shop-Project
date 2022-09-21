import React, { useState } from "react";
import {
  Form,
  TextArea,
  Button,
  Table,
  Container,
  Input,
  Image,
  Reveal,
  Rating,
} from "semantic-ui-react";
import GoHomeButton from "webapp/common/component/GoHomeButton";
import { useNavigate } from "react-router-dom";
import { client } from "webapp/api/Client";
import styles from "../style/InvestingInfomationRegister.module.css";

const InvestingInfomationRegister = () => {
  const [selectedFile, setSelectedFile] = useState([]);
  const navigate = useNavigate();

  const addImage = (event) => {
    const nowSelectImageList = event.target.files;
    const nowImageURLList = [...selectedFile];
    for (let i = 0; i < nowSelectImageList.length; i++) {
      const nowImageUrl = URL.createObjectURL(nowSelectImageList[i]);
      nowImageURLList.push(nowImageUrl);
    }
    setSelectedFile(nowImageURLList);
  };

  const [register, setRegister] = useState({
    title: "",
    writer: "",
    content: "",
    viewCount: "",
  });

  const handleFileUpload = () => {
    // const formData = new FormData();
    // for (let i = 0; i < selectedFile.length; i++) {
    //   formData.append("myfile", selectedFile[i], selectedFile[i].name);
    // }
    // console.log("formData : ", formData);
    // const config = {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // };
    // axios
    //   .post("api/uploadfile", formData, config)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // if(res) navigate('product_infomation_list')
    // navigate("/product_infomation_list");
  };

  // https://okky.kr/events/new
  // https://kr.investing.com/
  return (
    <>
      <div>레지스터</div>
    </>
  );
};
export default InvestingInfomationRegister;
