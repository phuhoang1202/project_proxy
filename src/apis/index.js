// src/api.js
import axios from 'axios'
import { constants as c } from '../constants'
import { getToken } from '../utils/auth'

const exceptPrefix = ['/login', '/register']
const checkEndPoint = (endpoint) => {
  for (const prefix of exceptPrefix) {
    if (endpoint.includes(prefix)) {
      return true
    }
  }
  return false
}

export const callApi = (endPoint, method, body) => {
  if (checkEndPoint(endPoint) === false) {
    axios.interceptors.request.use(
      (config) => {
        const token = getToken()
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      },
    )
    axios.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        if (error?.response?.data?.code === 404) {
          // window.location.replace("/khong-tim-thay-trang");
        } else if (error?.response?.data?.code === 401) {
          // removeToken();
          // history.push("/login")
        }
        return Promise.reject(error)
      },
    )
  }
  return axios({
    method,
    url: `${c.API_URL}${endPoint}`,
    data: body,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}


export const callApiNoAuthen = (endPoint, method, body) => {
  return axios({
    method,
    url: `${c.API_URL}${endPoint}`,
    data: body,
  })
}




