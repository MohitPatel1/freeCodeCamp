import './App.css';

function App() {

  const getQuotes = async () => {
    const quote = await fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");
    const quotes = quote.json();
    console.log(quotes)
    return quotes;
  }

  const quotes = getQuotes();
  

  //quotes[Math.random()*6
  return (
    <div id="quote-box"> 
      <div id="#text">{quotes[Math.floor(Math.random() * 6)]}</div>
      {console.log(quotes.quotes)}
      <div id="#author">quote author</div>
      <div id="#new-quote"></div>
      <a href="twitter.com/intent/tweet" target="_blank" id="#tweet-quote">tweet</a>
    </div>
  );
}

export default App;
