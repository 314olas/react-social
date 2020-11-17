import React from 'react';
import CallsItem from "./CallsItem";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const Calls = ({contacts}) => {

  return (
    contacts.users.map( (user) => (
          <NavLink to={'/calls/' + user.id} key={user.id} >
            <CallsItem userName={user.firstName} />
          </NavLink>
        )
      )
  );
};

const mapStateToProps = state => ({contacts: state.contacts})

export default connect(mapStateToProps)(Calls);
