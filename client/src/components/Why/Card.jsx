import React from 'react';

function Card({ source, header, para }) {
  return (
    <div className="flex justify-center items-center w-full md:w-1/2 mt-20">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-dgrn body-top p-4 mh-27 scrollable-content">
        <div className=''>
        <img className="w-full rounded " src={source} alt="Card image cap" />
        </div>
        <div className="">
          <h1 className="nuni font-extrabold text-xl mt-2 clr-mgrn">{header}</h1>
          <p className="text-base clr-lgrn">
            {para}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
