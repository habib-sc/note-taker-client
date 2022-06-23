
const NoteCard = (props) => {
    const {_id, title, description} = props.note;
    const {refetch} = props;

    // Handle todo delete 
    const handleNoteDelete = id => {
        const confirm = window.confirm("Are you sure you want to delte this Note?");

        if(!confirm){
            return;
        }

        const url = `http://localhost:5000/todo/delete/${id}`;
        fetch(url, {
        method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
        refetch();
        });
    };

    return (
        <div className="shadow-xl rounded p-4 border">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold pb-1 mb-1">{title}</h3>
                <div className="flex gap-4">
                    <button className="border px-2 rounded bg-indigo-100 text-indigo-500">Edit</button>
                    <button onClick={() => handleNoteDelete(_id)} className="border px-2 rounded bg-red-100 text-red-500">Delete</button>
                </div>
            </div>
            <p>{description}</p>
        </div>
    );
};

export default NoteCard;