"use client"
import React, { useState } from 'react';
import Container from '@/app/navbar/Container/Container';
import Controls from '@/app/navbar/Controls/Controls';
import DrawerNav from '@/app/navbar/DrawerNav/DrawerNav';
import NavLinks from '@/app/navbar/NavLinks/Navbar';
import SearchBar from '@/app/navbar/SearchBar/SearchBar';
import SearchResults from '@/app/navbar/SearchBar/SearchResult';
import NavBrand from '@/app/navbar/NavBrand/NavBrand';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import { Home } from '@mui/icons-material';

interface NavtopProps {
  title?: string;
  isMenuOpen?: boolean;
  results?: any[];
}
//aaaaaa
const App: React.FC = () => {
  const [results, setResults] = useState<any[]>([]);
  

  return (
    <div>
<Container title="Home" isMenuOpen={false} results={[]} />
      <Controls />
      <NavLinks />
      <SearchBar setResults={setResults} />
      <SearchResults results={results} />
      <NavBrand />
      </div>
  );
};

export default App;
