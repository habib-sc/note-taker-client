import AddNote from "../AddNote/AddNote";
import Notes from "../Notes/Notes";

const Home = () => {
    return (
        <div className="container mx-auto px-4">
            <AddNote></AddNote>
            <Notes></Notes>
        </div>
    );
};

export default Home;