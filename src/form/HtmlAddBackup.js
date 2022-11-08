import { Radio, RadioGroup } from '@mui/material';
import { margin } from '@mui/system';
import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './DisplayAsGrid.css';


function HtmlAdd() {
  const [flexDirectionState, setFlexDirectionState] = useState('row');
  const [flexState, setFlexState] = useState('flex');
  
  const [wrap, setWrap] = useState('wrap');
  const[justifyContent,setJustifycontent]=useState('center');
  const[allignItems,setAllignItems]=useState('center')
  const allign=useRef();
  const item={color:'white'}
 
    useEffect(()=>{
      document.getElementById('container1').style=`
      flex-direction:${flexDirectionState};
      flex-wrap:${wrap};
      display:${flexState};
      justify-content:${justifyContent};
      align-items:${allignItems};
      min-height:70vh;
      gap:20px;
      `;      
    },[flexDirectionState, flexState,wrap,justifyContent,allignItems]);


  return (
    <>
     <div className='body inputs'>
        <label className='mainLabel' >Display</label>
        <label className='Labell' > <input type="radio" name="flex" className='flexradio' checked={flexState==='flex'} onChange={() => { setFlexState('flex')}} />Flex</label>
        <label className='Labell'>
          <input type="radio" name="flex" checked={flexState==='inline-flex'} onChange={() => {setFlexState('inline-flex') }} />

          Flex-inline</label>

      </div>
    <div className='body inputs'>
     <label className='mainLabel'>Display</label>
 
  <label className='Labell'>  <input type="radio" id="row" name="fav_language" value="HTML" checked = {flexDirectionState === 'row'} onClick={()=>{setFlexDirectionState('row')}}/>Flexdirection_row</label>
 
  <label className='Labell'>
<input type="radio" id="column" name="fav_language" value="CSS"  onClick={()=>{setFlexDirectionState('column')}}/>Flexdirection_Column</label>


    </div>
    <div className='body inputs'>
      <label  className='mainLabel'>wrap</label>

  <label className='Labell'>
<input type="radio" id="row" name="wrap" value="HTML" checked={wrap==='wrap'} onClick={()=>{setWrap('wrap')}}/>wrap</label>

  <label className='Labell'>
  <input type="radio" id="column" name="wrap" checked={wrap==='nowrap'} value="CSS"  onClick={()=>{setWrap('nowrap')}}/>nowrap</label>

    </div>
    <div className='body inputs'>
        <label className='mainLabel' >JustifyContent</label>
        <label className='Labell'>
        <input type="radio" name="justify" checked={justifyContent==='center'} onChange={() => { setJustifycontent('center') }} />center</label>
      
        <label className='Labell'>
        <input type="radio" name="justify" checked={justifyContent==='space-around'} onChange={() => {setJustifycontent('space-around') }} />space-around</label>
        
        <label className='Labell'>
        <input type="radio" name="justify" checked={justifyContent==='start'} onChange={() => {setJustifycontent('start') }} />Start</label>
       
        <label className='Labell'>
        <input type="radio" name="justify" checked={justifyContent==='space-evenly'} onChange={() => {setJustifycontent('space-evenly') }} />space-evenly</label>

      </div>
      <div className='body inputs'>

<label className='mainLabel' >AllignItems</label>
<label className='Labell'>
<input type="radio" name="allignItems" checked={allignItems==='baseline'} onClick={() => { setAllignItems('baseline') }} />baseline</label>
<label className='Labell'>
<input type="radio" name="allignItems" checked={allignItems==='center'} onClick={() => { setAllignItems('center')}} />center</label>       
<label className='Labell'>
<input type="radio" name="allignItems" checked={allignItems==='flex-start'} onClick={() => setAllignItems('flex-start') } />flex-start</label>
<label className='Labell'>
<input type="radio" name="allignItems" checked={allignItems==='flex-end'} onClick={() => { setAllignItems('flex-end') }} />flex-end</label>

<label className='Labell'>
<input type="radio" name="allignItems" checked={allignItems==='stretch'} onClick={() => { setAllignItems('stretch') }} />stretch</label>

</div>
    <div className='body'>
      <div className="contain">
        <div className="container" id='container1'  ref={allign}>
          <div className="item" style={item}>

            <h2 className="label basicLabel">Basic</h2>

            <h4 className="data">500 Email</h4>
            <h4 className="data">5GB Disk Space</h4>
            <h4 className="data">5GB Bandwidth</h4>
            <h4 className="data">Unlimited Domain</h4>
            <h2 className="data">$49/M</h2>
            <button className="data  button basic">Purchase</button>
          </div>

          <div className="item" style={item}>

            <h2 className="label enterpriseLabel">Enterprise</h2>

            <h4 className="data">2000 Email</h4>
            <h4 className="data">25GB Disk Space</h4>
            <h4 className="data">25GB Bandwidth</h4>
            <h4 className="data">Unlimited Domain</h4>
            <h2 className="data">$89/M</h2>
            <button className="data button enterprise">Purchase</button>
          </div>
          <div className="item" style={item}>
            <h2 className="label standardLabel">Standard</h2>

            <h4 className="data">1500 Email</h4>
            <h4 className="data">15GB Disk Space</h4>
            <h4 className="data">15GB Bandwidth</h4>
            <h4 className="data">Unlimited Domain</h4>
            <h2 className="data">$69/M</h2>
            <button className="data  button standard">Purchase</button>

          </div>
        </div>

      </div>
      </div>

    </>

  

 
  )
}

