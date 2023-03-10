import React from 'react';

const LeafDrop = () => {
    return (
        <div>
            <div>
                <img src={require("../img/leaf.png")} className="max-h-10 max-w-10 absolute bg-gray-400 animate-drop" alt="" />
            </div>
            <div>
                <img src={require("../img/leaf1.png")} className="max-h-10 max-w-10 absolute bg-gray-400 animate-drop left-40" alt="" />
            </div>
            <div>
                <img src={require("../img/leaf2.png")} className="max-h-10 max-w-10 absolute bg-gray-400 animate-drop left-80" alt="" />
            </div>
            <div>
                <img src={require("../img/leaf3.png")} className="max-h-10 max-w-10 absolute bg-gray-400 animate-drop right-20" alt="" />
            </div>
            <div>
                <img src={require("../img/leaf.png")} className="max-h-10 max-w-10 absolute bg-gray-400 animate-drop right-80" alt="" />
            </div>
        </div>
    );
};

export default LeafDrop;