import React,{useState} from "react";
import {create as ipfsHttpClient} from 'ipfs-http-client'
const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

const CreateNFT = ({marketplace,nft}) => {

  

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [file, setFile] = useState({});
  const [image, setImage] = useState('');

  const handleOnSubmit = async (e) =>{
    e.preventDefault();

    if(typeof file !== 'undefined'){
        try {
          const result = await client.add(file)
          console.log(result);
          const imageUrl = `https://ipfs.infura.io:5001/api/v0/${result.path}`
          setImage(imageUrl);
        } catch (ex) {
          console.log(ex);
        }
    }

  }

  const mintToken = async() =>{
      try {
     
      } catch (ex) {
        console.log(ex);
      }
  }
  mintToken()

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
                <input type={"file"} onChange={e => setFile(e.target.files[0])} className="form-control mt-3" />
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
