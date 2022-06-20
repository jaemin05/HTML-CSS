const quotes = [
    {
        queto: "The road to success and the road to failure are almost exactly the same.",
        author: "Colin R. Davis"
    },
    {
        queto: "It is better to fail in originality than to succeed in imitation.",
        author: "Herman Melville"
    }, 
    {
        queto: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill"
    }, 
    {
        queto: "All progress takes place outside the comfort zone.",
        author: "Michael John Bobak"
    }, 
    {
        queto: "People should think",
        author: "Son"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.queto;
author.innerText = randomQuote.author;