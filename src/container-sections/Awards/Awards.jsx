import React from 'react'


import { SubHeading } from '../../components';
import { images, data } from '../../constants';

import './Awards.css'

/* 
🦄🍄js210

05. map loop + data , AwardCard
10. props : const변수에도 전송 ok

20. const함수안에 div JSX 넣을 수 있음

const ~~ = (~)=>(<div>JSX~)
*/

// 🍉js210-20
const AwardCard = ({pp_award})=>(
    <div className="app__laurels_awards-card">

        <div className='explain'>map loop + data , AwardCard</div>

        <img src={pp_award.imgUrl}/>

        <div className="app__laurels_awards-card_content">
            <p className="p__cormorant" style={{ color: '#DCCA87' }}>
            {pp_award.title}
            </p>
            <p className="p__opensans">
            {pp_award.subtitle}
            </p>
        </div>
    
    </div>
)

const Awards = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="awards">

        <div className="app__wrapper_info">

            <SubHeading title="SubHeading props-Awards" />

            <h1 className="headtext__cormorant">
                Our Awards
            </h1>
            
            {/*🍉js210-05,10 */}
            <div className="app__laurels_awards">
              {
                data.awards.map(
                    (p_award)=>(
                        <AwardCard pp_award={p_award} key={p_award.title}/>))
              }        
            </div>    
        </div>   
    </div>
  )
}

export default Awards