

import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

export default function App() {
  const items = useSelector((state) => state.allCart.items);
  const dispatch = useDispatch();

  return (
    <div className="m-5 d-flex flex-wrap justify-content-between gap-4">
      {items.map((item) => (
        <MDBCard
          key={item.id}
          className="flex-grow-1"
          style={{ maxWidth: "18rem" }}
        >
          <MDBCardImage src={item.img} position="top" alt={item.title} />
          <MDBCardBody className="d-flex flex-column">
            <MDBCardTitle className="mb-3">{item.title}</MDBCardTitle>
            <MDBCardText className="mb-3"> Rs{item.price}</MDBCardText>
            <div className="d-flex justify-content-between align-items-center">
              <MDBBtn
                onClick={() => dispatch(addToCart(item))}
                color="primary"
                className="mb-2 mr-2" 
              >
                Add to Cart
              </MDBBtn>
              <MDBBtn
                onClick={() => console.log("Go to Basket")}
                color="light"
                style={{
                  border: "1px solid #ccc",
                  color: "#666",
                }}
                className="mb-2" 
              >
                Go to Basket
              </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      ))}
    </div>
  );
}