export default HtmlAdd


// import { Radio, RadioGroup } from '@mui/material';
// import { margin } from '@mui/system';
// import React, { useEffect, useRef, useState } from 'react';
// import './DisplayAsGrid.css';


// function HtmlAdd() {
//   let [check, setCheck] = useState(['flex', 'row', 'center', 'wrap']);
//   const[centerAllign,setCenterAllign]=useState(['center'])
  

//   const item = { color: 'white' }
//   useEffect(()=>{
//     document.getElementById('container1').style=`display:flex;
//     justify-content:center;
//     align-items:center;
//     gap: 20px;
//     flex-wrap:wrap;
//     flex-direction: row;
//     min-height: 100vh;
//     `;
//   },[]);
//   const allignItems = (allign, notAlign, styleType) => {
//     let currentIndex;
//     let result = -1;
//     notAlign.forEach(r => {
//       currentIndex = check.indexOf(r);
//       if (currentIndex !== -1) {
//         result = currentIndex;
//         return;
//       }
//     })
//     const newChecked = [...check];
//     if (result !== -1) {
//       newChecked[result] = allign;
//     }
//     setCheck(newChecked);
//     document.getElementById('container1').style = ` ${styleType}:${allign}   `;
//     // working
//   }

//   const allignContent = (allign, notAlign, styleType) => {
//     let currentIndex;
//     let result = -1;
//     notAlign.forEach(r => {
//       currentIndex = centerAllign.indexOf(r);
//       if (currentIndex !== -1) {
//         result = currentIndex;
//         return;
//       }
//     })
//     const newChecked = [...centerAllign];
//     if (result !== -1) {
//       newChecked[result] = allign;
//     }
//     setCenterAllign(newChecked);
//     document.getElementById('container1').style = ` ${styleType}:${allign}   `;
//     // working
//   }
 
 


//   console.log(check)
//   return (
//     <>

//       <div className='body inputs'>
//         <label className='mainLabel' >Display</label>
//         <label className='Labell' > <input type="radio" name="flex" className='flexradio' checked={check.indexOf('flex') !== -1} onChange={() => { allignItems('flex', ['inline-Flex'], 'display') }} />Flex</label>
//         <label className='Labell'>
//           <input type="radio" name="flex" checked={check.indexOf('inline-Flex') !== -1} onChange={() => { allignItems('inline-Flex', ['flex'], 'display') }} />

//           Flex-inline</label>

//       </div>
//       <div className='body inputs'>
//         <label className='mainLabel' >Flex direction</label>
//         <label className='Labell'> 
        
//         <input type="radio" name="flex_direction" checked={check.indexOf('row') !== -1} onChange={() => { allignItems('row', ['column', 'row-reverse', 'column-reverse'], 'flex-direction') }} />
//        row</label>
       
//         <label className='Labell'>
//         <input type="radio" name="flex_direction" checked={check.indexOf('column') !== -1} onChange={() => { allignItems('column', ['row', 'row-reverse', 'column-reverse'], 'flex-direction') }} />Column</label>
      
//         <label className='Labell'>
//         <input type="radio" name="flex_direction" checked={check.indexOf('row-reverse') !== -1} onChange={() => { allignItems('row-reverse', ['row', 'column', 'column-reverse'], 'flex-direction') }} />RowReverse</label>
     
//         <label className='Labell'>
//         <input type="radio" name="flex_direction" checked={check.indexOf('column-reverse') !== -1} onChange={() => { allignItems('column-reverse', ['row', 'row-reverse', 'column'], 'flex-direction') }} />ColumnReverse</label>

//       </div>

