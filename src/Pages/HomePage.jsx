import React, { useEffect, useState } from 'react'
import NewsItem from '../Components/NewsItem'
import { useSearchParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component';
export default function HomePage() {
    let[articles, setArticals] = useState([])
    let[totalResults, setTotalResults] = useState(0)
    let[searchParams]= useSearchParams()
    let [q, setQ]= useState("all")
    let [language, setLanguage]= useState("hi")
    let [page,setPage] = useState(1)
    async function getAPIDATA(q,language) {
        let response = await fetch(`https://newsapi.org/v2/everything?q=${q}&language=${language}&pageSize=24&page=1&sortBy=publishedAt&apiKey=5dacec7a9f2b476f92c6d508bf75f76f`)
        response= await response.json()
        if(response.status==="ok"){
            setArticals(response.articles)
            setTotalResults(response.totalResults)
            console.log(response)
        }
    }
        async function fetchMore() {
        let response = await fetch(`https://newsapi.org/v2/everything?q=${q}&language=${language}&pageSize=24&page=${page+1}&sortBy=publishedAt&apiKey=5dacec7a9f2b476f92c6d508bf75f76f`)
        response= await response.json()
        if(response.status==="ok"){
            setArticals(articles.concat(response.articles))
        }
        setPage(page + 1)
    }
    useEffect(() =>{
      let q = searchParams.get("q") ?? "all"
      let language = searchParams.get("language") ?? "hi"
        setQ(q)
        setLanguage(language) 
        getAPIDATA(q,language)
    },[searchParams])
    return(
      <div className='container-fluid my-3'>
        <h5 className='bg-secondary text-light text-center p-2 text-capitalize'>{q} News Articles</h5>
      <InfiniteScroll
      dataLength={articles.length}
      next={fetchMore}
      hasMore={articles.length < totalResults}
      loader={<div className='text-center m-5'>
        <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
</div>
      </div>}
    >
        <div className="row">
          {articles.map((item, index)=>{
            return <div key={index} className='col-xl-2 col-lg-3 col-md-4 col-sm-6'>
              <NewsItem
              source={item.source?.name ?? "N/A"}
              title= {item.title}
              description={item.description}
              url={item.url}
              pic={item.urlToImage?item.urlToImage:"/images/nopic.jpg"}
              date={item.publishedAt}
              />
            </div>
          })}
        </div>
        </InfiniteScroll>
      </div>
    )
}
