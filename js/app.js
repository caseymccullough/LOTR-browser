console.log("Linked.");

// Dramatis Personae
const hobbits = [
  `Frodo Baggins`,
  `Samwise "Sam" Gamgee`,
  `Meriadoc "Merry" Brandybuck`,
  `Peregrin "Pippin" Took`
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  'The-Shire', 
  'Rivendell', 
  'Mordor'
];



const body = document.querySelector("body");
// ============
// Chapter 1
// ============

function makeMiddleEarth () { 
  console.log("1: makeMiddleEarth");

  // 1. create a section tag with an id of middle-earth
  const middleEarth = document.createElement("section");
  middleEarth.id = "middle-earth";

  // 2. use a for loop to iterate over the lands array that does the following:

  for (let i = 0; i < lands.length; i++)
  {
    
    const articleTag = document.createElement("article");
    articleTag.id = lands[i];
    articleTag.innerHTML = "<h1>" +lands[i] + "</h1>";
    /*
    const h1Tag = document.createElement("h1");
    h1Tag.innerText = lands[i];
    articleTag.appendChild(h1Tag);
    */

    middleEarth.appendChild(articleTag);
  }
  body.appendChild(middleEarth);
  
  //   2a. creates an article tag (there should be one for each land when the loop is done)

  //   2b. gives each land article an `id` tag of the corresponding land name

  //   2c. includes an h1 with the name of the land inside each land article

  //   2d. appends each land to the middle-earth section

  // 3. append the section to the body of the DOM.

}




// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
  console.log("2: makeHobbits");

  const hobbitList = document.createElement("ul");
  hobbitList.id = "hobbit-list";
 

  for (let i = 0; i < hobbits.length; i++)
  {
    const newHobbit = document.createElement ("li");
    newHobbit.className = "hobbit";
    newHobbit.id = hobbits[i];
    newHobbit.innerText = hobbits[i];
    hobbitList.appendChild(newHobbit);   
  }
  const theShire = document.getElementById('The-Shire');
  theShire.appendChild(hobbitList);

  // display an `unordered list` of hobbits in the shire

  // give each hobbit a class of `hobbit`

  // hint: create a 'ul' outside the loop into which to append the 'li's

  // hint: get 'The-Shire' by using its id

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".


// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() { 
  console.log("3: keepItSecretKeepItSafe");

  // create a div with an id of `'the-ring'`
  const theRingDiv = document.createElement("div");

  // give the div a class of `'magic-imbued-jewelry'`
  theRingDiv.className = 'magic-imbued-jewelry';
  theRingDiv.id ="ring";

  // add the ring as a child of `Frodo`
  document.getElementById('Frodo Baggins').appendChild(theRingDiv);

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".


// ============
// Chapter 4
// ============

