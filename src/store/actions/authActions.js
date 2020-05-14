import firebase from '../../api/firebase'

export const SIGN = 'sign'


export const authenticate = (userId) => {
    return dispatch => {
        dispatch({ type: SIGN, userId })
    }
}


export const signup = (email, username, password) => {
    return async dispatch => {

        await firebase.auth().createUserWithEmailAndPassword(email, password)

        firebase.auth().onAuthStateChanged(async user => {
            if (user) {
                // User is signed in.
                var email = user.email
                var uid = user.uid
                // ...

                await firebase.database().ref('users/' + uid).set({
                    id: uid,
                    email: email,
                    username: username,
                });

                dispatch(authenticate(uid));
            }
        });
    }
}

export const login = (email, password) => {
    return async dispatch => {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        firebase.auth().onAuthStateChanged(async user => {
            if (user) {
                // User is signed in.
                console.log('logged')
                var uid = user.uid

                // ...

                dispatch(authenticate(uid));
            }
        });
    };
};


