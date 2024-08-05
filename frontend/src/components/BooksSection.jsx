import React from "react";

export const BooksSection = ({ data }) => {
  console.log(data);
  return (
    <div className="d-flex justify-content-around align-items-center flex-wrap my-3">
      {data &&
        data.map((item, index) => {
          return (
            <div
              key={item._id}
              className="card"
              style={{ width: "200px", height: "350px" }}
            >
              <div>
                <img
                  style={{ width: "200px", height: "210px" }}
                  className="img-fluid"
                  src={item.image}
                  alt="/"
                />
              </div>
              <h6 className="m-0 px-2">{item.bookName.slice(0, 20)}...</h6>
              <p style={{ fontSize: "30px" }} className="m-0 px-2">
                Rs. {item.price}
              </p>
            </div>
          );
        })}
    </div>
  );
};
