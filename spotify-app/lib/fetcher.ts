export default function fetcher( url: string, data = undefined ){
    console.log('inside featcher',data)
    return fetch(`${window.location.origin}/api/${url}`,{
        method: data ? "POST" : "GET",
        headers: {
            "Content-Types": "application/json",
        },
        body: JSON.stringify(data)
    });
}