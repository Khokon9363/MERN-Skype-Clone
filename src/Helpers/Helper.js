export function setUser(user){
    try {
        localStorage.setItem('user', JSON.stringify(user))
        return getUser() 
    } catch (err) {
        return err.message
    }
}

export function getUser(){
    try {
        return JSON.parse(localStorage.getItem('user')) ?? {}
    } catch (err) {
        return err.message
    }
}

export function removeUser(){
    try {
        return localStorage.removeItem('user')
    } catch (err) {
        return err.message
    }
}