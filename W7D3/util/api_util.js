export const fetchSearchGiphys = (searchTerm) => (
    $.ajax ({ 
       method: 'post',
       url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&limit=2`
    })
)