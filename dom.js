console.log("window");
console.log("hello");
window.console.log("hello2");
//window is the part there is no need to specify window it is global 
window.alert("hello");
//dom (document object model) is the tree structure also called heirarchy 
window.document//sara code print hojega
//to see the properties and method print object of code/element can use dir
console.dir(window.document)
//isme document k menthods or properties visible honge
//in tree model every box is knwn as node 
console.dir(document.body) //to access body
//child nodes
console.dir(document.body.childNodes[1]);
//it is use when we want to do some changes in our html code (run time p - dynamically changes that can do with js)
document(.body.style.background="green")
//when we refresh it change can not be seen so it is dynamically change 
console.dir(document.body.childNodes[3].innerText="abcd");
//dom is used for dynamic manupulation.
//selecting with id(unique)
document.getElementById("myID")
document.getElementById("heading");//#id (#symbol)
//selecting with class
document.getElementsByClassName("myClass")
//multiple elemts in same categories for this can use class(can be same)represented bydot(.)
let headings = document.getElementsByClassName("heading-class")
//to store
console.dir(headings);
    console.log(headings);//collection similar to array

//selecting with tag(to access all tags headings.)
document.getElementsByTagName("p")
let parhs = document.getElemnetsByTagNames("p");
console.dir(parhs);
//query selector 
document.querySelector("myid/ myClass/tag")
//returns first element
document.querySelectorAll("myid /myclass/tag")
//returns a node list
let elements = document.querySelector("p");
console.dir(element);
let firstEl = document.querySelector("p");
console.dir(firstEl);
let allEl = document.querySelectorall("p");
console.dir(allEl);
let firstElc = document.querySelector(".myclass");
console.dir(firstEl);
let firstElid = document.querySelector("id");
console.dir(firstEl);
//tagname:return tag
//inner text:return text content
div.innerText
//fruits\nmango\n (output)
//innerhtml:returns the plain text or html content
div.innerHTML
//all strings will be visible can see properly with all tags
//text content:return textual content even for hidden elements
//get,set,changeor update the value 
firstEl.tagName;//to print tag name
//parents then child nodes then desendents (same categories);
//learn homework nodes have property of first child/last child
//learn  homework dom nodes text nodes,comment nodes,elements node in dom we work on element nodes
//learn about event selector (imp)




