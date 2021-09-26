import axios from 'axios'

class AuthService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/auth',
            withCredentials: true
        })
    }

    login = (email, pwd) => this.app.post('/login', { email, pwd })
    signup = (email, pwd, name, surname ) => this.app.post('/signup', { email, pwd, name, surname  })
    logout = () => this.app.get('/logout')
    isLoggedIn = () => this.app.get('/isLoggedIn')
}

export default AuthService