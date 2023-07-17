import React from "react";
import { useSnapshot } from "valtio";

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state);
  return <div>Tab</div>;
};

export default Tab;
