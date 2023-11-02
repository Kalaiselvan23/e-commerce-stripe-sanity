const baseUrl=`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${process.env.NEXT_PUBLIC_SANITY_DATASET}`;
const fetchData=async(query:string)=>{
    let QUERY = encodeURIComponent(query);
    const url=`${baseUrl}?query=${QUERY}`;
    const res=await fetch(url)
    const data=await res.json();
    return data.result;
}
export default fetchData;