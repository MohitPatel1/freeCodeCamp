import './App.css';

function App() {

  // const quotes =["qoute1","qoute2","qoute3","qoute4","qoute5","qoute6"];
  // const getQuotes = async () => {
  //   const quote = await fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");
  //   return quote;
  // }

  return (
    <div id="quote-box"> 
      <div id="#text">{quotes[Math.random()*6]}</div>
      <div id="#author">quote author</div>
      <div id="#new-quote"></div>
      <a href="twitter.com/intent/tweet" target="_blank" id="#tweet-quote">tweet</a>
    </div>
  );
}

// get quotes from https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json

export default App;