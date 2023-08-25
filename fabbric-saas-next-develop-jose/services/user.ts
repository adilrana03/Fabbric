import {API_BASE_URL} from "@/services/api"

export async function getCurrentUser(token: string) {
    try {
      const response = await fetch(API_BASE_URL + '/user/me', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
      });
      const userData = await response.json();
      console.log(userData, "userData")
      return userData;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
}


export async function updateUser(id: string) {
    try {
      const response = await fetch(API_BASE_URL + '/user/update/${id}');
      const userData = await response.json();
      console.log(userData, "userData")
      return userData;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      throw error;
    }
}
