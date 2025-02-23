// import React, { useState, useEffect } from "react";
// import GoHomeButton from "webapp/common/component/GoHomeButton";
// import { useNavigate } from "react-router-dom";
// import styles from "../style/InvestingInfomationRegister.module.css";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import "../style/InvestingInfomationRegister.css";
// import { useCallback } from "react";
// import { UserAuthDataAPI } from "webapp/api/userApi";
// import { InvestingRgisterDataAPI } from "webapp/api/investingInfomationApi";
//
// const InvestingInfomationRegister = () => {
//   const navigate = useNavigate();
//   const [register, setRegister] = useState({
//     title: "",
//     writer:
//       sessionStorage.getItem("username") === null
//         ? ""
//         : sessionStorage.getItem("username"),
//     content: "",
//   });
//   useEffect(() => console.log("register : ", register), [register]);
//   useEffect(() => {
//     UserAuthDataAPI()
//       .then((res) => {
//         if (res?.data?.code === 200) {
//           console.log("로그인 상태 확인 완료");
//         } else {
//           if (window.confirm("로그인을 진행하시겠습니까?")) {
//             navigate("/users_signin");
//             sessionStorage.setItem(
//               "signinPage",
//               "/investing_infomation_register"
//             );
//           }
//         }
//       })
//       .catch((err) => console.error(`token, roles check error : ${err}`));
//   }, []);
//
//   const investRgisterUpload = () => {
//     UserAuthDataAPI()
//       .then((res) => {
//         if (res?.data?.code === 200) {
//           InvestingRgisterDataAPI(register)
//             .then((res) => {
//               if (res?.data?.code === 200) {
//                 alert(res?.data?.message);
//                 navigate("/investing_infomation_list");
//               } else {
//                 alert(res?.data?.message);
//               }
//             })
//             .catch((err) =>
//               console.error("register data api catch error : ", err)
//             );
//         } else {
//           if (window.confirm("로그인을 진행하시겠습니까?")) {
//             navigate("/users_signin");
//             sessionStorage.setItem(
//               "signinPage",
//               "/investing_infomation_register"
//             );
//           }
//         }
//       })
//       .catch((err) => console.error(`token, roles check error : ${err}`));
//   };
//
//   const handleChange = useCallback((e) => {
//     const { name, value } = e.target;
//     console.log(`name: ${name}, value: ${value}`);
//
//     setRegister({
//       ...register,
//       [name]: value,
//     });
//   });
//
//   return (
//     <>
//       <div className={styles.board}>
//         <div className={styles.active}>
//           <div className={styles.titleBox}>
//             <span>제목</span>
//             <input
//               placeholder="제목을 입력해주세요."
//               className={styles.titleInput}
//               name="title"
//               onChange={handleChange}
//             />
//           </div>
//           <div className={styles.contentBox}>
//             <span>본문</span>
//             <textarea
//               name="content"
//               onChange={handleChange}
//               className={styles.contentInput}
//             />
//             {/* <CKEditor
//               editor={ClassicEditor}
//               config={{
//                 placeholder: "내용을 입력하세요.",
//               }}
//               onReady={(editor) => {
//                 // You can store the "editor" and use when it is needed.
//                 console.log("Editor is ready to use!", editor);
//               }}
//               onChange={(event, editor) => {
//                 const data = editor.getData();
//                 console.log({ event, editor, data });
//                 setRegister({
//                   ...register,
//                   content: data.replace(/(<([^>]+)>)/gi, ""),
//                 });
//               }}
//               onBlur={(event, editor) => {
//                 console.log("Blur.", editor);
//               }}
//               onFocus={(event, editor) => {
//                 console.log("Focus.", editor);
//               }}
//             /> */}
//           </div>
//           <div className={styles.btnBox}>
//             <button className={styles.uploadBtn}>
//               <span className={styles.uploadText} onClick={investRgisterUpload}>
//                 업로드
//               </span>
//             </button>
//             <button className={styles.cancelBtn}>
//               <span
//                 className={styles.cancelText}
//                 onClick={() => {
//                   if (window.confirm("작성을 취소하겠습니까?")) {
//                     navigate("/investing_infomation_list");
//                   }
//                 }}
//               >
//                 취소
//               </span>
//             </button>
//             <GoHomeButton />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default InvestingInfomationRegister;
