import axios from 'axios';

export const getList = () =>{
    return  axios.get('https://api.spacexdata.com/v3/launches')
}