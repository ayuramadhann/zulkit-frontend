import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore({
  //identifier  name in devtools 
   id: "user",
   // for save data
   state: () => ({
     user: false
   }),
   //like computed properties
   getters: {
     isLoggedIn: (state) => state.user !== false,
     getUser: (state) => state.user
   },
   //like methods
   actions: {
     async fetchUser() {
       try {
         const {data} = await axios.get('https://zullkit-backend.buildwithangga.id/api/user', {
           headers:{
             Authorization: localStorage.getItem('token_type')+' '+localStorage.getItem('access_token')
           }
         })
         this.user = data
       } catch (error) {
         this.user = false
       }
     }
   }
})