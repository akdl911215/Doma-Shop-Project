import React, { useState } from "react";
import { UserCard2 } from "./UserCard2";

const UserContainer2 = () => {
  const [user, setUser] = useState(null);

  // do some apiCall here

  return <div>{user ? <UserCard2 user={user} /> : "No data abailable"}</div>;
};

/* 
여기서는 user 객체를 null로 초기화했다. 이유는 <UserCard /> 를 쉽게 conditioning render (조건부 렌더) 할 수 있으며,
그와 동시에 초기 값으로 아무런 객체 reference 를 생성하지 않아 메모리를 아낄 수 있다는 장점 때문이다.

또한 data 가 없을 때 보여줄 spinner 와 메세지를 정하는 것도 더 쉬워진다.

반드시 기억해야할 것은 이러한 검사를 해당 컴포넌트에서 보다 부모 컴포넌트에서 하는 것이 훨씬 명확하다는 점이다.
(단지 spinner 와 message 를 보여주기 위해 헛되이 컴포넌트를 렌더하는 경우를 수도 없이 본 것 같다.)

API Call 등을 통해 user 객체를 fetch 하고 무엇을 render 할지 결정하는 것은 <UserContainer /> 의
*/
export default UserContainer2;
