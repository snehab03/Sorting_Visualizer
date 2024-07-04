import { useEffect, useState } from 'react';
import './Bar.css';

function Bar({index,length,color,changeArray}) {
    const [len,setlen]=useState(length)
    useEffect(()=> {
        setlen(length);
    },[length])
    const colors =[
        ['rgba(g1,90,241,0.5)'],         //'rgba(61,90,241,1.2)','rgba(255,48,79,0.5)','rgba(131,232,90,0.2)'
        ['rgb(69, 178, 221)'],
        ['rgba(131,232,90,0.5)'],
    ];
    // const barStyle = {
    //     height:length,
    // };
    const inputStyle={
        position:'relative',
        top:Math.floor(length/2)-12,
        width:length,
        left:-Math.floor(length/2)+13,
        border:'none',
        background:'none',
    }
    const bottom ={
        transform: `translateY(${200-length}px) rotateX(-90deg)`,
        backgroundColor: `${colors[color][0]}`,
        // boxShadow: `5px 5px 50px 5px ${colors[color][1]}`,
        transition: '0.3s'
    }

    const front_back_right_left = {
        height:`${length}px`,
        transform: `translateY(${200-length}px)`,
        backgroundColor: `${colors[color][0]}`,
        // boxShadow: `5px 5px 50px 5px ${colors[color][1]}`,
        transition: '0.3s'
    }
    const quantity = {
        position: 'relative',
        top: 225,
    }
    const handleChange =(e) => {
        let val=e.target.value;
        if(val ===''){
            setlen(0)
            changeArray(index,0)
        }else{
            val=parseInt(val);
            if(val>200){
                setlen(200);
                changeArray(index,200)
            }else{
                setlen(val);
                changeArray(index,val)
            }
        }

    };
    const increment = (e) => {
        setlen(len+1);
        changeArray(index,len);
    }
    const decrement = (e) => {
        setlen(len-1);
        changeArray(index,len);
    }
    return (
        <>
        <div className="bar">
            <div className="side top" ></div>
            <div className="side bottom" style={bottom}></div>
            <div className="side right" >
                <div className="color-bar right-color-bar" style={front_back_right_left}></div>
            </div>
            <div className="side left" >
                <div className="color-bar left-color-bar" style={front_back_right_left}></div>
            </div>
            <div className="side front">
                <div className="color-bar front-color-bar" style={front_back_right_left}>
                    <input 
                type="number" 
                length={length} 
                value={len} 
                style={inputStyle} 
                className='input'
                onChange={handleChange}/>
                </div>
                
            </div>
            <div className="side back">
                <div className="color-bar back-color-bar" style={front_back_right_left}></div>
            </div>
            <div className="quantity-nav">
                <div className="quantity-button quantity-up" style={quantity} onClick={increment}>
                    +
                </div>
                <div className="quantity-button quantity-down" style={quantity} onClick={decrement}>
                    -
                </div>
            </div>
        </div>
        </>
    )
}

export default Bar;