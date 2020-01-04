const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes');
var titleOption = {
      describe: 'Title of note',
      demand: true,
      alias: 't'
}

var bodyOption = {
      describe: 'Body of note',
      demand: true,
      alias:'b'
}
const argv =  yargs
.command('add', 'Add a new note', {
      title: titleOption,
      body:bodyOption
})
.command('list', 'listing all notes')
.command('read', 'Read a note', {
      title:titleOption
})
.command('remove', 'remove a note', {
      title:titleOption
})
.help()
.argv

let command = process.argv[2];


if (command === "add"){
   var note = notes.addNote(argv.title, argv.body)
   notes.showNote(note);
}
else if(command === "list") {
      var allNotes = notes.getAll();
      console.log(`Printing ${allNotes.length} note(s)`);
      allNotes.forEach((element) => notes.showNote(element));
}
else if(command === 'read') {
    var note = notes.getNote(argv.title);
    notes.showNote(note); 
}  
else if (command === 'remove'){
      notes.remove(argv.title);
}