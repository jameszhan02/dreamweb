import jwtAxios from "../axios/index";

export const listMembersTest = () => {
    return jwtAxios.get(`/teamMember/listAll`).then((resp) => {
      return resp.data;
    });
};