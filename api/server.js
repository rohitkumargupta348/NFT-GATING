const express = require("express");

const {Web3} = require("web3");

const cors = require('cors')

const  ABI = require('./ABI.json');

const app = express();

const socketIO = require('socket.io')

app.use(cors())

app.use(express.json());

const PORT = 3000;


const web3 = new Web3("https://fabled-old-needle.matic-testnet.discover.quiknode.pro/49de27d7d84599a029beadf9d1003c4cd9f979ed/");

const contractAddress = "0xd4FB7aC6d80969c0b15331a4cb704f63f4734eC8";

const contract = new web3.eth.Contract(ABI,contractAddress);

//address 1 : 0xb8acfF0f109Ca526805A7DA85A955D6Ad1D4E1ea
//address 2 : 0x769B596e1502CF11273099cb74Fc50A0BB10a58E

//Contract Address - 0xd4FB7aC6d80969c0b15331a4cb704f63f4734eC8

console.log("Contract:",contract);

// const address1 = "0xb8acfF0f109Ca526805A7DA85A955D6Ad1D4E1ea";
// //address 2 :  0x769B596e1502CF11273099cb74Fc50A0BB10a58E

const fetchNFTs = async (account) => {
    try{
    const nftBalance = await contract.methods.balanceOf(account).call();
    // console.log(nftBalance); //gives big int
    // const nftBalanceNum = Number(nftBalance);
    // console.log(nftBalanceNum);
    return {userNFTs:Number(nftBalance)};
    }
    catch(error){
        console.log(error);
    } 
}

// fetchNFTs().then(console .log);

app.post("/members",async(req,res)=>{
    try{
        const account = req.body.from;
        const numNFTs = await fetchNFTs(account);
        console.log(numNFTs);
        if(numNFTs.userNFTs >0){
            res.status(200).json({status:200,numNFTs});
        }
        else{
            res.status(400).json({status:400,message:"Don't have enough NFTs"});
        }
    }
    catch(error){
        res.status(500).json({error:"Internal Server Error"})
    }
})

app.post('/webhook',async(req,res)=>{
    try{
      const account = req.body[0].from;
    //   console.log(account)
      const numNFTs = await fetchNFTs(account);
      io.emit('nftsUpdated',{userNFTs:numNFTs.userNFTs})
      res.status(200).json({status:200,message:"Webhook Triggered"})
    }catch(error){
      console.error(error)
    }
})

const server = app.listen(PORT,()=>{
    console.log(`Sever running at ${PORT}`)
})
const io = socketIO(server);
io.on('connection',()=>{
  console.log("Connected")
})


