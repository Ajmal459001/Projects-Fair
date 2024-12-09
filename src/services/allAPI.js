import commonAPI from "./commonAPI";
import SERVER_BASE_URL from "./serverUrl";

// registerAPI
export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/register`,reqBody)
}

// loginAPI
export const loginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/login`,reqBody)
}

// add-Project API
export const addProjectAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/add-project`,reqBody,reqHeader)
}

// home-Projects API
export const homeProjectsAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/home-projects`,{})
}

// user-Projects API
export const userProjectsAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/user-projects`,{},reqHeader)
}

// all-Projects API
export const allProjectsAPI = async (reqHeader,searchKey)=>{
    // query parameter of url - ?search=${searchKey} & query stored in 'search'
    return await commonAPI("GET",`${SERVER_BASE_URL}/all-projects?search=${searchKey}`,{},reqHeader)
}