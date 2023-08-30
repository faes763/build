
import Review from '../review'

interface review {
    postId: number,
    id: number
    name:string
    email:string
    body:string
}

const getReviews = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/comments',{
        method: "GET",
    })
    const reviews: review[] = await res.json();
    const chunkedReviews = chunkArray(reviews, 6);
    return chunkedReviews;
}

function chunkArray(array: any[], size: number) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default async function Reviews() {
    const data:review[][] = await getReviews();
    return (
        <section>
            <div className="container flex flex-col gap-y-5">
                <Review data={data}/>
            </div>
        </section>
    )
}

