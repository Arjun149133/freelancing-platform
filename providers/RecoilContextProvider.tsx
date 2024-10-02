"use client";
import React from "react";
import { RecoilRoot } from "recoil";
interface RecoilContextProviderProps {
  children: React.ReactNode;
}

const RecoilContextProvider: React.FC<RecoilContextProviderProps> = ({
  children,
}) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilContextProvider;
