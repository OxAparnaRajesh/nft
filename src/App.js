import React,{useState} from "react";
import './App.css';
import Axios from 'axios';


function App() {

  const [nftImageList,setNftImageList]=useState([]);

  const getImageList = ()=>{(
    Axios.get('https://api.opensea.io/api/v1/asset_contract/0x06012c8cf97bead5deae237070f9587f8e7a266d')
    .then((response) =>{
      console.log(response);
      setNftImageList([...nftImageList,response.data.image_url]);     
      //console.log("**************************",response.data.image_url);
    
  })
  )};      
    
  
  return (
    <>       
        
    <div className="App">

      <div id='header'>
        <h1>NFT - Land</h1>
      </div>

        <input type="text" placeholder="Enter contract address or wallet address here" />
        <button onClick={getImageList}> Get NFT List </button>     

        <div className="nftList">

          {nftImageList.map((nfts)=>{
            return <div><h1>Image_url: </h1>{nfts.image_url}</div>
          })}           
        </div>      
      
    </div>
    </>
  );
}

export default App;
