let header=document.createElement("header");
let container=createHtmlElement("div","container");
let banner = createHtmlElement("div","banner");
let greystripe= createHtmlElement("div","grey-stripe");
greystripe.innerHTML=`<p class="invisible">Lor ipsum dolor, sit amet consectetur adipisicing elit. Laborum ea ex veritatis fun  with furtation zombies all over walking dead 11 voluptas unde optio deleniti facere qui ducimus sapiente.</p>`;
var myImg = createHtmlElement("img","myimg");
myImg.src="avatar.jpg";
myImg.alt="no img";
var tittle = createHtmlElement("p","tittle");
tittle.innerHTML="KALAISELVAN RAVI";

banner.appendChild(greystripe);
banner.append(myImg,tittle);
container.appendChild(banner);
header.append(container);

document.body.append(header);

let body = document.createElement("body");
let container1=createHtmlElement("div","container");
let address=createHtmlElement("h5","address");
address.innerHTML="6A/9A2/2A, Senthoorvelan street ,Amman Nagar, Komarapalayam – 638183, Namakkal Dt.| +919994408597 |kalaiselvaninkpm@gmail.com";

let vertical = createHtmlElement("div","vertical");

let a=createHtmlElement("div","a");
let b=createHtmlElement("div","b");
let span=createHtmlElement("span","fa fa-user-circle fa-2x","icon");
let title = createHtmlElement("span","title");
title.innerHTML=`Profile`;

let profile=createHtmlElement("p");
profile.innerText=`Creative professional with good communication skills, keen interest in problem solving and decision making, ready to take-up responsibilities. Gone through various in-plant trainings and programs to enhance the technical skills with hands on experience. `;

let span1=createHtmlElement("span","fa fa-flask fa-2x","icon1");
let title1 = createHtmlElement("span","title");
title1.innerHTML=`Skills`;

b.append(span,title,profile);

let skills=createHtmlElement("div")
skills.innerHTML=`<p style="text-align:center";>Techanical Skills </p>`

let Techanical=createHtmlElement("div")

let javascript =createHtmlElement("span");
javascript.innerHTML=` Javascript &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
<label for="points">71%</label>
<input type="range"  name="points" min="0" max="100" value="70"></span><br>`;

let css =createHtmlElement("span");
css.innerHTML=` CSS &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp<label for="points">60%</label>
<input type="range"  name="points" min="0" max="100" value="60"></span><br>`;

let HTML=createHtmlElement("span");
HTML.innerHTML=` HTML &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
<label for="points">80%</label>
<input type="range"  name="points" min="0" max="100" value="80"></span><br>`;

let React =createHtmlElement("span");
React.innerHTML=` React &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
<label for="points">75%</label>
<input type="range"  name="points" min="0" max="100" value="75"></span><br>`;


let typescript =createHtmlElement("span");
typescript.innerHTML=` Typescript &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
<label for="points">30%</label>
<input type="range"  name="points" min="0" max="100" value="30"></span><br>`;


let Mongo =createHtmlElement("span");
Mongo.innerHTML=` Mongo &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
<label for="points">60%</label>
<input type="range"  name="points" min="0" max="100" value="60"></span><br>`;


let Development =createHtmlElement("span");
Development.innerHTML=` Development &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
<label for="points">90%</label>
<input type="range"  name="points" min="0" max="100" value="90"></span><br>`;

let additional=createHtmlElement("div");
additional.innerHTML=`<p style="text-align: center;">Additional Skills</p>`

let teamworker =createHtmlElement("span");
teamworker.innerHTML=` <br>Team Worker &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
<label for="points">95%</label>
<input type="range"  name="points" min="0" max="100" value="95"></span><br>`;

let Businessdevelopment =createHtmlElement("span");
Businessdevelopment.innerHTML=` Business Development &nbsp&nbsp&nbsp
<label for="points">80%</label>
<input type="range"  name="points" min="0" max="100" value="80"></span><br><br>`;

Techanical.append(javascript,css,HTML,React,typescript,Mongo,Development);
additional.append(teamworker,Businessdevelopment)
skills.append(Techanical,additional);
b.append(span1,title1,skills);