function makeBaddies() { 
  console.log("4: makeBaddies");

  const baddiesList = document.createElement("ul");
  baddiesList.id = "baddies-list";

  for (let i = 0; i < baddies.length; i++)
  {
    const newBaddie = document.createElement("li");
    newBaddie.class = "baddy";
    newBaddie.id = baddies[i];
    newBaddie.innerText = baddies[i];
    baddiesList.appendChild(newBaddie);
  }

  document.getElementById("Mordor").appendChild(baddiesList);


  // display an unordered list of baddies in Mordor

  // give each of the baddies a class of "baddy"

  // remember to append them to Mordor

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..


// ============
// Chapter 5
// ============

function makeBuddies () { 
  console.log("5: makeBuddies");

  // create an `aside` tag
  const aside = document.createElement("aside");
  const buddiesList = document.createElement("ul");
  buddiesList.id = "buddies-list";
   
  // put an `unordered list` of the `'buddies'` in the aside
  for (let i = 0; i < buddies.length; i++)
  {
      const newBuddy = document.createElement("li");
      newBuddy.class = "Buddy";
      newBuddy.id = buddies[i];
      newBuddy.innerText = buddies[i];
      buddiesList.appendChild(newBuddy);
  }
  aside.appendChild(buddiesList);

  // insert your aside as a child element of `rivendell`
  document.getElementById('Rivendell').appendChild(aside);

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".


// ============
// Chapter 6
// ============

function leaveTheShire() { 
  console.log("6: leaveTheShire");
  const theShire = document.getElementById('The-Shire');
  // assemble the `hobbits` and move them to `rivendell`
  const hobbitList = document.getElementById("hobbit-list");
  theShire.removeChild(hobbitList);
  document.getElementById('Rivendell').appendChild(hobbitList);
  

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"


// ============
// Chapter 7
// ============

function beautifulStranger() { 
  console.log("7: beautifulStranger");

  // change the `'Strider'` text to `'Aragorn'`

  const strider = document.getElementById("Strider");
  strider.innerText = "Aragon";
  strider.id = "Aragon";
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"


// ============
// Chapter 8
// ============

function forgeTheFellowShip() { 
  console.log("8: forgeTheFellowShip");
  // create a new div called `'the-fellowship'` within `rivendell`
  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
  // after each character is added make an alert that they 
  // have joined your party
  
  const rivendell = document.getElementById("Rivendell");
  const fellowshipDiv = document.createElement("div");
  fellowshipDiv.id = "fellowship";

  const theHobbits = document.getElementById("hobbit-list")
  const theBuddies = document.getElementById('buddies-list');
  fellowshipDiv.appendChild(theHobbits);
  fellowshipDiv.appendChild(theBuddies);

  const hobbits = theHobbits.childNodes;
  const buddies = theBuddies.childNodes;
  for (let i = 0; i < hobbits.length; i++)
  {
    alert("adding " + hobbits[i].innerText);
  }
  for (let i = 0; i < buddies.length; i++)
  { 
    alert("adding " + buddies[i].innerText);
  }
  rivendell.appendChild(fellowshipDiv);



  // NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() { 
  console.log("9: theBalrog");
   // change the `'Gandalf'` text to `'Gandalf the White'`
   const gandalf = document.getElementById("Gandalf the Grey");
   gandalf.innerText = "Gandalf the Groovy";

   gandalf.style.backgroundColor = "white";
   gandalf.style.border ="gray solid 2px";



   // apply the following style to the element, make the 
   // background 'white', add a grey border
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"


// ============
// Chapter 10
// ============

function hornOfGondor() { 
  console.log("10: hornOfGondor");
  // pop up an alert that the horn of gondor has been blown
  alert("Hey nerds, the Horn of Gondor has been blown!");

  document.getElementById("Boromir").remove();
  // Boromir's been killed by the Uruk-hai!
  // Remove `Boromir` from the Fellowship
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"


// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() { 
  console.log("11: itsDangerousToGoAlone");
  // take `Frodo` and `Sam` out of the fellowship and move 
  // them to `Mordor`
  // add a div with an id of `'mount-doom'` to `Mordor`
  const samAndFrodo = document.createElement("ul");
  samAndFrodo.id = "sam-frodo";
  const frodo = document.getElementById("Frodo Baggins");
  const sam = document.getElementById('Samwise "Sam" Gamgee');

  samAndFrodo.appendChild(sam);
  samAndFrodo.appendChild(frodo);

  const mordor = document.getElementById("Mordor");

  const mountDoom = document.createElement("div");
  mountDoom.id = "mount-doom";
  
  mordor.appendChild(samAndFrodo);
  mordor.appendChild(mountDoom);

}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"


// ============
// Chapter 12
// ============

function weWantsIt() { 
  // Create a div with an id of `'gollum'` and add it to Mordor
  
  console.log("12: weWantsIt");
  const gollum = document.createElement("div");
  gollum.id = "gollum";

  const mordor = document.getElementById("Mordor");
  mordor.appendChild(gollum);

  
  // Remove `the ring` from `Frodo` and give it to `Gollum`

  const theRing = document.getElementById("ring");
  gollum.appendChild(theRing);

  // Move Gollum into Mount Doom
  mountDoom = document.getElementById("mount-doom");
  mountDoom.appendChild(gollum);
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() { 
  console.log("13: thereAndBackAgain");
  // remove `Gollum` and `the Ring` from the document

  document.getElementById("gollum").remove();

  //document.getElementById("ring").remove();
  /* NOTE ring is already removed as it is a child of gollum */

  // Move all the `hobbits` back to `the shire`
  // don't forget Sam and Frodo!!! 
  const hobbits = document.getElementById("hobbit-list");
  const samAndFrodo = document.getElementById("sam-frodo");
 
  /* empty Sam and Frodo div, place with Hobbits */
  while (samAndFrodo.childNodes.length > 0)
  {
    hobbits.appendChild(samAndFrodo.childNodes[0]);
  }
  
  document.getElementById("The-Shire").appendChild(hobbits);
  document.getElementById("sam-frodo").remove();

  


}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================


document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth);
document.getElementById('chapter-2').addEventListener('click', makeHobbits);
document.getElementById('chapter-3').addEventListener('click', keepItSecretKeepItSafe);
document.getElementById('chapter-4').addEventListener('click', makeBaddies);
document.getElementById('chapter-5').addEventListener('click', makeBuddies);
document.getElementById('chapter-6').addEventListener('click', leaveTheShire);
document.getElementById('chapter-7').addEventListener('click', beautifulStranger);
document.getElementById('chapter-8').addEventListener('click', forgeTheFellowShip);
document.getElementById('chapter-9').addEventListener('click', theBalrog);
document.getElementById('chapter-10').addEventListener('click', hornOfGondor);
document.getElementById('chapter-11').addEventListener('click', itsDangerousToGoAlone);
document.getElementById('chapter-12').addEventListener('click', weWantsIt);
document.getElementById('chapter-13').addEventListener('click', thereAndBackAgain);
document.getElementById('all-chapters').addEventListener('click', () => {
  makeMiddleEarth();
  makeHobbits();
  keepItSecretKeepItSafe();
  makeBaddies();
  makeBuddies();
  leaveTheShire();
  beautifulStranger();
  forgeTheFellowShip();
  theBalrog();
  hornOfGondor();
  itsDangerousToGoAlone();
  weWantsIt();
  thereAndBackAgain();
});
