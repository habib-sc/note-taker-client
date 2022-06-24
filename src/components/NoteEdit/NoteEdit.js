import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const NoteEdit = () => {
    const {id} = useParams();

    const navigate = useNavigate();

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    useEffect( () => {
        fetch(`http://localhost:5000/todo/${id}`)
        .then(res => res.json())
        .then(data => {
            setTitle(data.title);
            setDescription(data.description);
        });
    }, [id]);


    const handleNoteEdit = (e) => {
        e.preventDefault();

        const note = {title, description};

        fetch(`http://localhost:5000/todo/edit/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(note)
        })
        .then(res => res.json())
        .then(data => {
            navigate('/');
        });

    }



    return (
        <div className="container mx-auto px-4 mt-10">
            <form onSubmit={handleNoteEdit}>
                <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-4 flex flex-col mx-auto w-full mt-10 md:mt-0 relative shadow-md">
                    <h2 className="text-gray-900 text-lg md:text-2xl mb-3 text-center font-medium title-font">EDIT THIS NOTE</h2>
                    <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} placeholder="Note Title" className="w-full mb-3 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    <textarea name="description" value={description} onChange={e => setDescription(e.target.value)} placeholder="Note Description" className="w-full mb-3 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Update</button>
                </div>
            </form>
        </div>
    );
};

export default NoteEdit;