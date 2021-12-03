import React, { useState, useEffect } from 'react';
import './QuotePage.css';
import { FiRefreshCw } from 'react-icons/fi';

const QuotePage = () => {
  const [quote, setQuote] = useState(undefined);

  const getNewQuote = async () => {
    try {
      let newQuote = await fetch('https://random-math-quote-api.herokuapp.com/');
      newQuote = await newQuote.json();
      setQuote({
        quote: newQuote.quote,
        author: newQuote.author,
      });
    } catch (err) {
      setQuote({
        quote: 'There is no errors in math (This is an error message)',
        author: 'Rafael Echart',
      });
    }
  };

  useEffect(async () => {
    getNewQuote();
  }, []);

  return (
    <div className="homeContainer" id="custom-element">
      <div className="homeInnerContainer">
      <p>Math Quote..</p>
      {quote
      && <><h3 className="quoteClass">{quote.quote}</h3>
      <span className="authorClass">-{quote.author}</span><br/>
      <FiRefreshCw onClick={getNewQuote} className="newQuoteIcon"/></>}

      </div>
    </div>
  );
};
export default QuotePage;