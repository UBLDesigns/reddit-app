import { Outlet } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

const Root = ({search, setSearch, submitSearch}) => {
    return (
        <main className="bg-gradient-to-br from-gray-400 to-orange-400 h-svh overflow-y-auto">
            <Header search={search} setSearch={setSearch} submitSearch={submitSearch} />
            <section className="p-6 pt-28 pb-24">
                <Outlet/>
            </section>
            <Footer />
        </main>
    );
}

export default Root;