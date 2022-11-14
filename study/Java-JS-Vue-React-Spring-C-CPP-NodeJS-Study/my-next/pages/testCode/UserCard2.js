import React, { useState } from "react";
import PropType from "prop-types";
// prop-types : component에 들어온 값이 유효한 값이진 prop의 type을 미리 정의
// 미리 정해놓을 경우 잘못된 값이 들어오는 것을 막아줄 수 있다

// 부모 컴포넌트에서의 COnditioning Render (조건부 렌더)
const UserCard2 = ({ user }) => {
  return (
    <>
      <ul>
        <li>{user.name}</li>
        <li>{user.age}</li>
        <li>{user.email}</li>
      </ul>
    </>
  );
};

UserCard2.propType = {
  user: PropType.object.isRequired,
};

export default UserCard2;
