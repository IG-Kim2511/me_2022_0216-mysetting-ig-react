import React from 'react'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';


import {meal} from '../../constants'
import './Intro.css'

const Intro = () => {

    /* 🍀🍄 r155
        10. useRef - video연결
        20. video : ref={vidRef}

        30. 왜인지 모르지만, app__video div에 css,position: relative 넣어야지 play버튼이 보임
    
        40. onClick:
            setPlayVideo(!playVideo);
            playVideo의 반대로 set

            playVideo가 true 일때 -> false
            playVideo가 false 일때 -> true

        50. onClick:
             JS Video play() Method  : https://www.w3schools.com/jsref/met_video_play.asp    
            playVideo가 true 일때 -> ~.pause()
            playVideo가 false 일때 ->  ~.play() 

        60. icon change
            playVideo가 true 일때 -> pause icon
            playVideo가 false 일때 -> play icon
    */

    //🍉r155-10
    const vidRef = React.useRef();

    const [playVideo,setPlayVideo] = React.useState(false);

  return (
    <div className="app__video">
        <h1>container- Intro</h1>
        <h1>useRef, video, ref=vidRef</h1>
        <h3>    onClick        
        setPlayVideo(!playVideo);    
        
        if (playVideo)
            vidRef.current.pause();                                        
        else 
                vidRef.current.play();
        </h3>
        <h3>    
            playVideo?
            ("Pause" )
            :("Play")       
        </h3>
        
        <video 
         loop
         type="video/mp4"
         controls={false}
         muted     
         autoPlay
        
         /* 🍉r155-20 */
         ref={vidRef}
        src={meal}/>

        <div className="app__video-overlay flex__center">
           
            <div 
                onClick={()=>{

                    /* 🍉r155-40 */
                    setPlayVideo(!playVideo);                    

                     /* 🍉r155-50 */
                    if (playVideo) {
                        vidRef.current.pause();                                        
                    } else {
                        vidRef.current.play();
                    }                
                    console.log({playVideo});
                    console.log(vidRef.current)
                }}
                className="app__video-overlay_circle flex__center"
            >

            {/* 🍉r155-60 */}
                {
                    playVideo?
                    ("Pause" )
                    :("Play")
                }       
                
                
                {/* 
                    playVideo?
                    (<BsPauseFill color="#fff" fontSize={30}/> )
                    :(<BsFillPlayFill color="#fff" fontSize={30}/> ) 
                */}     
                
                
            </div>
        
        </div>
    
    </div>
  )
}

export default Intro