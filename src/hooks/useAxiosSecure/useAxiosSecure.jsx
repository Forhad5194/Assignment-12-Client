import axios from "axios";

 export const AxiosSecure = axios.create({
    baseURL:'http://localhost:5000'
 })
const useAxiosSecure = () => {
    return AxiosSecure;
};

// eslint-disable-next-line react-refresh/only-export-components
export default useAxiosSecure;