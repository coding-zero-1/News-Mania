import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'

function Newsboard() {
    const [articles,setArticles]=useState([]);
    useEffect(()=>{
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`
        fetch(url).then(response => response.json()).then(data => setArticles(data.articles))
        console.log(articles);
    },[]);
  return (
    <div className='w-full min-h-[91.5%] bg-gray-500 py-4 px-2 flex flex-col items-center'>
        <div className='text-center m-2 text-3xl bg-[#ce6f6f] w-[30%] rounded-md'><h1>Read The latest news here</h1></div>
        <div className='flex flex-wrap gap-4 justify-center'>
        {articles.map((news,index)=>( <NewsCard key={index} url={news.url} title={news.title} src={news.urlToImage} description={news.description} /> ))}
        </div>
    </div>
  )
}

export default Newsboard