import { useQuery } from 'react-query';
import NoteCard from "../NoteCard/NoteCard";

const Notes = () => {

    // Getting notes 
    const {data: notes, isLoading, refetch } = useQuery('notes', () => fetch('http://localhost:5000/todos').then(res=> res.json()));

    if (isLoading){
        return <p>Loading...</p>
    }

    return (

        
        <div>

            <div className="flex justify-center items-center mt-12 mb-8">
                <div className="bg-gray-200 h-[2px] w-[100px]"></div>
                <div><span class="text-gray-900 text-lg md:text-2xl font-medium title-font max-w-sm mx-4">RECENT NOTES</span></div>
                <div className="bg-gray-200 h-[2px] w-[100px]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    notes.map(note => <NoteCard key={note._id} note={note}></NoteCard>)
                }
            </div>
        </div>
    );
};

export default Notes;