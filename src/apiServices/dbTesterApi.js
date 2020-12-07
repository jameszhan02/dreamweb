import jwtAxios from "../axios/index";

export const listMembersTest = () => {
  return jwtAxios.get(`/teamMember/listAll`).then((resp) => {
    return resp.data;
  });
};

export const listPost = () => {
  return jwtAxios.get(`/post/getall`).then((resp) => {
    console.log(resp.data);
    return resp.data;
  });
};

export const getPost = (id) => {
  return jwtAxios.get(`/post/` + id).then((resp) => {
    console.log(resp.data);
    return resp.data;
  });
};

export const deletePost = (id) => {
  return jwtAxios.delete(`/post/` + id).then((resp) => {
    return resp.data;
  });
};

export const findUser = (id) => {
  return jwtAxios.get(`/user/` + id).then((resp) => {
    console.log(resp.data);
    return resp.data;
  });
};

export const getUser = () => {
  return jwtAxios.get(`/user/getall`).then((resp) => {
    console.log(resp.data);
    return resp.data;
  });
};
