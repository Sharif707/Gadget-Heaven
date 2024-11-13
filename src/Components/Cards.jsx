import { Link, NavLink } from "react-router-dom";

const Cards = ({ categorydata, isEmpty, handleRemove, product }) => {
  const {product_id, product_title, product_image, price } = categorydata || {};

  if (isEmpty) {
    return (
      <h1 className="text-4xl font-bold text-center w-full">
        No matching products found.
      </h1>
    );
  }
  return (
    <Link to={`/product/${product_id}`}>
      <div className="card bg-base-100 w-72 h-[410px] shadow-xl overflow-hidden">
        <figure className="w-full h-48">
          <img className="object-cover h-full" src={product_image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{product_title}</h2>
          <p className="text-[#09080F99] text-opacity-60 text-xl">
            Price:${parseFloat(price)}USD
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