//       <div className='body inputs'>
//         <label className='mainLabel' >Wrap</label>
//         <label className='Labell'>
//         <input type="radio" name="wrapp" checked={check.indexOf('nowrap') !== -1} onChange={() => { allignItems('nowrap', ['wrap', 'wrap-reverse'], 'flex-wrap') }} />nowrap</label>
//         <label className='Labell'>
//         <input type="radio" name="wrapp" checked={check.indexOf('wrap') !== -1} onChange={() => { allignItems('wrap', ['nowrap', 'wrap-reverse'], 'flex-wrap') }} />wrap</label>  
//         <label className='Labell'>
//         <input type="radio" name="wrapp" checked={check.indexOf('wrap-reverse') !== -1} onChange={() => { allignItems('wrap-reverse', ['wrap', 'nowrap'], 'flex-wrap') }} />wrap-reverse</label>
//       </div>

//       <div className='body inputs'>
//         <label className='mainLabel' >JustifyContent</label>
//         <label className='Labell'>
//         <input type="radio" name="justify" checked={check.indexOf('center') !== -1} onChange={() => { allignItems('center', ['space-around', 'space-evenly','start'], 'justify-content') }} />center</label>
      
//         <label className='Labell'>
//         <input type="radio" name="justify" checked={check.indexOf('space-around') !== -1} onChange={() => { allignItems('space-around', ['center', 'space-evenly','start'], 'justify-content') }} />space-around</label>
        
//         <label className='Labell'>
//         <input type="radio" name="justify" checked={check.indexOf('start') !== -1} onChange={() => { allignItems('start', ['center', 'space-around', 'space-evenly'], 'justify-content') }} />Start</label>
       
//         <label className='Labell'>
//         <input type="radio" name="justify" checked={check.indexOf('space-evenly') !== -1} onChange={() => { allignItems('space-evenly', ['center', 'space-around','start'], 'justify-content') }} />space-evenly</label>

//       </div>

//       <div className='body inputs'>

//         <label className='mainLabel' >AllignItems</label>
//         <label className='Labell'>
//         <input type="radio" name="allignItems" checked={centerAllign.indexOf('baseline') !== -1} onClick={() => { allignContent('baseline', ['center', 'flex-start', 'flex-end', 'stretch'], 'align-items') }} />baseline</label>
//         <label className='Labell'>
//         <input type="radio" name="allignItems" checked={centerAllign.indexOf('center') !== -1} onClick={() => { allignContent('center', ['baseline', 'flex-start', 'flex-end', 'stretch'], 'align-items') }} />center</label>       
//         <label className='Labell'>
//         <input type="radio" name="allignItems" checked={centerAllign.indexOf('flex-start') !== -1} onClick={() => { allignContent('flex-start', ['center', 'baseline', 'flex-end', 'stretch'], 'align-items') }} />flex-start</label>
//         <label className='Labell'>
//         <input type="radio" name="allignItems" checked={centerAllign.indexOf('flex-end') !== -1} onClick={() => { allignContent('flex-end', ['center', 'flex-start', 'baseline', 'stretch'], 'align-items') }} />flex-end</label>
       
//         <label className='Labell'>
//         <input type="radio" name="allignItems" checked={centerAllign.indexOf('stretch') !== -1} onClick={() => { allignContent('stretch', ['center', 'flex-start', 'flex-end', 'baseline'], 'align-items') }} />stretch</label>

//       </div>


//       <div className='body'>
     
//           <div className="container" id='container1' >
//             <div className="item" style={item}>

//               <h2 className="label basicLabel">Basic</h2>

//               <h4 className="data">500 Email</h4>
//               <h4 className="data">5GB Disk Space</h4>
//               <h4 className="data">5GB Bandwidth</h4>
//               <h4 className="data">Unlimited Domain</h4>
//               <h2 className="data">$49/M</h2>
//               <button className="data  button basic">Purchase</button>
//             </div>

//             <div className="item" style={item}>

//               <h2 className="label enterpriseLabel">Enterprise</h2>

//               <h4 className="data">2000 Email</h4>
//               <h4 className="data">25GB Disk Space</h4>
//               <h4 className="data">25GB Bandwidth</h4>
//               <h4 className="data">Unlimited Domain</h4>
//               <h2 className="data">$89/M</h2>
//               <button className="data button enterprise">Purchase</button>
//             </div>
//             <div className="item" style={item}>
//               <h2 className="label standardLabel">Standard</h2>

//               <h4 className="data">1500 Email</h4>
//               <h4 className="data">15GB Disk Space</h4>
//               <h4 className="data">15GB Bandwidth</h4>
//               <h4 className="data">Unlimited Domain</h4>
//               <h2 className="data">$69/M</h2>
//               <button className="data  button standard">Purchase</button>

//             </div>
//           </div>

//         </div>
     

//     </>




//   )
// }

// export default HtmlAdd

