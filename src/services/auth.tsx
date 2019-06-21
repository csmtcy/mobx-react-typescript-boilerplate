import axios from 'axios';
import Global from './../utils/global';

export async function login(username: string, password: string): Promise<Object | boolean> {
    try {
        let path = "auth/login";
        return await axios.post(Global.getConfig("host")+path, {username, password});
    } catch {
        return null;
    }
}

export async function test():Promise<any | boolean> {
    try {
        let url = "https://jsonplaceholder.typicode.com/todos/1"
        return await axios.get(url);
    } catch {
        return null
    }
}
