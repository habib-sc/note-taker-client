import { useQuery } from 'react-query';
import AddNote from "../AddNote/AddNote";
import Notes from "../Notes/Notes";

const Home = () => {

    // Getting notes 
    const {data: notes, isLoading, refetch } = useQuery('notes', () => fetch('http://localhost:5000/todos').then(res=> res.json()));

    return (
        <div className="container mx-auto px-4 pb-20">
            <AddNote refetch={refetch}></AddNote>
            <Notes notes={notes} isLoading={isLoading}></Notes>
        </div>
    );
};

export default Home;