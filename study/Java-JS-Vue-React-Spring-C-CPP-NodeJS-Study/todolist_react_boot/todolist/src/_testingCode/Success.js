import React from 'react';

const Success = ({ location }) => {
    return (
        <>
            <div className="success">
                제목:
                {location.state.title}
                내용:
                {location.state.body}
            </div>
        </>
    );
};
export default Success;
