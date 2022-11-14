const CallBackHell = () => {
   // Callback Hell example
    class UserStroage {
        logineUser(id, password, onSuccess, onError){
            setTimeout(()=> {
                if(
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    onSuccess(id)
                } else {
                    onError(new Error('not found'))
                }
            },2000)
        }

        getRoles(user, onSuccess, onError) {
            setTimeout(() => {
                if (user === 'ellie') {
                    onSuccess({ name: 'ellie', role: 'admin '})
                } else {
                    onError(new Error('no access'))
                }
            },1000)
        }
    }

    const userStorage = new UserStroage();
    // promt 검색
    const id = prompt('enter you id');
    const password = prompt('enter your password');
    userStorage.logineUser(
        id,
        password,
        user => {
            // eslint-disable-next-line no-unused-expressions
            userStorage.getRoles(
                user,
                userWithRole => {
                    alert('Hello ${userWithRole.name}, ' +
                        'you hava a ${user.role} role');
                },
                error => {
                    console.log(error);
                }
            ),
            error => {
                console.log(error);
            }
        }
    );

    return (
        <div className="CallBackHell">
            <p>CallBackHell</p>
        </div>
    )

}
export default CallBackHell