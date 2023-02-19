const clickFunc = async () => {
    // const funcValue = await document.ironvest.func()
    // console.log(`func=${funcValue}`)
    const movieDetails = await document.ironvest.apiFunc()
    console.log(movieDetails)
}