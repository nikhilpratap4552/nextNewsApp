import Link from "next/link";
import NewsList from "@/components/news-list"
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";

export default async function page({params}){
    const year = params.year;
    //const news = getNewsForYear(newsYear);
    const selectedYear = year?.[0];
    const selectedMonth = year?.[1];
    let news;
    let links = await getAvailableNewsYears();

    if (selectedYear && !selectedMonth){
        news = await getNewsForYear(selectedYear);
        links = getAvailableNewsMonths(selectedYear);
    }

    if(selectedYear && selectedMonth){
        news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
        links = [];
    }

    let newsContent = <p>there is no such type of content</p>

    if(news && news.length>0){
        newsContent = <NewsList news={news}/>
    }
    if((selectedYear && !getAvailableNewsYears().includes(+selectedYear)) || (selectedMonth && !getAvailableNewsMonths(selectedYear).includes(+selectedMonth)))
        {
          throw new Error('Invalid filter.');

        }

    
  return (
    <>
     <header id="archive-header">
            <nav>
                <ul>
                    {links.map(link => {
                        const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`;

                        return(
                        <li key={link}>
                        <Link href={href}>{link}</Link>
                    </li>);
                })}
                </ul>
            </nav>

        </header>
        {newsContent}
    {/* <NewsList news={news}/> */}
    </>
  )
}
