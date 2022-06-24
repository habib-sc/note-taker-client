import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="text-gray-600 body-font border-b">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to='/'>
                    <span className="title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ml-3 text-xl">Note Taker</span>
                </Link>

                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link to='/' className="mr-5 hover:text-gray-900">
                        All Notes
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;