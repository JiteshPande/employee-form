import React, { useRef, useEffect, useState } from 'react';
import './DisplayAsGrid.css';

function HtmlAdd() {
  const [flexDirectionState, setFlexDirectionState] = useState('row');
  const [flexState, setFlexState] = useState('flex');
  const [wrap, setWrap] = useState('wrap');
  const [justifyContent, setJustifycontent] = useState('center');
  const [allignItems, setAllignItems] = useState('center');
  const allign = useRef();
  /*eslint-disable*/
  const item = { color: 'white' };
  useEffect(() => {
    document.getElementById('container1').style = `
      flex-direction:${flexDirectionState};
      flex-wrap:${wrap};
      display:${flexState};
      justify-content:${justifyContent};
      align-items:${allignItems};
      min-height:70vh;
      gap:20px;
      `;
  }, [flexDirectionState, flexState, wrap, justifyContent, allignItems]);
 
  return (
    <div>
      <div className="body inputs">
        <label className="mainLabel">Display</label>
        <label className="Labell">
          {' '}
          <input type="radio" name="flex" className="flexradio" checked={flexState === 'flex'} onChange={() => { setFlexState('flex'); }} />
          Flex
        </label>
        <label className="Labell">
          <input type="radio" name="flex" checked={flexState === 'inline-flex'} onChange={() => { setFlexState('inline-flex'); }} />

          Flex-inline
        </label>

      </div>
      <div className="body inputs">
        <label className="mainLabel">Display</label>

        <label className="Labell">
          {' '}
          <input type="radio" id="row" name="fav_language" value="HTML" checked={flexDirectionState === 'row'} onClick={() => { setFlexDirectionState('row'); }} />
          Flexdirection_row
        </label>

        <label className="Labell">
          <input type="radio" id="column" name="fav_language" value="CSS" onClick={() => { setFlexDirectionState('column'); }} />
          Flexdirection_Column

        </label>

      </div>
      <div className="body inputs">
        <label className="mainLabel">wrap</label>

        <label className="Labell">
          <input type="radio" id="row" name="wrap" value="HTML" checked={wrap === 'wrap'} onClick={() => { setWrap('wrap'); }} />
          wrap

        </label>

        <label className="Labell">
          <input type="radio" id="column" name="wrap" checked={wrap === 'nowrap'} value="CSS" onClick={() => { setWrap('nowrap'); }} />
          nowrap

        </label>

      </div>
      <div className="body inputs">
        <label className="mainLabel">JustifyContent</label>
        <label className="Labell">
          <input type="radio" name="justify" checked={justifyContent === 'center'} onChange={() => { setJustifycontent('center'); }} />
          center

        </label>

        <label className="Labell">
          <input type="radio" name="justify" checked={justifyContent === 'space-around'} onChange={() => { setJustifycontent('space-around'); }} />
          space-around

        </label>

        <label className="Labell">
          <input type="radio" name="justify" checked={justifyContent === 'start'} onChange={() => { setJustifycontent('start'); }} />
          Start

        </label>

        <label className="Labell">
          <input type="radio" name="justify" checked={justifyContent === 'space-evenly'} onChange={() => { setJustifycontent('space-evenly'); }} />
          space-evenly

        </label>

      </div>
      <div className="body inputs">

        <label className="mainLabel">AllignItems</label>
        <label className="Labell">
          <input type="radio" name="allignItems" checked={allignItems === 'baseline'} onClick={() => { setAllignItems('baseline'); }} />
          baseline

        </label>
        <label className="Labell">
          <input type="radio" name="allignItems" checked={allignItems === 'center'} onClick={() => { setAllignItems('center'); }} />
          center

        </label>
        <label className="Labell">
          <input type="radio" name="allignItems" checked={allignItems === 'flex-start'} onClick={() => setAllignItems('flex-start')} />
          flex-start

        </label>
        <label className="Labell">
          <input type="radio" name="allignItems" checked={allignItems === 'flex-end'} onClick={() => { setAllignItems('flex-end'); }} />
          flex-end

        </label>

        <label className="Labell">
          <input type="radio" name="allignItems" checked={allignItems === 'stretch'} onClick={() => { setAllignItems('stretch'); }} />
          stretch

        </label>

      </div>
      <div className="body">
        <div className="contain">
          <div className="container" id="container1" ref={allign}>
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
    </div>
  );
}

export default HtmlAdd;
