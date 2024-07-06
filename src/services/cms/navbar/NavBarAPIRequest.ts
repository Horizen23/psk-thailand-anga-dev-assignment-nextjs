import { API_CONFIG } from "@/config/api-config"
import APIRequest, { HTTPMethod } from "@/manager/APIRequest"

class NavBarAPIRequest implements APIRequest {
  method: HTTPMethod = HTTPMethod.GET
  url: string = `${API_CONFIG.CMS_CONTENT_ENDPOINT}/api/navbar`

  makeQuery() {
    return {
      "populate[0]":"dropdowns.dropdownItems",
      "populate[1]":"buttons",
      "populate[2]":"logo",
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

export default NavBarAPIRequest 