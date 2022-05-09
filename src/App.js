import React, {useEffect, useState} from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header'


export default () => {

  const[movieList, setMovieList] = useState([]);
  const[featuredData, setFeaturedData] = useState(null);
  const[blackHeader, setBlackHeader] = useState(false);
 
  useEffect(()=>{
    const loadAll = async() => {
      //Pegando toda a lista
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegando o Featured
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  // Barra preta em cima no header com scroll
  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true);
      }else{
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll', scrollListener);
    return() => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, []);


  return(
    <div className="page">
      {/* Header */}
      <Header black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map((item,key) => (
         <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
          <footer>
          Direitos de imagem para a Netflix,
          Api e dados pegos do site Themoviedb.org
          <br></br>Desenvolved by: | Matheus Galvain  
          </footer>
    </div>
  )
}


