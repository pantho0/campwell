import axios from "axios"

const useAxiosPublic = () => {
    const axiosPublic = axios.create({
        baseURL : "https://camp-server-two.vercel.app/api/v1"
    })
    return axiosPublic;
};

export default useAxiosPublic;