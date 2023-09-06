import axios from "axios"

export const api = axios.create({
    baseURL: 'https://github.com/vinicius201717/githublog/issues'
})