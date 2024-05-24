const Cards = (props) => {
  const { name, age, image } = props.card;
  return (
    <article className="person">
      <img src={image} alt={name} className="person-img" />
      <div className="person-info">
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};

export default Cards;
