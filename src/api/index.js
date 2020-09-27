import axios from 'axios'
import {
  Message
} from 'element-ui'
//添加一个请求拦截器
axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 添加一个响应拦截器
axios.interceptors.response.use(
  function (response) {
    // store.state.loading = false
    if (response.data.status === 1) {
      return response.data
    } else {
      Message.error(response.data.msg)
      return response.data

    }
  },
  // function (error) {
  //   store.state.loading = false
  //   Message.error('系统出错了')
  //   return Promise.reject(error)
  // }
)

//基础地址
let base = process.env.API_ROOT
let env = process.env.NODE_ENV
//通用方法
export const POST = (url, params) => {
  if (env == 'production') {
    url = url.replace('/api', '')
  }
  return axios.post(`${base}${url}`, params)
}

export const GET = (url, params) => {
  if (env == 'production') {
    url = url.replace('/api', '')
  }
  return axios.get(`${base}${url}`, {
    params: params
  })
}

export const PUT = (url, params) => {
  if (env == 'production') {
    url = url.replace('/api', '')
  }
  return axios.put(`${base}${url}`, params)
}

export const DELETE = (url, params) => {
  if (env == 'production') {
    url = url.replace('/api', '')
  }
  return axios.delete(`${base}${url}`, {
    params: params
  })
}
export const DELETEDATA = (url, params) => {
  if (env == 'production') {
    url = url.replace('/api', '')
  }
  return axios.delete(`${base}${url}`, {
    data: params
  })
}
export const PATCH = (url, params) => {
  if (env == 'production') {
    url = url.replace('/api', '')
  }
  return axios.patch(`${base}${url}`, params)
}

export const PUTFORMDATA = (url, params) => {
  if (env == 'production') {
    url = url.replace('/api', '')
  }
  return axios.put(`${base}${url}`, params, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
export const POSTFORMDATA = (url, params) => {
  if (env == 'production') {
    url = url.replace('/api', '')
  }
  return axios.post(`${base}${url}`, params, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
export const POSTBOLB = (url, params) => {
  if (env == 'production') {
    url = url.replace('/api', '')
  }
  return axios.post(`${base}${url}`, params, {
    headers: {
      'responseType': 'blob'
    }
  })
}