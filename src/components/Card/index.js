import "./card.css";

const Card = ({ key, image, brand, size, title, price }) => {
  return (
    <div className="cardContainer">
      <img src={image} alt="Product image" />
      <div className="cardContent">
        <div className="brand-size">
          <strong>{brand}</strong>
          <pre>{size.map((item) => `${item}  `)}</pre>
        </div>
        <p>{title}</p>
        <div className="price-add">
          <span>₹{price}</span>
          <span>
            <button>Add</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
