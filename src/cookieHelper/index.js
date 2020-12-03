import cookie from 'react-cookies'


//cookie helper funcs

//load login user info
export const loginUser = () => {
    return cookie.load('userInfo')
}

// svae user info into the cookie
export const onLogin = (user) => {
    cookie.save('userInfo', user, {
        path: '/'
    })
}

//delete userinfo from cookie
export const logout = () => {
    cookie.remove('userInfo')
    window.location.href = '/Login'
}