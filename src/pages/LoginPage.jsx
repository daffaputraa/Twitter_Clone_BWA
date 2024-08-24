import React, { useState } from "react";
import {
  NavMenu,
  Badge,
  Input,
  Button,
  Headline,
  Info,
  Label,
  Tabs,
} from "../components";
import { crown, home, location, lock, user } from "../assets";

const LoginPage = () => {
  const inputData = [
    {
      id: 1,
      label: "Full Name",
      name: "fullname",
      icon: user,
    },
    {
      id: 2,
      label: "Username",
      name: "username",
      icon: crown,
    },
    {
      id: 3,
      label: "Password",
      name: "Password",
      icon: lock,
    },
  ];
  return (
    <>
      <div className="container w-full h-screen bg-dark flex items-center justify-center">
        <main className="max-w-[969px] min-w-[969px]  flex items-center mx-auto gap-[100px]">
          <section className="flex flex-col gap-[50px] max-w-[484px] w-full">
            <header className="header">
              <h1 className="mb-1 text-[38px] font-bold text-white">Sign Up</h1>
              <p className="text-base text-white font-normal">
                What’s trend, what’s good for you.
              </p>
            </header>
            <form>
              <article aria-label="form" className="flex flex-col gap-4">
                {inputData.map((ele, index) => (
                  <Input
                    icon={ele.icon}
                    key={ele.id}
                    label={ele.label}
                    name={ele.name}
                    placeholder={ele.label}
                    type={ele.name === "Password" ? "password" : "text"}
                  />
                ))}
              </article>
            </form>
            <article aria-label="button" className="flex flex-col gap-[14px]">
              <Button className="w-full" variant="primary">
                Create Account
              </Button>
              <Button className="w-full" variant="secondary">
                Sign In to My Account
              </Button>
            </article>
          </section>
          <section>
            <h1 className="text-[120px] text-white font-extrabold">twittr.</h1>
          </section>
        </main>
      </div>
    </>
  );
};

export default LoginPage;
