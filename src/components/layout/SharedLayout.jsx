import React from "react";
import Navbar from "./Navbar";
import Menubar from "./Menubar";
import { Outlet } from "react-router";
import SuggestedUsers from "../SuggestedUsers";

const SharedLayout = () => {
  return (
    <div className="relative  xs:px-10 md:px-20">
      <Navbar />
      <Menubar />
      <div className="mt-20  xs:ms-12 md:ms-32 flex items-start justify-between gap-3 ">
        {/* <Outlet /> */}
        <section className="w-full md:w-2/3 bg-red-400 ">
          <h1>hello</h1>
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            explicabo quas ex corporis unde fuga beatae ab? Odit quos dicta,
            esse consequuntur repudiandae odio atque nobis fugiat aliquid
            repellendus ullam.
          </h1>
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            explicabo quas ex corporis unde fuga beatae ab? Odit quos dicta,
            esse consequuntur repudiandae odio atque nobis fugiat aliquid
            repellendus ullam.
          </h1>
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            explicabo quas ex corporis unde fuga beatae ab? Odit quos dicta,
            esse consequuntur repudiandae odio atque nobis fugiat aliquid
            repellendus ullam.
          </h1>
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            explicabo quas ex corporis unde fuga beatae ab? Odit quos dicta,
            esse consequuntur repudiandae odio atque nobis fugiat aliquid
            repellendus ullam.
          </h1>
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            explicabo quas ex corporis unde fuga beatae ab? Odit quos dicta,
            esse consequuntur repudiandae odio atque nobis fugiat aliquid
            repellendus ullam.
          </h1>
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            explicabo quas ex corporis unde fuga beatae ab? Odit quos dicta,
            esse consequuntur repudiandae odio atque nobis fugiat aliquid
            repellendus ullam.
          </h1>
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            explicabo quas ex corporis unde fuga beatae ab? Odit quos dicta,
            esse consequuntur repudiandae odio atque nobis fugiat aliquid
            repellendus ullam.
          </h1>
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            explicabo quas ex corporis unde fuga beatae ab? Odit quos dicta,
            esse consequuntur repudiandae odio atque nobis fugiat aliquid
            repellendus ullam.
          </h1>
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            explicabo quas ex corporis unde fuga beatae ab? Odit quos dicta,
            esse consequuntur repudiandae odio atque nobis fugiat aliquid
            repellendus ullam.
          </h1>
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            explicabo quas ex corporis unde fuga beatae ab? Odit quos dicta,
            esse consequuntur repudiandae odio atque nobis fugiat aliquid
            repellendus ullam.
          </h1>
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            explicabo quas ex corporis unde fuga beatae ab? Odit quos dicta,
            esse consequuntur repudiandae odio atque nobis fugiat aliquid
            repellendus ullam.
          </h1>
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            explicabo quas ex corporis unde fuga beatae ab? Odit quos dicta,
            esse consequuntur repudiandae odio atque nobis fugiat aliquid
            repellendus ullam.
          </h1>
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            explicabo quas ex corporis unde fuga beatae ab? Odit quos dicta,
            esse consequuntur repudiandae odio atque nobis fugiat aliquid
            repellendus ullam.
          </h1>
        </section>

        <section className="hidden md:block w-1/3 bg-sky-200 ">
          <SuggestedUsers />
        </section>
      </div>
    </div>
  );
};

export default SharedLayout;
