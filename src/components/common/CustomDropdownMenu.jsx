import { Dropdown } from "antd";
import React from "react";

const CustomDropdownMenu = ({ dropdownMenu, icon }) => {
  return (
    <Dropdown
      trigger="click"
      menu={{
        items: dropdownMenu,
      }}
      placement="bottomLeft"
      theme="dark"
    >
      {icon}
    </Dropdown>
  );
};

export default CustomDropdownMenu;
