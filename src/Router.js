import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import ErrorBoundary from 'components/ErrorBoundary';

const ItemsPageLazy = lazy(() => import('pages/ItemsPage'));
const NFTDetailsLazy = lazy(() => import('pages/NFTDetails'));
const HomePageLazy = lazy(() => import('pages/HomePage'));
const CreateItemPageLazy = lazy(() => import('pages/CreateItemPage'));

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <ErrorBoundary>
                <Suspense fallback={<div />}>
                    <Routes>
                        <Route path="/" element={<HomePageLazy />} />
                        <Route path="items" element={<ItemsPageLazy />} />
                        <Route path="items/:contract/:itemId" element={<NFTDetailsLazy />} />
                        <Route path="create" element={<CreateItemPageLazy />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </Suspense>
            </ErrorBoundary>
            <Footer />
        </BrowserRouter>
    );
};

export default Router;
