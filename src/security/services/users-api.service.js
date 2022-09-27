// users-api.service.js
// User Data Service

import authHeader from "@/security/services/auth.header";
import axios  from "axios";

const API_URL = 'http://localhost:3000/api/v1/users';

class UsersApiService {
    getAll() {
        console.log(authHeader());
        return axios.get(API_URL, { headers: authHeader()});
    }
}

export default UsersApiService;
