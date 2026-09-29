import React, { useEffect , useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

export default function Navbar() {
  let [q, setQ]= useState("all")
  let [language, setLanguage]= useState("hi")
  let [search, setSearch] = useState("")
  let[searchParams]= useSearchParams()
  let navigate = useNavigate()
  function postSearch(e) {
    e.preventDefault()
    navigate(`/?q=${search}&language=${language}`)
    setSearch("")
  }
  useEffect(()=> {
    setQ(searchParams.get("q")?? "all")
    setLanguage(searchParams.get("language")?? "hi")
  }, [searchParams])
  return (
    <nav className="navbar navbar-expand-lg bg-secondary sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand text-light" to={`/?q=All&language=${language}`}>Newsapp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><Link className="nav-link text-light " aria-current="page" to={`/?q=All&language=${language}`}>Home</Link></li>
        <li className="nav-item"><Link className="nav-link text-light " aria-current="page" to={`/?q=Politics&language=${language}`}>Politics</Link></li>
        <li className="nav-item"><Link className="nav-link text-light " aria-current="page" to={`/?q=Crime&language=${language}`}>Crime</Link></li>
        <li className="nav-item"><Link className="nav-link text-light " aria-current="page" to={`/?q=Education&language=${language}`}>Education</Link></li>
        <li className="nav-item"><Link className="nav-link text-light " aria-current="page" to={`/?q=Jobs&language=${language}`}>Jobs</Link></li>
        <li className="nav-item"><Link className="nav-link text-light " aria-current="page" to={`/?q=Science&language=${language}`}>Science</Link></li>
        <li className="nav-item"><Link className="nav-link text-light " aria-current="page" to={`/?q=Technology&language=${language}`}>Technology</Link></li>
        <li className="nav-item dropdown">
          <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Other
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={`/?q=Entertainment&language=${language}`}>Entertainment</Link></li>
            <li><Link className="dropdown-item" to={`/?q=Cricket&language=${language}`}>Cricket</Link></li>
            <li><Link className="dropdown-item" to={`/?q=Fifa&language=${language}`}>FIFA</Link></li>
            <li><Link className="dropdown-item" to={`/?q=Sports&language=${language}`}>Sports</Link></li>
            <li><Link className="dropdown-item" to={`/?q=Economics&language=${language}`}>Economics</Link></li>
            <li><Link className="dropdown-item" to={`/?q=World&language=${language}`}>World</Link></li>
            <li><Link className="dropdown-item" to={`/?q=India&language=${language}`}>India</Link></li>
            <li><Link className="dropdown-item" to={`/?q=Jokes&language=${language}`}>Jokes</Link></li>
          </ul>
        </li>
         <li className="nav-item dropdown">
          <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Languages
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to ={`/?q=${q}&language=en`}>English</Link></li>
            <li><Link className="dropdown-item" to ={`/?q=${q}&language=hi`}>Hindi</Link></li>
          </ul>
        </li>
      </ul>
      
      <form className="d-flex" role="search" onSubmit={postSearch}>
        <input className="form-control me-2" type="search" name="search" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}
