import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MegaMenu = () => {


    const [showMenu, setShowMenu] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [batchData , setBatchData] = useState([''])
    const handleMouseEnter = () => {
        setShowMenu(true);
    };

    const handleMouseLeave = () => {
        setShowMenu(false);
    };

    // get all batchs data

    const batch = async () => {
        const reqBatch = await fetch(`http://localhost:8000/all-batches`);
        const responseData = await reqBatch.json();
        setBatchData(responseData)
        console.log(responseData);
      };
      
      useEffect(() => {
        batch();
      }, []);
      




    return (
        <div className="flex justify-between items-center">
            <ul className="flex items-center">
                <li className=" relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <a  href="#">Batches</a>
                    {showMenu && (
                        <div className="absolute top-8 right-0 w-[700px] h-[300px]  overflow-y-scroll rounded-md bg-white text-black py-2 px-4 shadow-md">
                            <ul className="grid grid-cols-4 gap-4">
                               {
                                batchData && batchData.map(batch => ( <li key={batch._id}>
                                    <Link to={`alumni${batch.url}`}>{batch.batchNumber}</Link>
                                </li>))
                               }
                               
                            </ul>
                        </div>
                    )}
                </li>

            </ul>
        </div>
    );
};

export default MegaMenu;
