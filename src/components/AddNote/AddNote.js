
const AddNote = ({refetch}) => {

    // Handling Note Add
    const handleAddNote = e => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;

        const note = {title, description};

        fetch('http://localhost:5000/todo/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(note)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                e.target.title.value = '';
                e.target.description.value = '';
                refetch();
            }
        });
    };

    return (
        <div className="mt-10">
            <form onSubmit={handleAddNote}>
                <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-4 flex flex-col mx-auto w-full mt-10 md:mt-0 relative shadow-md">
                    <h2 class="text-gray-900 text-lg md:text-2xl mb-3 text-center font-medium title-font">ADD A NOTE</h2>
                    <input type="text" name="title" placeholder="Note Title" class="w-full mb-3 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    <textarea name="description" placeholder="Note Description" class="w-full mb-3 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add Note</button>
                </div>
            </form>
        </div>
    );
};

export default AddNote;