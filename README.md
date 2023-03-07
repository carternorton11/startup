# README - Carter Norton & Zach Everton
## Carter's Notes

### Push and Pull
Github allows for easy version/source control across multiple devices and users Visual Studio code has built in tools that interface with Github, allowing you to manage source control of your projects directly from your IDE! To commit edits: simply press "CMD Enter" while highlighting whatever you have changed To push edits: select the source control button on the left side, then enter a update message and click the check mark to send edits through

If you have merge problems when pulling from GitHub, use the built in merge resolver to resolve the conflicting changes.

### Development and Production Environments
Development and Production environments are kept seperate You can run a deployment script from a console window using something like:

'./deploy.sh -k ~/prod.pem -h yourdomain.click -s simon'

The -k parameter provide the credential file necessary to access your production environment. The -h parameter is the domain name of your production environment. The -s parameter represents the name of the application you are deploying (either simon or startup).

Basically, this automatically copies all your files into a new environment and sets them up to run.

### A Crash Course in Bash (again)
- **echo** - Output the parameters of the command
- **rm** - Remove file(s)
- **mv** - Move file(s)
- **cp** - Copy files
- **ls** - List files
- **curl** - Command line client URL browser
- **grep** - Regular expression search
- **find** - Find files
- **top** - View running processes with CPU and memory usage
- **df** - View disk statistics
- **cat** - Output the contents of a file
- **less** - Interactively output the contents of a file
- **wc** - Count the words in a file
- **ps** - View the currently running processes
- **kill** - Kill a currently running process
- **sudo** - Execute a command as a super user (admin)
- **ssh** - Create a secure shell on a remote computer
- **scp** - Securely copy files to a remote computer
- **history** - Show the history of commands
- **ping** - Check if a website is up
- **tracert** - Trace the connections to a website
- **dig** - Show the DNS information for a domain
- **man** - Look up a command in the manual

### Web Servers

#### The Internet
<img width="589" alt="Screen Shot 2023-01-17 at 9 33 25 AM" src="https://user-images.githubusercontent.com/99043737/212957135-9da54c7c-bb0d-4111-88e6-0886446f5c31.png">

Domain names are converted to IP address via the Domain Name System (DNS)
'trace route' console utility allows a machine to see how information travels to another IP

Routers direct information to and from specific IP addresses
### Tour Pal

My friends and I have often struggled to decide where to go backcountry skiing. With hundreds of options on the Wasatch Front,
we rarely start with the same ideas about where to go, and we have to go through a messy process of explaining our ideas and 
justifying our choice. With TourPal, friends can pick a date to go skiing, and each can nominate locations, entering in key 
information like approach distance, aspect, and vertical feet. An hour of negotiation in a group chat is reduced to a few minutes on TourPal.

<img width="546" alt="Screen Shot 2023-01-12 at 8 17 29 AM" src="https://user-images.githubusercontent.com/99043737/212110064-4e6749bb-4529-4b4d-9760-6db3d5296212.png">

![Test lol](yourTours.png?raw=true "\"Your Tours\" Page")

#### Key Features
Secure login with HTTPS <br>
Propose tour dates with a selected group of friends <br>
Nominate locations for a particular tour date <br>
Vote on tour locations,<br>
Save tours to a personal library<br>
Track tours completed and summary statistics (distance, time, and areas skied)<br>
Create bucket list of runs to complete in the future <br>

#### Web Servers
Today, most programming languages can interface with HTTP

Gateways are often used to sort incoming HTTP information to different services<img width="612" alt="Screen Shot 2023-01-17 at 9 43 21 AM" src="https://user-images.githubusercontent.com/99043737/212959370-ffe9756f-35dc-4993-9ce9-1ca2cb042641.png">

My public IP address: 3.21.83.52

ssh -i ~/Desktop/AWS_KeyPairs/production.pem  ubuntu@3.21.83.52

the "dig" console utility allows us to see the IP address for any domain name
the "whois" utlity allows us to see registration for domain names

Domain name in browser -> browser checks cache -> DNS server checks cache of names -> authoritative name server checks cache 

