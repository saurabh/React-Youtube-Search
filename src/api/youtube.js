import axios from 'axios';

const KEY = 'AIzaSyDCPqDUpseoEhWFejNv9ya6dIY5Ky_pnuo'; //access restricted to localhost and react-tube.surge.sh via googleDev console.

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: '5',
        key: KEY,
    }
})
