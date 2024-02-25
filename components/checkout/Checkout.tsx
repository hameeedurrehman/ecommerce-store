"use client";
import { Drawer } from "@mui/material";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import React, { useState } from "react";

function Checkout() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div onClick={toggleDrawer} className="cursor-pointer">
        <ShoppingCartTwoToneIcon fontSize="large" className="text-white" />
      </div>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            width: 300,
            boxSizing: "border-box",
          },
        }}
      >
        <div className="py-10">
        <h2 className="text-2xl text-primary font-semibold text-center">Checkout</h2>
        </div>
      </Drawer>
    </div>
  );
}

export default Checkout;