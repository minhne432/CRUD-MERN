import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div class="Home-page bg-dark text-white container-fluid d-flex justify-content-center align-items-center">
      <div class="row container">
        <div
          class="col-lg-6 d-flex justify-content-center align-items-start flex-column"
          style={{ height: "91.5vh" }}
        >
          <h2 style={{ fontSize: "80px" }}>BOOK STORE FOR YOU</h2>
          <button class="viewBook">View Books</button>
        </div>
        <div
          class="col-lg-6 d-flex justify-content-center align-items-end flex-column"
          style={{ height: "91.5vh" }}
        >
          <img
            class="img-fluid homeimg"
            src="https://cdn.pixabay.com/photo/2024/02/28/03/55/ai-generated-8601128_640.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
