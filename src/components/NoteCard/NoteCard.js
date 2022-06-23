
const NoteCard = (props) => {
    const {title, description} = props.note
    return (
        <div className="shadow-xl rounded p-4 border">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold pb-1 mb-1">{title}</h3>
                <div className="flex gap-4">
                    <button className="border px-2 rounded bg-indigo-100 text-indigo-500">Edit</button>
                    <button className="border px-2 rounded bg-red-100 text-red-500">Delete</button>
                </div>
            </div>
            <p>{description}</p>
        </div>
    );
};

export default NoteCard;