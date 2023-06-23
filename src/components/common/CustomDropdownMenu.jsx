import React from "react";

const CustomDropdownMenu = ({ dropdownMenu, setShowDropdown }) => {
  return (
    <div
      className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div className="py-1" role="none">
        {dropdownMenu.map((item) => (
          <span
            role="menuitem"
            onClick={() => {
              item.handler();
              setShowDropdown(false);
            }}
            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 cursor-pointer"
          >
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CustomDropdownMenu;
