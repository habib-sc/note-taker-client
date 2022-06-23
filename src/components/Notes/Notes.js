import NoteCard from "../NoteCard/NoteCard";

const Notes = () => {
    return (
        <div>

            <div className="flex justify-center items-center mt-12 mb-8">
                <div className="bg-gray-200 h-[2px] w-[100px]"></div>
                <div><span class="text-gray-900 text-lg md:text-2xl font-medium title-font max-w-sm mx-4">RECENT NOTES</span></div>
                <div className="bg-gray-200 h-[2px] w-[100px]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <NoteCard></NoteCard>
                <NoteCard></NoteCard>
                <NoteCard></NoteCard>
            </div>
        </div>
    );
};

export default Notes;