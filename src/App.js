import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import { filterData, apiUrl } from './data';
import Cards from './components/Cards';
import { toast } from 'react-toastify';
import Spinner from './components/Spinner';
function App() {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function getCourses(){
    setLoading(true);
    try {
      let responce = await fetch(apiUrl);
      let output = await responce.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("Somthing went wrong");
    }
    setLoading(false);
  }

  useEffect(()=>{
    getCourses();
  },[])

  return (
    <div className="App">
      <div className='navbar-container'>
        <Navbar />
      </div>
      <div className='filter-container'>
        <Filter filterData = {filterData} category = {category} setCategory = {setCategory} />
      </div>
      <div className='cards-container'>
        {
          loading ? (<Spinner />) : (<Cards courses = {courses} category = {category} />)
        }
      </div>
    </div>
  );
}

export default App;
