import axios from "axios";

export const getUser = async (token:string) => {
  try {
    const userResponse = await axios.get("https://seft-appraisal.onrender.com/user/details", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const projectResponse = await axios.get("https://seft-appraisal.onrender.com/projects/", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const researchResponse = await axios.get("https://seft-appraisal.onrender.com/research/", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const seminarsResponse = await axios.get("https://seft-appraisal.onrender.com/seminar/", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const certificateResponse = await axios.get("https://seft-appraisal.onrender.com/certificates/", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return {user: userResponse.data,
        projects: projectResponse.data,
        research: researchResponse.data,
        seminars: seminarsResponse.data,
        certificates: certificateResponse.data,
      };
  } catch (error) {
    console.error("Error fetching user details:", error);
  }
};


export const getAllUsers = async (token:string) => {
  try {
    const response = await axios.get("https://seft-appraisal.onrender.com/admin/getUsers", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    
    return response.data;
  } catch (error) {
    console.error("Error fetching user details:", error);
  }
};

