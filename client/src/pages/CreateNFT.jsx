import React,{useState} from "react";
const CreateNFT = () => {


  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  const handleOnSubmit = (e) =>{
    e.preventDefault()
    console.log(name);
  console.log(price);
  console.log(description);
  }

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <main
          role="main"
          className="col-lg-12 mx-auto"
          style={{ maxWidth: "1000px" }}
        >
          <div className="content mx-auto card">
            <form onSubmit={e =>handleOnSubmit(e)} className="g-4 card-body">
              <div className="mb-3">
                <lable  >Upload File</lable>
                <input type={"file"} className="form-control mt-3" />
              </div>
              <div className="mb-3">
                <label  className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="name@example.com"
                  value={name}
                  onChange={(e) => setName(e.target.value) }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price 
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  placeholder="NFT Price"
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label  className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="3"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                ></textarea>
                <button className="btn btn-primary  btn-sm  w-100 mt-3 " type="submit" >
                    Submit
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreateNFT;
