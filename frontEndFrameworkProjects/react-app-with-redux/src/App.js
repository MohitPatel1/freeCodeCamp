import './App.css';
import { useState } from 'react';

function App() {
  
  const getQuotes = async () => {
    const quote = await fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");
    const quotesObject = await quote.json();
    const quotes = await quotesObject.quotes
    const quoteString = JSON.stringify(quotes)
    localStorage.setItem("quotes",quoteString);
    return quotes;
  }

  getQuotes();
  
    const quoteString = localStorage.getItem("quotes")
    const quotes = JSON.parse(quoteString)
    // const [quote , setQuote] = useState(quotes[0]); //quotes[1]
    console.log(quotes[0])
    console.log(quotes.length)
  
  return (
    <div id="quote-box"> 
      <div id="#text" class="bg-red-700">{quotes[Math.floor(Math.random() * quotes.length)].quote}</div>
      {/* {console.log(quotes[1])} */}
      <div id="#author">quote author</div>
      <div id="#new-quote"></div>
      <a href="twitter.com/intent/tweet" target="_blank" id="#tweet-quote">tweet</a>
    </div>
  );
}

export default App;
