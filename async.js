const fridayAssignment=async()=>{
        let publicApi = await fetch("https://api.publicapis.org/entries")
        let jsonpublicApi = await publicApi.json();
        let nextPublicApi = jsonpublicApi.entries
        // console.log(nextPublicApi)
        let endPublicApi = nextPublicApi.map(entry=>`<li> API:${entry.API} .... Description:${entry.Description}..... Auth:${entry.Auth}.....HTTPS:${entry.HTTPS}....Cors:${entry.Cors}...Link:${entry.Link}...Category:${entry.Category}</li><br>`)
        return document.body.innerHTML = endPublicApi.join('');
}

fridayAssignment()