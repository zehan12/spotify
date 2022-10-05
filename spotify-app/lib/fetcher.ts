export default function fetcher( url: string, data = undefined ){
    console.log('inside featcher',data)
    return fetch(`${window.location.origin}/api/${url}`,{
        method: data ? "POST" : "GET",
        headers: {
            "Content-Types": "application/json",
        },
        body: JSON.stringify(data)
    }).then((res)=>{
        console.log(res.status,"sta")
        if ( res.status > 399 || res.status < 200 ) {
            throw new Error()
        }
        return res.json()
    })
}