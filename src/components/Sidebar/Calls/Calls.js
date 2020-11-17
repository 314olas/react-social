import React from 'react';
import Figure from "../../public/Figure";
import {NavLink} from "react-router-dom";

const CallsItem = ({contacts}) => {
  return (
    contacts.map( (user) => (
        <NavLink to={'/calls/' + user.id} key={user.id} >
          <Figure content={user.firstName} photoUrl={user.photoUrl}  />
        </NavLink>
      ))
  )
};

export default CallsItem;
