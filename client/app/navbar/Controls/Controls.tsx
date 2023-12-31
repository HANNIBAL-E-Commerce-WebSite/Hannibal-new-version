// Control.tsx
import React, { useContext } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Badge from "@mui/material/Badge";
import Link from "next/link";

interface ControlProps {}

const Control: React.FC<ControlProps> = () => {


  return (
    <div className="control__bar__container">
      <div className="controls__container">
        <div className="control">
          
        </div>
        <div className="control">
          
        </div>
        <div className="control">
        </div>
      </div>
    </div>
  );
};

export default Control;
