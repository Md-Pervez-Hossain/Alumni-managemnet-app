import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Gallery = () => {

  const [galleries, setGalleries] = useState([]);
  const [gellary, setGellary] = useState([]);


  useEffect(() => {


    fetch(`http://localhost:5000/galleries`)
      .then(res => res.json())
      .then(data => {
        setGalleries(data)
      })




  }, [])

  if (!galleries) {
    return <p>Loading....</p>
  }

  const handleButtonClick = (id) => {

    fetch(`http://localhost:5000/galleries/${id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setGellary(data)



      })
  }

  
  return (
    <div className="mt-10">
      <p className="text-4xl lg:text-5xl font-semibold my-3">Our Gallery</p>

      {

        galleries.map((g) =>
          <button key={g._id} onClick={() => handleButtonClick(g.id)} className="px-5 py-6 w-full md:w-auto mt-4 text-xl mr-2 rounded-tl-3xl rounded-br-3xl font-semibold bg-gray-300 focus:bg-green-800 focus:text-white hover:bg-green-600 hover:text-white">{g.name}

          </button>
        )



      }

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
        {
          gellary?.map((singleGalary) => <>
            <img key={singleGalary._id}
              className="rounded-tl-3xl rounded-br-3xl mt-3 object-cover w-full h-56 md:h-64 xl:h-80"
              src={singleGalary.image_url}
              alt="University"
            />

          </>

          )
        }
      </div>
    </div>
  );
};

export default Gallery;
