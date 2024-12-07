import React, { useState, useEffect } from 'react';

const images = [
  'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
  'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
  'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [time,setTime] = useState(6000)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, time); 

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative mx-auto">
      <div className="relative">
        <img
          src={images[currentIndex]}
          alt={`carousel-image-${currentIndex}`}
          className="w-full sm:h-[75vh] h-[65vh] object-cover"
        />
      </div>
      <div className='absolute left-1/2 bottom-3 -translate-x-1/2 flex gap-3 px-5 py-1 rounded-2xl transition-all'>
        {
            images.map((_,id)=>{
                return (
                   <span className={`w-3 h-3 rounded-full ${id === currentIndex?"bg-gray-600":"bg-white "} transition-all`} onClick={()=>{setCurrentIndex(id);setTime(5000)}}/> 
                )
            })
        }
      </div>
    </div>
  );
}

export default Hero;