let span2=createHtmlElement("span","fa fa-briefcase fa-2x","icon2");
let title2 = createHtmlElement("span","title");
title2.innerHTML=`Work Experience`;
let workexp=createHtmlElement("div")

let trainiee=createHtmlElement("p");
trainiee.innerHTML=` <p><strong>Graduate Apprentice Trainee</strong> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp3.6.2018-7.3.2019</p>`

let ul = createHtmlElement("ul");
let li=createHtmlElement("li");
li.innerHTML=` Lead and execute the all the phases of the production of the despatch department`

let li1=createHtmlElement("li");
li1.innerHTML=`Making sure  Despatched Materials are good and working condition ,ensuring that all the good are thightly packed and well persevered condition `

let li2=createHtmlElement("li");
li2.innerHTML=`Being a Rack GAT I am ensuring the racks are in the prefect condition and the data stored in the system orderly exactly as in the rack `


ul.append(li,li1,li2);
trainiee.append(ul);
workexp.append(trainiee);
b.append(span2,title2,workexp)

let c=createHtmlElement("div","c");


let workexp1=createHtmlElement("div")

let turner=createHtmlElement("p");
turner.innerHTML=`<p><strong>CNC Turner </strong>  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 6.6.2017-21.9.2017
<br>Karpagam University</p>`

let ul1 = createHtmlElement("ul");
let turnerli=createHtmlElement("li");
turnerli.innerHTML=`  It is undertaken by the Govt- of india to give the knowledege about machine coding and what are their types and how can you do work them by yourself`

let turnerli1=createHtmlElement("li");
turnerli1.innerHTML=` we need to know that work experience in the cnc turning operations and how to operate by ourself  `

let turnerli2=createHtmlElement("li");
turnerli2.innerHTML=`we happens learn there are more than two types ofmachine coding and we going to learn the most predominent one namely fanuku`

ul1.append(turnerli,turnerli1,turnerli2);
turner.append(ul1);

let awareness=createHtmlElement("p");
awareness.innerHTML=` <p><strong> Entrepreneurship Awareness</strong>  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 18.7.2016-21.7.2016
                              <br>Karpagam College of Engineering</p>`

let ul2 = createHtmlElement("ul");
let awarenessli=createHtmlElement("li");
awarenessli.innerHTML=`   It happened to one of the best Awareness camp about Entrepreneurship meet that I could know of , it happens to be three day program and very useful one too..`

let awarenessli1=createHtmlElement("li");
awarenessli1.innerHTML=` The program was comprises of several sucessful Entrepreneurs explained different type of self jobs in different areas `

let awarenessli2=createHtmlElement("li");
awarenessli2.innerHTML=`The use of Entrepreneurs for the socity was explained in more delibriant manner , the man who is an Entrepreneur and what he has to do to be a sucessfulone `

let awarenessli3=createHtmlElement("li");
awarenessli3.innerHTML=`The Entrepreneur awareness camp also made us to visits and know more how the company that led by Entrepreneur will be`

ul2.append(awarenessli,awarenessli1,awarenessli2,awarenessli3);
awareness.append(ul2);
workexp1.append(turner,awareness);


let span3=createHtmlElement("span","fa fa-graduation-cap fa-2x","icon2");
let title3 = createHtmlElement("span","title");
title3.innerHTML=`Education`;

let div = createHtmlElement("div")
div.innerHTML=` <p><strong>Bachelor of Mechanical Engineering</strong> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 13.8.2014-6.6.2018
<br>Karpagam College of Engineering (Autonomous), Coimbatore. </p>
<p><strong>Higher Secondary Certificate</strong> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 8/2012-4/2014
<br>J.K.K.Nattraja Mat. Hr. Sec. School, Komarapalayam </p>
<p><strong> Secondary School Learning Certificate</strong> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 6/2012
    <br>J.K.K.Nattraja Mat. Hr. Sec. School, Komarapalayam </p>`

c.append(span2,title2,workexp1,span3,title3,div);
a.append(b,c);
container1.append(address,vertical,a);
body.appendChild(container1);
document.body.append(body);



function createHtmlElement(elename,className="",id=""){
    var elem = document.createElement(elename);
    elem.setAttribute("class",className);
    elem.setAttribute("id",id);
    return elem;
}