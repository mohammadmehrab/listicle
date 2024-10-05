const renderAlbum = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/albums')
    const data = await response.json()
    
    const albumContent = document.getElementById('album-content')
    let album
    album = data.find(album => album.id === requestedID)  
    if (album) {
        document.getElementById('albumCover').src = album.albumcover
        document.getElementById('title').textContent = album.title
        document.getElementById('artist').textContent = 'By ' + album.artist
        document.getElementById('releaseYear').textContent = 'Released: ' + album.releaseyear
        document.getElementById('genre').textContent = 'Genre: ' + album.genre
        document.title = `Listicle: Favorite Albums - ${album.title}`
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Albums Available 😞'
        const imageContainer = document.getElementById('image-container')
        // imageContainer.style.width = '0px';
        albumContent.appendChild(message)                  
    }
}

renderAlbum()