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
      <div onClick={toggleDrawer}>
        <ShoppingCartTwoToneIcon fontSize="large" />
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

{
  /* <Drawer
variant="permanent"
anchor="right"
sx={{
width: 300,
flexShrink: 0,
"& .MuiDrawer-paper": {
    width: 300,
    boxSizing: "border-box",
},
}}
>
<div>Checkout</div>
</Drawer> */
}
