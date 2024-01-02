/* eslint-disable @next/next/no-img-element */
"use client";

import { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import axios from "axios";
import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "./Cart.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "350px",
  width: "45%",
  height: "400px",
  bgcolor: "background.paper",
  border: "5px solid #FFE26E",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
};

const Cart = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const [openCheckoutModal, setOpenCheckoutModal] = useState(false);
  // const handleCheckoutOpen = () => setOpenCheckoutModal(true);
  // const handleCheckoutClose = () => setOpenCheckoutModal(false);
  const handelQuantityIncrement = (event) => {
    cartItems.quantity(props.item.id, "INC");
  };

  const handelQuantityDecrement = (event) => {
    if (props.item.itemQuantity > 1) {
      cartItems.quantity(props.item.id, "DEC");
    }
  };

  const handelRemoveItem = () => {
    cartItems.removeItem(props.item);
  };

  const cartItems: any = {};
  const handleCheckout = async () => {
    if (cartItems.totalAmount > 0) {
      const config = {
        reason: "checkout",
        amount: cartItems.totalAmount,
      };

      try {
        const res = await axios.post("/api/payment", config);
        console.log(res.data);
        window.location.replace(res.data);
        handleCheckoutOpen();
      } catch (err) {
        console.log(err);
      }
    } else {
      return;
    }
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("clicked");
    axios
      .post("http://localhost:8000/payment/pay", 1200)
      .then((res) => {
        console.log("eee");
        const { result } = res.data;
        window.location.href = result.link;
      })
      .catch((err) => console.log(err));
  };
  console.log(JSON.parse(localStorage.getItem("basket") as string));

  return (
    <Fragment>
      <Badge color="error">
        <ShoppingCartIcon
          color="black"
          onClick={handleOpen}
          sx={{ width: "35px" }}
        />
      </Badge>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="cart__header">
            <h2>Your Cart</h2>
          </div>
          <div className="cart__items__container">
            <div className="cartItems">
              {5 === 0 ? (
                <div className="cart__empty"> Empty cart!</div>
              ) : (
                <div className="shop__cart__items">
                  {JSON.parse(localStorage.getItem("basket") as string)?.map(
                    (el) => (
                      <div className="cart__item__card">
                        <div className="cart__item__detail">
                          <div className="cart__item__image">
                            <img
                              src={el.image}
                              alt="item"
                              className="item__image"
                            />
                          </div>
                          <div className="cart__item__name">{el.name}</div>
                        </div>
                        <div className="cart__item__quantity">
                          <IconButton onClick={handelQuantityIncrement}>
                            <AddCircleIcon />
                          </IconButton>
                          <div
                            type="text"
                            name="quantity"
                            className="quantity__input"
                          >
                            0
                          </div>
                          <IconButton onClick={handelQuantityDecrement}>
                            <RemoveCircleIcon fontSize="medium" />
                          </IconButton>
                        </div>

                        <div className="cart__item__price">{el.price}</div>
                        <div className="remove__item__icon">
                          <IconButton>
                            <HighlightOffIcon onClick={handelRemoveItem} />
                          </IconButton>
                        </div>
                      </div>
                    )
                  )}
                </div>
              )}
              {3 > 0 && (
                <div className="options">
                  
                  <div className="checkout">
                    <Button variant="outlined" onClick={onSubmit}>
                      Checkout
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Box>
      </Modal>
      {/* <Modal open={openCheckoutModal} onClose={handleCheckoutClose}>
        <Box sx={style}>
          <div className="d-flex w-100 h-100 justify-content-center align-items-center">
            <h2>Your checkout was successful</h2>
          </div>
        </Box>
      </Modal> */}
    </Fragment>
  );
};

export default Cart;
