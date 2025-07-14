import '../App.css';
export default function Question({ question, options, onAnswer }) {
  return (
    <div>
      <h2 className="h2">{question}</h2>
      {options.map(function(option,index){
        return(
            <button className="button" type="button" key={index} onClick={()=>onAnswer(option)}>{option}</button>
        )
      })}
    </div>
  );
}
