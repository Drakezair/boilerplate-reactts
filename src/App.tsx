import { MainLayout } from '@layout';
import { CharacterList, FavoritesList, Page404 } from '@pages';
import { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(): ReactElement {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
