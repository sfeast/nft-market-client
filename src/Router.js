import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import ErrorBoundary from 'components/ErrorBoundary';
import ToastContainer from 'components/ToastContainer';
import NFTDetails from 'pages/NFTDetails';
import ItemsPage from 'pages/ItemsPage';
import HomePage from 'pages/HomePage';
import CreateItemPage from 'pages/CreateItemPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <ErrorBoundary>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="items" element={<ItemsPage />} />
                    <Route path="items/:contract/:itemId" element={<NFTDetails />} />
                    <Route path="create" element={<CreateItemPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </ErrorBoundary>
            <Footer />
            <ToastContainer />
        </BrowserRouter>
    );
};

export default Router;
