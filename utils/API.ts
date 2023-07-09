import axios from 'axios'


export default axios.create({
    baseURL:'http://192.168.8.105:3000',
    timeout:80000,
    headers:{
        Accept: 'application/json'
    }
})