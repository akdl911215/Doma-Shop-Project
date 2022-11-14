import React, { useState } from "react";
import { UserCard2 } from "./UserCard2";

const UserContainer = () => {
  const [user, setUser] = useState(null);

  // do some apiCall here

  return <div>{user && <UserCard2 user={user} />}</div>;
};

/* 
여기서는 user 객체를 null로 초기화했다. 이유는 <UserCard /> 를 쉽게 conditioning render (조건부 렌더) 할 수 있으며,
그와 동시에 초기 값으로 아무런 객체 reference 를 생성하지 않아 메모리를 아낄 수 있다는 장점 때문이다.

또한 data 가 없을 때 보여줄 spinner 와 메세지를 정하는 것도 더 쉬워진다.

UserContainer2에서 이어서 확인하자
*/
export default UserContainer;
