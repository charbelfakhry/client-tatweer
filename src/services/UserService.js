import http from  "../http-common";

const getToken = () => {
    const parsedUser = JSON.parse(localStorage.getItem("user"));
    return parsedUser.token;
  };

const getAll = () => {
    return http.get("/users/getAllUsers", {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
}

const get = (id) =>{
    return http.get(`/users/user/${id}`);
}

const create = (data) =>{
    return http.post(`/users/insertUser`, data);
}

const update = (data) => {
    return http.post(`/users/updateUser`, data);
}

const remove = (id) =>{
    console.log(id);
    return http.post(`/users/deleteUser`, {id});
    //return http.delete(`/users/deleteUser/${id}`);
}

const authenticate = (user) => {
    return http.post(`/users/authenticateUser`, user);
}

const loadRefernceTableInfo = (data) =>
{
    return http.post(`/user/loadRefernceTableInfo`, data)
}

const UserService = {
    getAll,
    get,
    create,
    update,
    remove,
    authenticate,
    loadRefernceTableInfo,
}

export default UserService;