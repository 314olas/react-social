import React from 'react';
import Navbar from "./Navbar";
import Calls from "./Calls";
import Chats from "./Chats";
import Profile from "./Profile";

const Sidebar = () => {
  return (
    <aside>
      <Profile />

      <Navbar />

      <Calls />

      <Chats />

    </aside>
  );
};

export default Sidebar;
