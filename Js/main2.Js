try{
    (async function () {
    const searchData = await fetch('http://api.weatherapi.com/v1/search.json?key=a51cbe82160f4e2990e124248241206&q=lond');
    const searchShow = await searchData.json();
    console.log(searchShow);
})} catch (error){
    console.log(error);
};