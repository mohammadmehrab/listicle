const renderAlbums = async () => {
    const response = await fetch('/albums')
    const data = await response.json()
    const mainContent = document.getElementById('main-content')

    if (data) {
        data.map(album => {
            const card = document.createElement('div')
            card.classList.add('card')
            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url(${album.albumCover})`

            const title = document.createElement('h3')
            title.textContent = album.title
            bottomContainer.appendChild(title)

            const artistLabel = document.createElement('p')
            artistLabel.textContent = 'By ' + album.artist
            bottomContainer.appendChild(artistLabel)

            const link = document.createElement('a')
            link.textContent = 'See More >'
            link.setAttribute('role', 'button')
            link.href = `/albums/${album.id}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)

            mainContent.appendChild(card)
        })
        
        
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Albums Listed 😞'
        mainContent.appendChild(message)
    }
}

const requestedUrl = window.location.href.split('/').pop()

if (requestedUrl) {
    window.location.href = '../404.html'
}
else {
    renderAlbums();
}
