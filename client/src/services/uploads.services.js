import axios from 'axios'

class UploadsService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/upload',
            withCredentials: true
        })
    }

    uploadImage = imageFromForm => this.app.post('/image', imageFromForm)
}

export default UploadsService