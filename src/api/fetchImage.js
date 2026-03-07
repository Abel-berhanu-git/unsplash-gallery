import axiosInstance from "./axiosInstance";

 export const fetchImage = async (searchValue) => {
   // const response = await axios(
   //   `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}&page=1&query=${searchValue}`,
   // );
   const response = await axiosInstance('/search/photos', {
     params: { page: 1, query: searchValue },
   });
   return response.data;
 };
