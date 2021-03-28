import React from "react";
import { Header } from "../Header/Header";

export const Layout: React.FC = ({ children }) => {
  return (
    <div className='main'>
      <Header />
      <main className='content'>{children}</main>
    </div>
  );
};
