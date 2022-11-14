import React from "react";
import PropType from "prop-types";
// prop-types : component에 들어온 값이 유효한 값이진 prop의 type을 미리 정의
// 미리 정해놓을 경우 잘못된 값이 들어오는 것을 막아줄 수 있다

// 제약없는 props와 빈 객체({})
const UserCard = ({ user }) => {
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

UserCard.propType = {
  user: PropType.object,
};

UserCard.defaultProps = {
  user: {},
};

/*
현재 컴포넌트는 prop(user) 없이는 아무 기능을 하지 못한다. 하지만 아무 prop을 require하고 있지 않으면
Cannot access property 'name' of undefined 에러를 발생한다. 방지하기 위해 default value로 {}를 두고 있다.

이처럼 {}를 default value로 두게되면 component는 빈 객체를 가지고 render된다. 
즉, 화면상의 빈 공간을 보여주는 것이다. 하지만 만약 fallback value 나 skeleton loading 을 제공하지 않는다면,
data 없이 UserCard 컴포넌트를 렌더할 이유가 없다.

무엇이 요구되어야 하고 무엇이 요구되지 않아도 되는가?

prop 중 무엇이 꼭 필요하고 무엇은 필수가 아닌지 알아두어야 한다. 그리고 필수 prop가 없다면 컴포넌트
reder가 되지 않도록 해야한다.
*/

export default UserCard;
