"use client";
import React, { useState, useEffect } from "react";
import "./oneProduct.css";
import { Container } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const SingleProduct: React.FC<CategoryProps> = ({ params }) => {
  const [quant, setQuant] = useState<number>(0);
  const [currentImage, setCurrentImage] = useState<string>("");
  const [orderedQuant, setOrderedQuant] = useState(0);
  const [addToWishList, setAddToWishList] = useState(0);
  console.log(orderedQuant, "orderedQuant");
  console.log(addToWishList, "addToWishList");

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/products/${params.id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseData: Product = await response.json();
        setProduct(responseData);
        setCurrentImage(responseData.image);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductDetails();
  }, [params.id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const formattedPrice =
    product.price !== undefined && typeof product.price === "number"
      ? `$${product.price.toFixed(2)}`
      : "Invalid Price";

  const THUMBS: string[] = [
    product.image,
    product.img2.slice(1, product.img2.length - 1),
    product.img3.slice(1, product.img3.length - 1),
    product.img4.slice(1, product.img4.length - 1),
  ];

  const handleClick = (index: number) => {
    setCurrentImage(THUMBS[index]);
  };

  const removeActivatedClass = (parent: HTMLElement) => {
    parent.childNodes.forEach((node: ChildNode) => {
      node.childNodes[0].classList.contains("activated") &&
        node.childNodes[0].classList.remove("activated");
    });
  };

  const addQuant = () => {
    const newQuant: number = quant < 100 ? quant + 1 : quant;
    setQuant(newQuant);
  };

  const removeQuant = () => {
    const newQuant: number = quant > 0 ? quant - 1 : 0;
    setQuant(newQuant);
  };

  const resetQuant = () => {
    setQuant(0);
    setOrderedQuant(0);
  };
  return (
    <main className="App">
      <Container component="section" maxWidth={"lg"}>
        <section className="core">
          <section className="gallery-holder hide-in-mobile">
            <section className="gallery">
              <div className="image">
                <img src={currentImage} alt="product-1" />
              </div>

              <div className="thumbnails">
                {THUMBS.map((th, index) => {
                  return (
                    <div
                      className="img-holder"
                      key={index}
                      onClick={(e) => {
                        handleClick(index);
                        removeActivatedClass(
                          e.currentTarget.parentNode as HTMLElement
                        );
                        e.currentTarget.childNodes[0].classList.toggle(
                          "activated"
                        );
                      }}
                    >
                      <div
                        className={`outlay ${index === 0 && "activated"}`}
                      ></div>
                      <img src={th} alt={`product-${index + 1}`} />
                    </div>
                  );
                })}
              </div>
            </section>
          </section>

          <section className="description">
            <h1>{product.name}</h1>
            <p className="desc">{product.description}</p>
            <div className="price">
              <div className="main-tag">
                <p>{formattedPrice}</p>
                <p>50%</p>
              </div>
              <s>$250.00</s>
            </div>
            <div className="buttons">
              <div className="amount">
                <button className="minus" onClick={removeQuant}>
                  <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                      fill="#FF7E1B"
                      fillRule="nonzero"
                    />
                  </svg>
                </button>
                <p>{quant}</p>
                <button className="plus" onClick={addQuant}>
                  <svg
                    width="12"
                    height="12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                      fill="#FF7E1B"
                      fillRule="nonzero"
                    />
                  </svg>
                </button>
              </div>
              <button
                className="add-to-cart"
                onClick={() => {
                  setOrderedQuant(quant);
                }}
              >
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                    fill="#69707D"
                    fillRule="nonzero"
                  />
                </svg>
                add to cart
              </button>
              <button
                className="add-to-cart"
                onClick={() => {
                  setAddToWishList(params.id);
                }}
              >
                <FavoriteBorderIcon sx={{ width: "25px" }} />
                add to wshlist
              </button>
            </div>
          </section>
        </section>
      </Container>
    </main>
  );
};

export default SingleProduct;
