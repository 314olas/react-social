import React from 'react';
import Figure from "../public/Figure";

const UserProfile = ({user}) => {
  return (
    <div className="profile">
      <Figure content={user.displayName} photoUrl={user.photoUrl} />
      <button className='profile-btn' type='button' >Edit profile</button>
    </div>
  );
};

export default UserProfile;
