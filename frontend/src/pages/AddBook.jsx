import React from "react";

const AddBook = () => {
  return (
    <div
      className="bg-dark d-flex justify-content-center align-items-center"
      style={{ minHeight: "91.5vh" }}
    >
      <div className="container p-4">
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Book Name
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter book name"
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter the name of Author"
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Description"
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            img
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter URL of book image"
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Price"
          />
        </div>
        <button className="btn btn-success">Submit</button>
      </div>
    </div>
  );
};

export default AddBook;
