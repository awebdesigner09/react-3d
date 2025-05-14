const Card = ({cardName,cardAge,cardJob,counter}) => {

  return (
    <>
      <div className="container">
        <div>Name : {cardName}</div>
        <div>Age : {cardAge}</div>
        <div>Job : {cardJob}</div>
        <button onClick={counter}>+1</button>
      </div>
    </>
  );
};
export default Card;
