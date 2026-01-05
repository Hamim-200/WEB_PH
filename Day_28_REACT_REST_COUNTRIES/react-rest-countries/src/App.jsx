import { Suspense } from 'react';
import './App.css';
import Countries from './components/Countries/Countries';

const countriesPromise = fetch(
  'https://restcountries.com/v3.1/all?fields=name,cca2,cca3,capital,region,population,flags,independent'
).then(res => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<h3>Loading countries...</h3>}>
        <Countries countriesPromise={countriesPromise} />
      </Suspense>
    </>
  );
}

export default App;
