import React from "react";

const Notes = props => {
    return (
        <div className="note-list">
            {props.notes.map(note => (
                <div className="note" key={note.id}>
                    <h2>{note.first_name} {note.last_name}</h2>
                    <h2>{note.name}</h2>
                    <p>{note.password}</p>
                    <p>{note.role}</p>
                    <p>{note.email}</p>
                    <img src={note.avatar} alt="" />
                </div>
            ))}
        </div>
    );
};

export default Notes;
