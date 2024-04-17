import { useState } from 'react';
import App from '../components/App';

const AppContainer = () => {
    const [search, setSearch] = useState('');
    const [endPointSearch, setEndPointSearch] = useState(null);

    const handleSearch = () => {
        setEndPointSearch(search);
        setSearch('');
    }

    return (<App search={search} setSearch={setSearch} endPointSearch={endPointSearch} submitSearch={handleSearch} />);
}

export default AppContainer;