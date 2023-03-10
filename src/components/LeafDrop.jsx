import React from 'react';

const LeafDrop = () => {
    return (
        <div>
            <div>
                <img src={require("../img/leaf.png")} className="max-h-10 max-w-10 absolute animate-drop delay-75 duration-300  mt-4" alt="" />
            </div>
            <div>
                <img src={require("../img/leaf1.png")} className="max-h-10 max-w-10 absolute animate-drop duration-1000 left-40 -mt-6 delay-100" alt="" />
            </div>
            <div>
                <img src={require("../img/leaf2.png")} className="max-h-10 max-w-10 absolute animate-drop left-80 delay-200 mt-7 duration-500" alt="" />
            </div>
            <div>
                <img src={require("../img/leaf1.png")} className="max-h-10 max-w-10 absolute animate-drop right-2/4 delay-200 mt-7 duration-500" alt="" />
            </div>
            <div>
                <img src={require("../img/leaf3.png")} className="max-h-10 max-w-10 absolute animate-drop right-20 delay-500" alt="" />
            </div>
            <div>
                <img src={require("../img/leaf.png")} className="max-h-10 max-w-10 absolute animate-drop right-80 delay-1000" alt="" />
            </div>
        </div>
    );
};

export default LeafDrop;