
//import { DUMMY_NEWS } from '@/dummy-news'
import NewsList from '@/components/news-list'


const page = async () => {
  

  const response = await fetch('http://localhost:8080/news');
  if(!response){
    throw new Error('failed to fetch news.')
  }
  const news = await response.json();



 
  
  return (
    <>
      <h1>news page</h1>
      <NewsList news={news}/>
      
    </>
  )
}

export default page