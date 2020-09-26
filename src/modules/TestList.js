import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {listMembersTest} from '../apiServices/dbTesterApi';

//MUST START WITH capital letter  (link below)
//https://dev.to/ranewallin/js-bites-react-hook-is-called-in-a-function-which-is-neither-a-react-function-or-sic-a-custom-react-hook-1g2c
const  TestMoudleMemberList= () => {
    const [memberList, setMemberList] = useState([]);
    useEffect(() => {
       Axios.all([
        listMembersTest(),
      ]).then(([memberList]) => {
        setMemberList(memberList);
      });
    }, []);
  // console.log(memberList);
    const mList = memberList.map((m) => <li key={m.fullName}>{m.fullName}</li>);
    return(
        <div>
        {mList}
      </div>
    );
};

export default TestMoudleMemberList;