import jwtAxios from "../axios/index";

export const listMembersTest = () => {
    return jwtAxios.post(`/`).then((resp) => {
      return resp.data;
    });
};