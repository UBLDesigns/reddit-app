const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="backdrop-blur-sm fixed left-0 w-full bottom-0 p-6 bg-black/20 border-t border-black/25 text-white/60 text-xs z-20">
            &copy;{year}, UBL Designs
        </footer>
    );
}

export default Footer;