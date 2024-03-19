import axios from "axios";
const imageApi = import.meta.env.VITE_IMGBB_API
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageApi}`
export const uploadImage = async({image}) =>{
    const formData = new FormData();
    formData.append('image', image);
    const {data} = await axios.post(imageHostingApi,formData)

    return data.data.display_url;
}