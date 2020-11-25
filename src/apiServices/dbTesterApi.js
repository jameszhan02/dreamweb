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