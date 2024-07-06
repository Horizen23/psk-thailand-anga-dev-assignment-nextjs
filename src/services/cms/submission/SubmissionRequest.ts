import { API_CONFIG } from "@/config/api-config"
import APIRequest, { HTTPMethod } from "@/manager/APIRequest"

export type SubmissionBody = {
  name: string;
  email: string;
  websiteOrFacebook: string;
  tel: string;
  budget: string;
  services: string[];
}
class  SubmissionAPIRequest implements APIRequest {
  method: HTTPMethod = HTTPMethod.POST
  url: string = `${API_CONFIG.WEB_DOMAIN}/api/submission`

  constructor(private body:SubmissionBody){
  }
  makeQuery() {
  }
  next() {
    return {
    }
  }
  makeBody() {
    return this.body
  }
}



export default  SubmissionAPIRequest 