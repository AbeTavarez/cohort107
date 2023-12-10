const form: HTMLFormElement = document.querySelector("form")!;
const title: HTMLInputElement = form["note-title"];
const body: HTMLTextAreaElement = form["note-body"];

// Types
type NoteTitle = string;
type NoteBody = string;
type NoteID = Date;
type NoteCreatedAt = Date;

// Interfaces
interface Note {
  id: NoteID;
  title: NoteTitle;
  body: NoteBody;
  createdAt: NoteCreatedAt;
}

form.addEventListener("submit", function (e: Event): void {
  e.preventDefault();
  console.log("click");
});

/**
 * @description Create a new note
 * @param Note
 */
function createNote(title: HTMLInputElement, body: HTMLInputElement): Note {
  const newNote: Note = {
    id: new Date(Date.now()),
    title: title.value,
    body: body.value,
    createdAt: new Date(Date.now()),
  };
  return newNote;
}

function displayNote() {
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  h3.textContent = title.value;
  p.textContent = body.value;
  div.appendChild(h3);
  div.appendChild(p);
}
