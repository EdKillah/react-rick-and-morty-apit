import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListCharacters from './components/ListCharacters';
import CharacterInfo from './components/CharacterInfo';

function ContentApp() {
  return (
    <div className="bg-dark text-white">
      <h1 className="text-center display-1 py-4">Rick and Morty characters</h1>
      <ListCharacters />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ContentApp />} />
        <Route exact path="/character/:id" element={<CharacterInfo />} />
        <Route element={<div>NOT FOUND</div>} />
      </Routes>

    </BrowserRouter>

  )
}

//<Route exact path="/character/:id" element={<CharacterInfo character={character} />} />
export default App
