import axios, { AxiosInstance } from 'axios'

const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL || 'https://dev-otakahp.g.kuroco.app',
  headers: {
    'Content-type': 'application/json'
  }
})

export default apiClient

// import axios, { AxiosResponse, AxiosError, AxiosRequestConfig, AxiosInstance, Method } from 'axios'

// const API_BASE_URL = 'https://dev-otakahp.g.kuroco.app'

// export const ApiComponent = async <T, R = AxiosResponse<T>>(
//   method: Method, // 必須項目。get,delete,post,putなど利用可能
//   url: string, // 必須項目
//   data?: any, // BODY部分。送りたいデータを引数で渡す
//   headers?: Map<string, string>, // 必要に応じて追加する
//   ...requestConfig: any
// ): Promise<R> => {
//   const config: AxiosRequestConfig = {
//     ...requestConfig,
//     baseURL: API_BASE_URL,
//     url: url,
//     method: method,
//     data,
//     timeout: 5000,
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: '',
//       ...headers
//     }
//   }

//   const axiosInstance: AxiosInstance = axios.create()

//   axiosInstance.interceptors.response.use(
//     (res: AxiosResponse<T>) => res,

//     // AxiosErrorはここで処理を行う
//     async (error: AxiosError) => {
//       console.error('error:', error)

//       if (error.response?.data) {
//         return error.response?.data
//       }

//       throw Error('AxiosError');
//     }
//   )

//   // ステータスコードによって処理を分岐可能にする
//   switch ((await axiosInstance.request(config)).status) {
//     // 成功時はデータを返す
//     case 200: return (await axiosInstance.request(config)).data

//     // 失敗時はエラーを出してあげる
//     default:
//       if (await axiosInstance.request(config) != null) {
//         const err: { message: string } | null | undefined = await axiosInstance.request(config)
//         if (err?.message) {
//           throw Error(err.message)
//         }
//       }
//       throw Error('UNHANDLED_ERROR')
//   }
// }
