import { ConfigProvider, Dropdown, theme } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { themeSelector } from "../../app/features/themeSlice";

const CustomDropdownMenu = ({ dropdownMenu, icon }) => {
  const { theme: currentTheme } = useSelector(themeSelector);
  return (
    <ConfigProvider
      theme={{
        algorithm:
          currentTheme && currentTheme === "dark"
            ? theme.darkAlgorithm
            : theme.defaultAlgorithm,
      }}
    >
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
    </ConfigProvider>
  );
};

export default CustomDropdownMenu;
