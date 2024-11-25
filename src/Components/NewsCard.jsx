import React from 'react'

function NewsCard({src,title,url,description}) {
  return (
    <div className='border-2 border-black w-[20%] h-[330px] rounded-md p-1 bg-gray-200 flex flex-col items-center'>
        <img src={src} alt="Image of the news article" className='w-full h-[45%] rounded' />
        <div className='h-[44%] flex flex-col gap-2'>
            <h2 className='text-center text-lg'><b>{title.slice(0,25)}...</b></h2>
            <p>{description ? description.slice(0,100)+"..." : "Description of the news was not abled to fetched properly kindly visit its site to get the full article."}</p>
        </div>
        <button className='bg-yellow-300 p-1 rounded'><a href={url}>Read More</a></button>
    </div>
  )
}

export default NewsCard