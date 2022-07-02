export const getRepos = async (page)=>{
    const res = await fetch(`https://api.github.com/search/repositories?q=created:>2022-04-13&sort=stars&order=desc&page=${page}`)

    return res.json()
}