import React, { useEffect, useState } from 'react';
import {useRef} from 'react'

function Registration() {
    const [videoLink, setVideoLink] = useState('');
    const videoRef=useRef();
    const start=async()=>{
        const stream=await navigator.mediaDevices.getDisplayMedia({
            video:{
                mediaSource:'screen',
            }
        });
        const data=[];
        const mediaRecorder=new MediaRecorder(stream);
        mediaRecorder.ondataavailable=(e)=>{
            data.push(e.data);
        };
        mediaRecorder.start();
        mediaRecorder.onstop=(e)=>{
           
            videoRef.src=URL.createObjectURL(
                new Blob(data,{
                    type:data[0].type
                })
            )
            setVideoLink(URL.createObjectURL(
                new Blob(data,{
                    type:data[0].type
                })
            ));
            console.log(videoRef);
        }
    }
   useEffect(()=>{
    start();
   },[])
  return (
    <div>
        <h1>it is a video recording</h1>
        <video width='700' height='400' src={videoLink} ref={videoRef} controls/>
      
    </div>
  )
}

export default Registration
