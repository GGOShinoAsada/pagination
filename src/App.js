import logo from './logo.svg';
import './App.css';
import React,  { useState , useEffect}  from 'react';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setloading] = useState(false);
  const [currentpage, setCurrentPage] = useState(1); 
  const [contriesPage] = useState(10);
  useEffect(()=>{
    const getContries = async () =>{
      setloading(true)
      const res = await axios.get('https://restcountries.eu/rest/v2/all');
      console.log(res);
    }
    getContries();
  },[])

  return (
    <div className="App"></div>
  );
}

export default App;
