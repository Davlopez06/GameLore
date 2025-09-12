import axios from "axios"

export const get = async (url: string) => {
    const { data } = await axios.get(url)
    return await data;
}