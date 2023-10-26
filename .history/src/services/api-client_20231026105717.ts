import axios from "axios";

axios.create({
    baseURL: 'https://api.rawg.io/api/games'
    params: {
        key: '17f1ca3852984bab99731a1b7a7798e1'
    }
})