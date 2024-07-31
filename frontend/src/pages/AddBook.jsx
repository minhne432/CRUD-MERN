import React from "react";

const AddBook = () => {
  return (
    <div
      class="bg-dark d-flex justify-content-center align-items-center"
      style={{ minHeight: "91.5vh" }}
    >
      <div class="container p-4">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label text-white">
            Book Name
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter book name"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label text-white">
            Author
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter the name of Author"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label text-white">
            Description
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Description"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label text-white">
            img
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter URL of book image"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label text-white">
            Price
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Price"
          />
        </div>
        <button class="btn btn-success">Submit</button>
      </div>
    </div>
  );
};

export default AddBook;
