import { API_CONFIG } from "@/config/api-config"
import APIRequest, { HTTPMethod } from "@/manager/APIRequest"

class FooterAPIRequest implements APIRequest {
  method: HTTPMethod = HTTPMethod.GET
  url: string = `${API_CONFIG.CMS_CONTENT_ENDPOINT}/api/footer`

  makeQuery() {
    return {
    "populate[0]":"image",
    "populate[1]":"socialMedia",
    "populate[2]":"socialMedia.icon",
    "populate[3]":"contents",
    "populate[4]":"contents.items",

    }
  }
  next() {
    return {
      // 1 day
      revalidate: (60 * 60) * 24,
      tags: ['all']
    }
  }
  makeBody() {
    return {}
  }
}



export default FooterAPIRequest 