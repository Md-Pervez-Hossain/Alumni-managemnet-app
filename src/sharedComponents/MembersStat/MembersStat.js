import React from "react";

const MembersStat = () => {
  return (
    <div className="md:w-9/12 mx-auto my-16">
      <div className="bg-gray-100 flex justify-around items-center py-16">
        <div className="text-center">
          <h2 className="text-4xl font-semibold">Members</h2>
          <p className="text-2xl">3458+</p>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-semibold">Events</h2>
          <p className="text-2xl">58+</p>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-semibold">Awards</h2>
          <p className="text-2xl">3245+</p>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-semibold">Picnic</h2>
          <p className="text-2xl">45+</p>
        </div>
      </div>
    </div>
  );
};

export default MembersStat;
