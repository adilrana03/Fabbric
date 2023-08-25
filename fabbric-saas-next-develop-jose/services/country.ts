import {API_BASE_URL} from "@/services/api"


export async function getCountries(token: string) {
    try {
      const response = await fetch(API_BASE_URL + '/countries/list', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
      });
      const countriesData = await response.json();
      return countriesData;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
}


