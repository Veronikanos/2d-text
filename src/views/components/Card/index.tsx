import "./index.scss";
interface CardProps {
  title: string;
}

const Card = ({title}: CardProps)  => {
  return (
    <div className="card">
      <div className="card__title">
        <span
          className="card__transparent text-rows"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <span
          className="card__colored text-rows"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
    </div>
  );
};

export default Card;
