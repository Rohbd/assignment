import React, { useEffect, useState } from "react";

function Product() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((dataa) => setData(dataa))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <p style={{ fontSize: "30px", fontWeight: 700 }}>Explore Products</p>
      <div
        style={{
          margin: "100px",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto ",
            backgroundColor: "rgb(229 235 235 / 57%)",
          }}
        >
          {data.products &&
            data.products.map((item) => (
              <div
                style={{
                  border: "2px solid gray",
                  borderRadius: "14px",
                  alignItems: "flex-start",
                  display: "flex",
                  flexDirection: "column",
                  padding: "12px",
                  marginBottom: "16px",
                  marginRight: "12px",
                }}
              >
                {item.images && item.images.length > 0 && (
                  <img
                    src={item.images[0]}
                    alt={`Product ${item.id}`}
                    style={{
                      width: "100%",
                      maxHeight: "200px",
                      objectFit: "cover",
                    }}
                  />
                )}
                <div>
                  <p
                    style={{ fontSize: "20px", fontWeight: 600 }}
                    key={item.id}
                  >
                    {item.title}
                  </p>
                </div>
                <div>
                  <p
                    style={{ fontSize: "16px", fontWeight: 500 }}
                    key={item.id}
                  >
                    {item.brand}
                  </p>
                </div>
                <div>
                  <p
                    style={{ fontSize: "16px", fontWeight: 500 }}
                    key={item.id}
                  >
                    Desc: {item.description}
                  </p>
                </div>
                <div>
                  <p
                    style={{ fontSize: "18px", fontWeight: 600 }}
                    key={item.id}
                  >
                    Price: Rs {item.price}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Product;
