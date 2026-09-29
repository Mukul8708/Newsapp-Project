import React, { useEffect, useState } from 'react'
import NewsItem from '../Components/NewsItem'
import { useSearchParams } from 'react-router-dom'

export default function HomePage() {
    let[articles, setArticals] = useState([])
    let[totalResults, setTotalResults] = useState(0)
    let[searchParams]= useSearchParams()
    let [q, setQ]= useState("all")
    let [language, setLanguage]= useState("hi")
    async function getAPIDATA(q,language) {
        let response = await fetch(`https://newsapi.org/v2/everything?q=${q}&language=${language}&sortBy=publishedAt&apiKey=5dacec7a9f2b476f92c6d508bf75f76f`)
        response= await response.json()
        if(response.status==="ok"){
            setArticals(response.articles)
            setTotalResults(response.totalResults)
            console.log(response)
        }
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
      </div>
    )
}
