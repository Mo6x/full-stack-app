import axios from "axios";


const upload = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_present", "mo6x");

    try{
    const res = await axios.post(

    );

    const { url } = res.data;
    return url;
    } catch (err) {
    console.log(err);
    }
 }
  
export default upload;
