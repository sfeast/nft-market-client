import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';

const ItemsPageLazy = lazy(() => import('pages/ItemsPage'));
const ItemPageLazy = lazy(() => import('pages/ItemPage'));
const HomePageLazy = lazy(() => import('pages/HomePage'));
const CreateItemPageLazy = lazy(() => import('pages/CreateItemPage'));

const Router = () => {
    return (
        <BrowserRouter>
            <Header />

            <Suspense fallback={<div />}>
                <Routes>
                    <Route path="/" element={<HomePageLazy />} />
                    <Route path="items" element={<ItemsPageLazy />} />
                    <Route path="items/:itemId" element={<ItemPageLazy />} />
                    <Route path="create" element={<CreateItemPageLazy />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Suspense>

            <Footer />
        </BrowserRouter>
    );
};

export default Router;
