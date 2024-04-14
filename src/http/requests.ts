import axios, { AxiosHeaders } from "axios";

const http = axios.create();

const ifData = function (data: any, callback: Function = null, error: any) {
    if (data) {
        if (callback) {
            return callback(null, data)
        } else {
            return { data: data }
        }
    } else {
        if (callback) {
            return callback(error, null)
        } else {
            return { error: error }
        }
    }
}

export const get = async function (url: string, options?: { token?: string }, callback?: Function) {
    const headers: AxiosHeaders["headers"] = {
        "Content-Type": "application/json",
        "Access_Key": process.env.API_ACCESS_KEY
    }

    if (options?.token) {
        headers.Authorization = `Bearer ${options.token}`
    }

    const { data } = await http.get(url, {
        method: 'GET',
        headers: headers
    })

    const error = new Error("Failed in getting data.")

    return ifData(data, callback, error)
}

export const post = async function (url: string, options?: { token?: string, data: object }, callback?: Function) {
    const headers: AxiosHeaders["headers"] = {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access_Key": process.env.API_ACCESS_KEY
    }

    if (options?.token) {
        headers.Authorization = `Bearer ${options.token}`
    }

    const { data } = await http.post(url, options?.data || null, {
        method: 'POST',
        headers: headers
    })

    const error = new Error("Failed in posting data.")

    return ifData(data, callback, error)
}

export const put = async function (url: string, options?: { token?: string, data: object }, callback?: Function) {
    const headers: AxiosHeaders["headers"] = {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access_Key": process.env.API_ACCESS_KEY
    }

    if (options?.token) {
        headers.Authorization = `Bearer ${options.token}`
    }

    const { data } = await http.put(url, options?.data || null, {
        method: 'PUT',
        headers: headers
    })

    const error = new Error("Failed in updating data.")

    return ifData(data, callback, error)
}

export const del = async function (url: string, options?: { token?: string }, callback?: Function) {
    const headers: AxiosHeaders["headers"] = {
        "Content-Type": "application/json",
        "Access_Key": process.env.API_ACCESS_KEY
    }

    if (options?.token) {
        headers.Authorization = `Bearer ${options.token}`
    }

    const { data } = await http.delete(url, {
        method: 'DELETE',
        headers: headers
    })

    const error = new Error("Failed in deleting data.")

    return ifData(data, callback, error)
}