
export type APIRequestContentType = 'JSON' | 'FORM_DATA'

export enum HTTPMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}
interface APIRequest {
  contentType?: APIRequestContentType
  baseUrl?: string
  method: HTTPMethod
  tag?: string
  url: string
  makeQuery: () => any
  makeBody: () => any
  makeHeader?: () => any
  uncancellable?: boolean
  setPrefixToken?: string
  next?: () => NextFetchRequestConfig
}

export default APIRequest
