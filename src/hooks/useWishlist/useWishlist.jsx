import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const useWishlist = () => {
   const { user } = useContext(AuthContext)
   const axiosSecure = useAxiosSecure();
   const { refetch, data: addcard = [] } = useQuery({
      querykey: ['addcard', user?.email],
      queryFn: async () => {
         const res = await axiosSecure.get(`/addcard?email=${user?.email}`);
         return res.data
      }
   });

   return [addcard, refetch]

};

export default useWishlist;