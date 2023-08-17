import image from '../images/pexels-ivan-bertolazzi-2681319.jpg'
import {useState,useEffect} from "react";
import {useNavigate} from "react-router-dom"
import io from 'socket.io-client'

const Members = () =>{
    const [socket,setSocket]=useState(null);
    const navigateTo = useNavigate();

    useEffect(()=>{
      const socketInstance = io('http://localhost:3000');
      setSocket(socketInstance);

      return()=>{
        socketInstance.disconnect()
      }
    },[])

    useEffect(()=>{
      if(socket){
        socket.on('nftsUpdated',(data)=>{
          if(data.userNFTs<1){
             navigateTo('/')
             alert("You've been logged out because you no longer hold any NFTs in collection with address 0xd4FB7aC6d80969c0b15331a4cb704f63f4734eC8")
          }
        })
      }
    },[socket,navigateTo])

    return(
        <>
        <p>Thank you for being a holder of my NFT collection, here is your message:</p>
        <img src={image} height="500px"></img>
        </>
    )
}

export default Members;