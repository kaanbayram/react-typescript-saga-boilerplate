import axios from "axios";
import { type } from "os";

interface postsResponse {
  datas: string;
}

export async function fetchPosts(
    posts: string,
    id: string
): Promise<any> {
//   return await axios.get(`https://api.lyrics.ovh/v1/${posts}/${id}`);
return await axios.get(`https://jsonplaceholder.typicode.com/${posts}/${id}`);
}
