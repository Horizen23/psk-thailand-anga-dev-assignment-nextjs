import { API_CONFIG } from "@/config/api-config"
import APIRequest, { HTTPMethod } from "@/manager/APIRequest"

class HomePageAPIRequest implements APIRequest {
  method: HTTPMethod = HTTPMethod.GET
  url: string = `${API_CONFIG.CMS_CONTENT_ENDPOINT}/api/home`

  makeQuery() {
    return {
    "populate[0]":"aboutUs.image",
    "populate[1]":"awards",
    "populate[2]":"awards.awards",
    "populate[3]":"awards.awards.icon",
    "populate[4]":"ourTeam",
    "populate[5]":"ourTeam.image",
    "populate[6]":"expertTeam",
    "populate[7]":"expertTeam",
    "populate[8]":"businessPhilosophy",
    "populate[9]":"businessPhilosophy.image",
    "populate[10]":"partnershipOverview",
    "populate[11]":"partnershipOverview.mainImage",
    "populate[12]":"partnershipOverview.image1",
    "populate[13]":"partnershipOverview.image2",
    "populate[14]":"statistics",
    "populate[15]":"statistics.images",
    "populate[16]":"smartAgencyPromote",
    "populate[17]":"smartAgencyPromote.image",
    "populate[18]":"workflowSteps",
    "populate[19]":"workflowSteps.steps",
    "populate[20]":"workflowSteps.steps.image",
    "populate[21]":"marketingAgencyOverview",
    "populate[22]":"marketingAgencyOverview.bgImage",
    "populate[23]":"marketingAgencyOverview.bgImageMobile",
    "populate[24]":"marketingAgencyOverview.image",
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



export default HomePageAPIRequest 