console.log("Notes App console");
showNotes();
// if user add a note ,add it to the localStorage
let addBtn=document.getElementById('addBtn');
addBtn.addEventListener("click" , function(e){
    let  addTxt =document.getElementById("addTxt");
    let notes=localStorage.getItem("notes");
    if(notes == null){
        notesObj = [ ];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes" , JSON.stringify(notesObj) ) //we have to store any thing in string not array for this purpose we can convert it into string
    addTxt.value = ""; //we want to show it blank after add a note

    console.log(notesObj); // to check wether it is adding in console or not

    showNotes();
});

// function to show note after clicking on the add Note button
function showNotes(){
    let notes =localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    let html="";
    notesObj.forEach(function(element,index) {
        // to display the note taking from the entery area
        html +=`
        <div class="noteCards card  my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div> 
        `;
    });
    
    // Element  to create a note
   let notesElm = document.getElementById('notes');
   if(notesObj.length != 0){
      notesElm.innerHTML = html;
   }
   else{
    notesElm.innerHTML =`Nothing to show! Use "Add a Note" section above to Add  Notes`
   }

}

// function to deleat node
function deleteNote(index){
    console.log("i am deleting");

    let notes =localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index , 1);
    localStorage.setItem("notes" , JSON.stringify(notesObj));
    showNotes(); 

};

// search feature
let search=document.getElementById('searchTxt');
search.addEventListener("input",function(){
    let inputval= search.value;
    console.log("input event faired", inputval);
    let noteCards=document.getElementsByClassName('noteCards  ');
    Array.from(noteCards).forEach(function(element){
        let cardTxt =element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputval)){
            element.style.display="block"
        }
        else{
            element.style.display="none"
        }
        // console.log(cardTxt); 
    })
})
 




