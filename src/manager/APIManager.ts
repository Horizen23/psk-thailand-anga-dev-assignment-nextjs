import APIResponse from './APIResponse';
import APIRequest from './APIRequest';

export enum StatusCode {
  SUCCESS = 200,
  BAD_REQUEST = 400,
}

class APIManager {
  private static instance: APIManager;

  baseURL: string = '';

  private constructor() {}

  init() {
    this.baseURL = '';
  }

  public static getInstance(): APIManager {
    if (!APIManager.instance) {
      APIManager.instance = new APIManager();
    }
    return APIManager.instance;
  }

  async fetch(apiRequest: APIRequest): Promise<APIResponse> {
    const options = this.createFetchOptions(apiRequest);
    const url = new URL(`${this.baseURL}${apiRequest.url}`);
    if (apiRequest.method === 'GET' && apiRequest.makeQuery()) {
      Object.keys(apiRequest.makeQuery()).forEach((key) =>
        url.searchParams.append(key, apiRequest.makeQuery()[key])
      );
    }
    try {
      const response = await fetch(url.toString(), options);
      const data = await response.json();
      if (response.ok) {
        return new APIResponse(data, response.status === StatusCode.SUCCESS);
      } else {
        throw new APIResponse(data, false);
      }
    } catch (err) {
      this.saveLog(JSON.stringify(err));
      throw new APIResponse(err, false);
    }
  }

  private async saveLog(err: string) {
    // Implementation of saving logs
  }

  private createFetchOptions(apiRequest: APIRequest): RequestInit {
    const body = apiRequest.makeBody();
    const customHeader = apiRequest.makeHeader ? apiRequest.makeHeader() : {};
    return {
      method: apiRequest.method,
      headers: {
        'Content-Type': 'application/json',
        ...customHeader,
      },
      body: body && Object.keys(body).length === 0 ? undefined : JSON.stringify(body),
      next: { ...(!!apiRequest.next ? apiRequest.next() : {}) },
    };
  }
}

export default APIManager.getInstance();
