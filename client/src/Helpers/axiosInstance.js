import axios from 'axios';


const BASE_URL="https://5000-idx-online-vscode-1728917812509.cluster-bec2e4635ng44w7ed22sa22hes.cloudworkstations.dev/api/v1";


const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true // This allows cookies to be sent
});


export default axiosInstance;