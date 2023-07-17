let score=0;
let wicket=0;
let ballWiseRes=[];
let hit=0;
let comment = React.createRef();
//you can get time
const time = new Date().toLocaleTimeString();

function addScore(val){
   hit = val;
    rootElement.render(<App />);
    
   
}
function addWicket(){
  hit="W";
    rootElement.render(<App />);
    
   
}
let ball=1;
let over=0;
function handleSubmit(event){
    event.preventDefault();
    if(hit=='W'){
        wicket+=1;
    }
    else{
    score+=hit;
    }
    ballWiseRes.unshift(
    // <span>{hit}{","}{comment.current.value}</span>
    <>
    <span><strong>{over}.{ball}</strong> </span> 
    <span>{`${hit},${comment.current.value}`      }    </span>
   
    <hr></hr>
    </>
    );
    ball+=1;
    if(ball==7){
        over+=1;
        ball=1;
    }
    hit=0;
    comment.current.value="";
   
    rootElement.render(<App />);
}

const Form = () =>(
    <form onSubmit={handleSubmit}>
        <input value={hit}/>
        <input ref={comment}/>
        <button>submit</button>
    </form>
)




const OverWiseDisplay = () =>(
    <div>
      {  ballWiseRes.map((val,index) => 
        
        <>
    {!(index%1)?<br></br>:undefined}
      
    {<span key={index}> {val=='W'?<span style={{color: "red"}} key={index}>W</span>:  <span key={index}> {val===0?".":  val}</span>}&nbsp;</span>}
      
      </>
     
      
      )
      
      }

    </div>
)
const ScoreButtons = () =>(
    <div>
    <button onClick ={()=> addScore(0)}>0</button>
    <button onClick ={()=> addScore(1)}>1</button>
    <button onClick ={()=> addScore(2)}>2</button>
    <button onClick ={()=> addScore(3)}>3</button>
    <button onClick ={()=> addScore(4)}>4</button>
    <button onClick ={()=> addScore(5)}>5</button>
    <button onClick ={()=> addScore(6)}>6</button>
    <button onClick ={addWicket}>Wicket</button>
</div>

)



const App = () =>
(
    <>
    <h1>SCORE KEEPER</h1>
    <h2>SCORE:{score}/{wicket}</h2>
    <ScoreButtons/>
    <br/>
    
   <Form />

   <hr/>
{ballWiseRes.map((res,index)=>(
    <p key={index}>{res}</p>
))}
   
    </>
)
         
         
         
         
         
         
         
         const rootElement = ReactDOM.createRoot(document.getElementById("root"));
          rootElement.render(<App />);