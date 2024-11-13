import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DynamicTitle = () => {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        switch (path) {
            case '/':
                document.title = 'Gadget Heaven';
                break;
            case '/dashboard':
                document.title = 'dashboard';
                break;
            case '/statistics':
                document.title = 'statistics';
                break;
            default:
                document.title = 'Gadget Heaven';
        }
    }, [location]);

    return null;
};
export default DynamicTitle