import React from "react";
const CreateNFT = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <main
          role="main"
          className="col-lg-12 mx-auto"
          style={{ maxWidth: "1000px" }}
        >
          <div className="content mx-auto card">
            <div className="g-4 card-body">
              <div className="mb-3">
                <lable for="File" >Upload File</lable>
                <input type={"file"} className="form-control mt-3" />
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">
                  Name
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="name"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">
                  Description
                </label>
                <textarea
                  class="form-control"
                  id="description"
                  rows="3"
                ></textarea>
                <button className="btn btn-primary  btn-sm  w-100 mt-3 " type="submit" >
                    Submit
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreateNFT;
