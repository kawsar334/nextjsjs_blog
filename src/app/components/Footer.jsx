const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-10">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <p className="text-sm">© {new Date().getFullYear()} BlogApp. All rights reserved.</p>
                <div className="space-x-4">
                    <a href="/about" className="text-sm hover:text-gray-400">About</a>
                    <a href="/contact" className="text-sm hover:text-gray-400">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
