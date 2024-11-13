import React from "react";
import { useNavigate } from "react-router-dom";

const BannerContent = () => {
  const navigate = useNavigate()
  return (
    <div className="mb-24 text-center pt-10">
      <h1 className="text-5xl font-bold text-white leading-normal">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
      <p className="my-4 md:mt-6 md:my-8 text-white">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
      <div>
        <button onClick={() => navigate('/dashboard')} className="py-4 px-8 text-[#9538E2] rounded-3xl font-bold text-xl bg-white">
            Shop Now
        </button>
      </div>
    </div>
  );
};

export default BannerContent;
