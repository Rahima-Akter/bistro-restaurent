import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Navbar from '../shared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className='h-full flex flex-col'>
            <Navbar />
            <div className='flex-grow'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;