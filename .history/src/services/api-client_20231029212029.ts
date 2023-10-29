import axios from "axios";



export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '17f1ca3852984bab99731a1b7a7798e1'
    }
})