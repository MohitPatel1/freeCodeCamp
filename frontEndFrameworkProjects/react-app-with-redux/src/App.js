import './App.css';
import { useState ,useEffect} from 'react';

function App() {
// fetches quotes from API call and stores result to local storage
  const getQuotes = async () => {
    const quote = await fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");
    const quotesObject = await quote.json();
    const quotes = await quotesObject.quotes
    const quoteString = JSON.stringify(quotes)
    localStorage.setItem("quotes",quoteString);
    // console.log("getQUotes")
    return quotes;
  }
  
  useEffect(() => {
    getQuotes();
  }, [])
  

// gets array from local storage and stores it in variable "quotes" 
  const quoteString = localStorage.getItem("quotes")
  const quotes = JSON.parse(quoteString)

// random number generator 
  const randomNumber = Math.floor(Math.random() * quotes.length)
  
// use state hook sets initial quote to random quote
    let [quote , setQuote] = useState(quotes[randomNumber]);

// function for changing quotes on click
    function newQuote () {
      setQuote(quotes[randomNumber]);
    }

// url for tweet
    let url =  `https://twitter.com/intent/tweet?text=${quote.quote} by ${quote.author}`
    console.log(url)
    
// returning jsx   
  return (
    <main className='h-screen bg-blue-300'>
      <div className="flex w-ful h-full justify-center items-center flex-col gap-6"> 
        <div id="quote-box" className="flex flex-col items-center gap-6 bg-white">
          <div id="#text" >{quote.quote}</div>
          {/* {console.log(quotes[1])} */}
          <div id="#author">{quote.author}</div>
          <div id="#new-quote" className='cursor-pointer' onClick={newQuote}>New Quote</div>
          <a href={url} target="_blank" id="#tweet-quote" rel='noreferrer'>tweet</a>
        </div>
        <h1>~ `by Mohit Patel</h1>
      </div>
    </main>
  );
}

export default App;


// `https://twitter.com/intent/tweet?text={quote.quote +quote.author}`