TTL: time an IP address for an address is kept before being cleared out of caches

#### Route 53
DNS records allow a domain name to direct to a given IP address

#### Caddy 
Caddy responds to incoming HTTP requests, and either responds or routes request (gateway or reverse proxy)

![image](https://user-images.githubusercontent.com/99043737/214905680-0ea338bc-aaf7-419b-a8e6-d829b4883537.png)

##### Important Caddy Files
Configuration file : definitions for routing HTTP requests<br>
HTML files : serves up these files when requested

#### HTTPS
HTTPS is encryptions with the TLS protocol <br>
Web Certificates: validity of a site can be confirmed by browser <br>
Let's Encrypt: service that can validate any secure certificate <br>
In order to enable HTTPS, access UBUNTU, and update caddyfile from a specific port to all requests to domain name

### HTML
HTML provides framework, CSS provides style, javascript is functionality <br>

#### Basics
Elements and Tags: Tags are delimited by arrows, and can enclose elements <br>
Attributes: Describe the specific details of the element (id, class, etc) <br>
Hyperlinks: Anchored with an "a", and contain a reference href to a hyperlink <br>

#### Structure
Common elements: body, header, footer, main, section, table, div, and span <br>
Order: content -> padding -> border -> margin <br>
flex: row is all content in one row, column is all content in one column <br>
#### Input
'Form' is container for input, that can be used to submit information <br>
Input can be categorized into various forms (radio, url, password), each delineated by the `type` attribute
Handling Input <br>
	<form> input container <br>
	<fieldset> labeled grouping <br>
	<input> multiple types of input <br>
	<select> selection dropdown <br>
	<meter> display value with a known range <br>
	
#### Media
Media tags all take an absolute or relative URL as an attribute <br>
`SVG` and `Canvas` allow for creation of graphics inline <br>
```
<img
  alt="mountain landscape"
  src="https://images.pexels.com/photos/164170/pexels-photo-164170.jpeg"
/>
```
To import font: @import url(fonts.google.{type of font}) <br>

#### To deploy changes to HTML
bash deployWebsite.sh -k ~/Desktop/AWS_KeyPairs/production.pem -h tourpal.click

### CSS
#### Commands
<div> labels an instance to be styled in CSS <br>
classes: can have multiple instances with particular labels <br>
display: block, inline, flex, grid <br>
meta tag: ensures page will not be scaled <br>
float: allows an object to float around inline objects <br>
@media (orientation: portrait) allow <br>
CSS Selectors <br>
	body section - any section that is a descendant of a body <br>
	section > p - any p that is a direct child of a section <br>
	p ~ div - any p that has a div sibling <br>
	p + div - any p that has an adjacent div sibling <br>
MDN Units <br>
  px: pixels, pt: points, em: multiplier of letter m in parents font, rem: multiplier of letter m in root, vw: % of viewpoint width, vh: % of view height <br> 
  

### JavaScript
#### Introduction
Use the <script> element or "src" to insert code into a javascript file <br>
Attributes can automatically create "event listeners" to look for an event to respond to <br>
Variables: Use either "let" and "const" to declare changeable or null variables <br>
Primitives: Null, Undefined, Boolean, Number, BigInt, String, Symbol <br>
Types: Object, Function, Data, Array, Map, JSON <br>
Operators: +, -, *, /, and === (strict equality of type) <br>
Funky Functions: "for of": iterates over an iterable's property values (const val of array) <br>
Arrow functions: basically js version of lambda functions. (input) => {code; return output} *stolen from Zach <br>
Array Operations: sort : a.sort((a,b) => b-a) , for-of-loop: for (i of a.values()) {... }, new array: a.map(i => i+ ) <br>

#### JSON
JavaScript Object Notation: easily convertable to JS objects <br>
Keys are always strings (with quotes), values must be valid JSON data type <br>
'JSON.parse converts to JSON, 'JSON.stringify' converts from JSON <br>

#### Other Functions
'rest' is a placeholder parameter than accepts any number of parameters and converts them to an array <br>
'spread' does the opposite, and expands an array to fill all parameters <br>

#### Scope, Modules, and DOM
Global > Module > Function > Block <br>
'Var' is always global. Const and Let can be used like typical constant and changeable variables <br>
'This' can refer to an object, function, or globally, depending on where it is referenced <br>
Modules = packages <br>
DOM is essentially a way for the code to directly interface with HTML objects <br>
Event Listeners allow your code to listen to clipboard, focus, keyboard, mouse, etc. <br>

#### Promises and Async/Await
Promises allow code to be completed asynchronously. <br>
then,catch,finally: .then((result) => ) <br>
Await expression blocks until the promise state is 'fulfilled', or throws an exception if the state is rejected <br>
  Ex: console.log(await cow()); will not return until cow is resolved <br>
Async allows await to be called somewhere besides the top level of javascript <br>

### WebServices

#### URL, Ports, HTTP
Convention: <scheme>://<domain name>:<port>/<path>?<parameters>#<anchor> <br>
Common Port Numbers: 20 (FTP) 22 (SSH) 53 (DNS) 443 (HTTPS) <br>
Caddy is listening to 80,443 for requests. Startup must be on port 4000 <br>
http://info.cern.ch/hypertext/WWW/Helping.html GET /hypertext/WWW/Helping.html <br>

##### HTTP Request
```http
GET /hypertext/WWW/Helping.html HTTP/1.1
Host: info.cern.ch
Accept: text/html
```
##### HTTP Response
```HTTP/1.1 200 OK
Date: Tue, 06 Dec 2022 21:54:42 GMT
Server: Apache
Last-Modified: Thu, 29 Oct 1992 11:15:20 GMT
ETag: "5f0-28f29422b8200"
Accept-Ranges: bytes

<TITLE>Helping -- /WWW</TITLE>
<NEXTID 7>
<H1>How can I help?</H1>There are lots of ways you can help if you are interested in seeing
the <A NAME=4 HREF=TheProject.html>web</A> grow and be even more useful...
```
#### SOP & CORS
Same Origin Policy (SOP) forces Javascript to only make requests to a domain if it's the same as the one being viewed <br>
Cross Origin Resource Sharing (CORS) allows domains to share their information <br>

#### Service Design
API's are also called endpoints. These are comparables with Handlers-Services <br>
OpenAPI defines formatting for API's <br>
Remote Procedure Calls (RPC): exposes service endpoints as function calls
```POST /updateOrder HTTP/2
{"id": 2197, "date": "20220505"}
```
Representational State Transfer (REST): 
```PUT /order/2197 HTTP/2
{"date": "20220505"}
```
GraphQL 
```query {
  getOrder(id: "2197") {
    orders(filter: { date: { allofterms: "20220505" } }) {
      store
      description
      orderedBy
    }
  }
}
```
#### Node.js
1. Create your project directory
1. Initialize it for use with NPM by running `npm init -y`
1. Make sure `.gitignore` file contains `node-modules`
1. Install any desired packages with `npm install <package name here>`
1. Add `require('<package name here>')` to your JavaScript code
1. Run your code with `node main.js`

## Zach Notes

I was informed that we should both be keeping track of "things we learned" in the README. So this space is for the stuff I learn starting now. Notes from before are in my startup repository (deprecated).

### Domain names

Multiple IP addresses can point to the same domain name <br>
Domain name is simply a text string that follows a naming convention and is listed in a domain name registry <br>
Domain names have a root domain, and may have one or more possible subdomain prefixes. the subdomain is listed before the root domain in the domain name. The last part (like .com, .gov, .net, etc) is called the top level domain. <br>
Use `whois` to find out more about the domain name. <br>
DNS holds records for addreses and canonical names. (A and CNAME). An A record points from a domain name to an IP address. A CNAME record maps one domain name to another.

#### Logging into AWS instance thru ssh:
ssh -i ./key ubuntu@skelect.click 

#### Simon notes
- forgot how to use the fine access token with Github but I made another one and it seems to work. Might end up making another command to do that instead.
- Lots of interesting stuff with the html page. Wasn't really sure how much to change so mostly made it the same. Flipped the colors around for fun but that's about it
- Even though I pretty much copied everything line for line, the favicon wasn't showing up on the tab for my Simon page. Not sure what caused that to happen

#### HTML vs CSS
HTML elements are usually of the form < h > < /h > or some variant. Formatting information is put within the first <h> part and content is put between the two parts.
CSS elements are ususally of the form h { z-index: 5;} where each attribute is a attribute-value pair is connected by colons and separeated by semicolons

#### More CSS
CSS attributes are inherited top-down but priority is given to the lowest level of inheritance, just like with other classes. However, a higher attribute may override a lower one if the user adds !important
@media tags help to change the layout of the webpage as the screen size changes.
Many CSS attributes change how the elemtnt's children are arranged but don't really change the element itself. If it doesn't seem like any attributes are fixing and allignemtn issue, try changing attributes in the parent class instead.

#### Javascript
Many different types of loops! For, while (similar to the ones we covered in 235), plus a do {} while() loop and two special for loops: for (x in iterable){} will loop through indices or keys for the iterable. for(y of iterable){} loops through the values in the iterable.
</br>
Arrow functions: basically js version of lambda functions. (input) => {code; return output}
</br>
Objects and classes: An object is really just a set of key-value pairs, the value is either a literal or a function. Objects can be made without a class, or with a class. can be defined as simply as: a = {
first: 1;
second: 2;
}
a function that returns an object is called a constructor, even if it doesn't have any special name or whatever. If you define using a class, define a constructor() function inside that gets called when an object is made
create an object from a class using the following syntax: </br>
a = new class(var1,var2,var3);
</br>
if a class is inherited, define it: class couch extends furniture {}
</br>
reference parent functions using "super()"

#### Async and Promises
A promise is an OBJECT that represents the eventual completion or failure of an asynchronous operation. </br>
Promise function looks like: </br>
someFunction(regularInput).then(successReturn(), failureReturn()) </br>
  </br>
  Two ways to do asynchronous expression, either a .then .cath chain or await with a try-catch block </br>
  
  </br>
  await is a lot neater and looks nicer but you do need to remember to put either at the top level or within a function that has async in its definition. To use Async/await in a function, put "async" before the function name when declaring it (ie async function test(){}). Then within the function, whenever you do something that returns a promise, just say "await" before.

  ```Questions covered in midterm review

What does <div> do in HTML?
Creates a division element.
<b> tag stands for bring attention
html	The page container
head	Header information
title	Title of the page
meta	Metadata for the page such as character set or viewport settings
script	JavaScript reference. Either a external reference, or inline
include	External content reference
body	The entire content body of the page
header	Header of the main content
footer	Footer of the main content
nav	Navigational inputs
main	Main content of the page
section	A section of the main content
aside	Aside content from the main content
div	A block division of content
span	An inline span of content
h<1-9>	Text heading. From h1, the highest level, down to h9, the lowest level
p	A paragraph of text
b	Bring attention
table	Table
tr	Table row
th	Table header
td	Table data
ol,ul	Ordered or unordered list
li	List item
a	Anchor the text to a hyperlink
img	Graphical image reference
dialog	Interactive component such as a confirmation
form	A collection of user input
input	User input field
audio	Audio content
video	Video content
svg	Scalable vector graphic content
iframe	Inline frame of another HTML page

To point to another DNS record, you should use the following record type:
CNAME - alias record, points to another A record
“A” record is for an ip address
Domain names are broken up into a root domain, with one or more possible subdomain prefixes. The root domain is represented by a secondary level domain and a top level domain. The top level domain (TLD) represent things like com, edu, or click. So a root domain would look something like byu.edu, google.com, or cs260.click. The possible list of TLDs is controlled by ICANN, one of the governing boards of the internet.

You CAN use CSS to load fonts from google
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
Question using set.timeout, then, catch.
setTimeout function places a timer to execute before executing the content, but executes following lines while waiting.
.next executed asynchronously.
Blocks of code outside/after the promise get executed before the promise if the promise is waiting for an async
Inside promise functions, say “resolve()” or “reject()” instead of return. This will determine what other functions do with it.
Valid JSON format:
Key value pair, has to be double quotes for key, value cannot be undefined
CSS formatting:
Element name.class
Valid ways to call javascript:
<script>content to execute</script>
Regex: /A/i  i at the end means case-insensitive. | is the or thing 
array.filter(fn) returns only elements that return true look up regex
Regex modifiers:
g	Perform a global match (find all matches rather than stopping after the first match)
i	Perform case-insensitive matching
m	Perform multiline matching
Regex symbols:
[abc]	Find any character between the brackets
[^abc]	Find any character NOT between the brackets
[0-9]	Find any character between the brackets (any digit)
[^0-9]	Find any character NOT between the brackets (any non-digit)
(x|y)	Find any of the alternatives specified
.	Find a single character, except newline or line terminator
\w	Find a word character
\W	Find a non-word character
\d	Find a digit
\D	Find a non-digit character
\s	Find a whitespace character
\S	Find a non-whitespace character
\b	Find a match at the beginning/end of a word, beginning like this: \bHI, end like this: HI\b
\B	Find a match, but not at the beginning/end of a word
\0	Find a NULL character
\n	Find a new line character
\f	Find a form feed character
\r	Find a carriage return character
\t	Find a tab character
\v	Find a vertical tab character
\xxx	Find the character specified by an octal number xxx
\xdd	Find the character specified by a hexadecimal number dd
\udddd	Find the Unicode character specified by a hexadecimal number dddd
n+	Matches any string that contains at least one n
n*	Matches any string that contains zero or more occurrences of n
n?	Matches any string that contains zero or one occurrences of n
n{X}	Matches any string that contains a sequence of X n's
n{X,Y}	Matches any string that contains a sequence of X to Y n's
n{X,}	Matches any string that contains a sequence of at least X n's
n$	Matches any string with n at the end of it
^n	Matches any string with n at the beginning of it
?=n	Matches any string that is followed by a specific string n
?!n	Matches any string that is not followed by a specific string n

Valid ways to declare functions:
Function f(x){}
Const f = function (x){}
Const f = (x)=>{}
CSS padding: Puts space around the content
(Pals before marriage) padding, border, margin
(Peanut Butter Mayonnaise)
CSS box model: Margin border padding content
Js Reduce:
Look at the JS array functions!
HTML tag for unordered list: <ul>
Javascript addqueryselector returns an iterator that points to the FIRST one. Doesn’t select all unless you explicitly grab all
Hyperlink in HTML: <a href=’link’>x</a>
Javascript .map function
push	Add an item to the end of the array	a.push(4)
pop	Remove an item from the end of the array	x = a.pop
slice	Return a sub-array	a.slice(1,-1)
sort	Run a function sort an array in place	a.sort((a,b) => b-a)
values	Creates an iterator for use with a for of loop	for (i of a.values()) {...}
find	Find the first item satisfied by a test function	a.find(i => i < 2)
forEach	Run a function on each array item	a.forEach(console.log)
reduce	Run a function to reduce each array item to a single item	a.reduce((a, c) => a + c)
map	Run a function to map an array to a new array	a.map(i => i+i)
filter	Run a function to remove items	a.filter(i => i%2)
every	Run a function to test if all items match	a.every(i => i < 3)
some	Run a function to test if any items match	a.some(i => 1 < 1)
&	&amp;
<	&lt;
>	&gt;
"	&quot;
'	&apos;
😀	&#128512;
Are html shortcuts.
Name the main html file index.html

Await will cause the interpreter to wait
 Try catch await functions. Await pauses the execution until the promise is delivered
What does the DOM textContent property do?
Sets the child text for an element
What is a DNS Subdomain?
Flex-direction: column-reverse puts the elements from bottom to top
Arrow functions can take a single variable name y instead of ()
Const f = y => ++y; is valid
Chmod permissions codes
  ```
