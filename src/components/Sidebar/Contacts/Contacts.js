import React, {Component} from 'react';
import Figure from "../public/Figure";
import {connect} from "react-redux";
import * as axios from 'axios';
import {setContacts} from "../../redux/contactsReducer";

const url = process.env.REACT_APP_DB_URL;

class Contacts extends Component {
  constructor(props) {
    super(props);

  }

  getContacts = () => {
    axios.get(url + '/user.json')
      .then( res => {

        let contacts = Object.keys(res.data).map(key => {
          return {
            ...res.data[key],
            id: key
          }
        })

        this.props.setContacts(contacts);
      })
  }


  render() {
    return (
      this.props.users.length > 0
        ? this.props.users.map(user => <Figure key={user.id} photoUrl={user.photoUrl} content={user.fullName} />)
        : <p>There is any contacts</p>
    );
  }
}

export default Contacts;

// const Contacts = ({users, setContacts}) => {
//
//   if (users.length === 0) {
//     axios.get(url + '/user.json')
//       .then( res => {
//
//         let contacts = Object.keys(res.data).map(key => {
//           return {
//             ...res.data[key],
//             id: key
//           }
//         })
//
//         setContacts(contacts);
//       })
//   }
//
//   return (
//       users.length > 0
//         ? users.map(user => <Figure key={user.id} photoUrl={user.photoUrl} content={user.fullName} />)
//         : <p>There is any contacts</p>
//   )
// };

const mapStateToProps = (state) =>{
  return {
    users: state.contacts.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setContacts: (contacts) => dispatch(setContacts(contacts))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
