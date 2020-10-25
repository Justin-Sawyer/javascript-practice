//DOCUMENT OBJECT MODEL
console.log(`
DOCUMENT OBJECT MODEL
So far, we've created JavaScript algorithms and run them either in repl.it or from a HTML page. 
The real power of JavaScript, however, comes from the interactivity that it can add to your web projects. 
You do this by interacting with something called the Document Object Model, or DOM.

When the browser loads a new HTML document that has been requested from a server, remember that it's just opening a plain text file. 
It doesn't know anything about that file - it just sees plain text. 
The browser needs a way to make sense of this text file and turn it into the web page that we will eventually see in our browser window. 
It needs to break down every element that we've included in our HTML file and relate them to each other so that it knows that, 
for example, the p paragraph element is within the header div. 
Furthermore, it must allow the developer who created the web page to interact with these elements within the page, 
so that users can change things dynamically. The DOM describes how web browsers should implement these requirements.

In this lesson, we're going to look at how the DOM represents the web page, and how we can interact with it using JavaScript.

The DOM trees:
Internally, a browser creates a tree:
document -> HTML -> head -> 
etc
At the very top of the tree is "document" - this is the ROOT NODE and this represents the entire HTML page.
Everything else is a child of this element
A node can be a parent, it can have children and siblings.
All nodes are single parents.
Thus:
        Body
        /  \\
    div <-> script
    
Tree generator:
https://chrome.google.com/webstore/detail/html-tree-generator/dlbbmhhaadfnbbdnjalilhdakfmiffeg`);