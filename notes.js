const fs = require('fs'); 

var fetchNotes = () => {
      try {
            var noteString = fs.readFileSync('notes-data.json')
            return JSON.parse(noteString);
      }
      catch(e){
              return [];
      }

}

var saveNotes = (notes) =>{
      fs.writeFileSync("notes-data.json",JSON.stringify(notes));

} 

var addNote = (title, body) => {
      var notes = fetchNotes();
      var note = {
            title,
            body
      };
      
      var duplicateNotes = notes.filter((note)=> note.title === title);
      if(duplicateNotes.length === 0){
            notes.push(note);
            saveNotes(notes);
            return note;
      }
};

var getAll = () =>{
      return fetchNotes();
}

var getNote = (title) =>{
      var notes = fetchNotes();
      var removeIndex = notes.map((item)=>  item.title).indexOf(title);
      return notes[removeIndex];
      }
function remove(title){ 
      var notes = fetchNotes();
      var removeIndex = notes.map((item)=>  item.title).indexOf(title);
      if (removeIndex === -1) {
            console.log('DOES NOT EXIST');
      }
      else {
            notes.splice(removeIndex, 1);
            console.log("Note removed");
            saveNotes(notes); 
      }
}

const read = title =>{
      console.log(title)
}

const showNote = (note) =>{
      if (note) {
            console.log("Note created");
            console.log("--------------");
            console.log(`title: ${note.title}`);
            console.log(`body: ${note.body}`);
      }
      else{
            console.log('Note not found');
                  
      }
}
module.exports = {
      addNote,
      getAll,
      getNote, 
      read,
      remove,
      showNote
}