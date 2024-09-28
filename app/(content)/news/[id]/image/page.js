import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";


export default function Imagepage({params}){
    const newsitemSlug=params.id;
    const newsItem= DUMMY_NEWS.find((newsItem)=> newsItem.id === newsitemSlug);
    if(!newsItem){
        notFound();
    }
    return(
        <>
        <div className="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
        </div>
        </>
    );
}