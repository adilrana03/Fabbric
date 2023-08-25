
const API_BASE_URL = 'http://104.248.198.63/api/v1'; 

// const API_BASE_URL = 'http://127.0.0.1:8000/api/v1'; 

export const API_ENDPOINTS = {
    authSignIn: API_BASE_URL + "/auth/signin/",
    authSignUp: API_BASE_URL + "/user/register/",

    getMaleFamilies: API_BASE_URL + "/designs/malefamilies",
    getFemaleFamilies: API_BASE_URL + '/designs/femalefamilies',
    getAllFamilies: API_BASE_URL + '/designs/allfamilies',

    getSubfamilies: API_BASE_URL + '/designs/subfamilies/',

}


