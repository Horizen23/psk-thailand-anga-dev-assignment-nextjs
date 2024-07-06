import APIManager from "@/manager/APIManager"
import HomePageAPIRequest from "./home/HomePageAPIRequest"
import {toModelContentHomePage,ModelContentHomePage } from "./home/HomePageModel"
import NavBarAPIRequest from "./navbar/NavBarAPIRequest";
import { ModelNavbarData, toNavbarData } from "./navbar/NavBarAPIModel";
import { ModelContentFooter, toModelContentFooter } from "./footer/FooterModel";
import FooterAPIRequest from "./footer/FooterAPIRequest";
import SubmissionAPIRequest, { SubmissionBody } from "./submission/SubmissionRequest";
import APIResponse from "@/manager/APIResponse";




class CMSService {

  private static instance: CMSService;

  public static getInstance(): CMSService {
    if (!CMSService.instance) {
      CMSService.instance = new CMSService();
    }
    return CMSService.instance;
  }

  getContentHomePage(): Promise<ModelContentHomePage> {
    return new Promise(async (resolve, reject) => {
      try {
        const apiRequest = new HomePageAPIRequest()
        const response = await APIManager.fetch(apiRequest)
        resolve(toModelContentHomePage(response.data))
      } catch (error) {
        console.log(error, "getContentHomePage error")
        reject(error)
      }
    })
  }

  getContentFooter(): Promise<ModelContentFooter> {
    return new Promise(async (resolve, reject) => {
      try {
        const apiRequest = new FooterAPIRequest()
        const response = await APIManager.fetch(apiRequest)
        resolve(toModelContentFooter(response.data))
      } catch (error) {
        console.log(error, "getContentFooter error")
        reject(error)
      }
    })
  }
  
  getContentNavbar(): Promise<ModelNavbarData> {
    return new Promise(async (resolve, reject) => {
      try {
        const apiRequest = new NavBarAPIRequest()
        const response = await APIManager.fetch(apiRequest)
        resolve(toNavbarData(response.data))
      } catch (error) {
        console.log(error, "getContentHomePage error")
        reject(error)
      }
    })
  }
  submission(from : SubmissionBody): Promise<APIResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const apiRequest = new SubmissionAPIRequest(from)
        const response = await APIManager.fetch(apiRequest)
        resolve(response)
      } catch (error) {
        console.log(error, "submission error")
        if (error instanceof APIResponse) {
          resolve(error)
       }
       reject(error)
      }
    })
  }

 
}

export default CMSService.getInstance()