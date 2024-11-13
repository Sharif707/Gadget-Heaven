

const WishListProduct = ({handleRemoved, wishedproduct}) => {
    const {price, product_image, product_title, description, product_id} = wishedproduct
    return (
        <div className='flex gap-6'>
        <div className='basis-1/5'>
         <img src={product_image} alt="" />
        </div>
        <div className='flex-1 flex justify-between items-center'>
        <div>
        <h1 className='text-2xl font-semibold'>
             {product_title}
         </h1>
         <p className='text-[#09080F99] text-opacity-60 my-3'>
             {description}
         </p>
         <p className='text-[#09080FCC] text-opacity-80 font-semibold text-xl'>
           Price: ${price}
         </p>
        </div>
         <div>
         <button className='btn' onClick={() => handleRemoved(wishedproduct)}>
         <i class="fa-solid fa-xmark"></i>
         </button>
        </div>
       
        </div>
       
     </div>
    );
};

export default WishListProduct;