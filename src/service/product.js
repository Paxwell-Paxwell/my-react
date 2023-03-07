import axios from "axios";

export default async function product() {
    let data = [];
    try {
        const resp = await axios.get("https://fakestoreapi.com/products");
        data = resp.data;
    }
    catch (err) {
        console.log(err);
    }
    return data;
}

