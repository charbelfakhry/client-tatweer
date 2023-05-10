import http from  "../http-common";

const getAll = () => {
    return http.get("/users/getAllUsers");
}

const get = (id) =>{
    return http.get(`/users/user/${id}`);
}

const create = (data) =>{
    return http.post(`/users/user`, data);
}

const update = (id, data) => {
    return http.put(`/users/user/${id}`, data);
}

const remove = (id) =>{

    return http.post(`/users/deleteUser`, {id});
}

const UserService = {
    getAll,
    get,
    create,
    update,
    remove,
}

export default UserService;