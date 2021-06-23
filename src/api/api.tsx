import axios from 'axios';

const apiRoute = '//localhost:8080'

export async function get<T>(path: string): Promise<T> {
    const { data } = await axios.get(path);
    return data;
}

export async function post<T>(path: string): Promise<T> {
    const { data } = await axios.post(path );
    return data;
}

export {apiRoute}
