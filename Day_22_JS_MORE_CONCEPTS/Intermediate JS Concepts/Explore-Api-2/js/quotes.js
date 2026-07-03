const LoadQuote = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data=>displayQuote(data))
}

const displayQuote = quote =>{
    const blockQuote = document.getElementById('quotes');
    blockQuote.innerHTML=quote.quote;
}

LoadQuote();