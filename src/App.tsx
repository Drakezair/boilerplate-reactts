import { MainLayout } from '@layout';
import { CharacterList, FavoritesList, Page404 } from '@pages';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const queryClient = new QueryClient();

function App(): ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<CharacterList />} />
            <Route path="/favorites" element={<FavoritesList />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
