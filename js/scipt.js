document.addEventListener('DOMContentLoaded' ,() => {

    const artistData = [
        {name: 'Henrique & Juliano', image: './img/artista-henrique-juliano.jpg'},
        {name: 'Jorge & Mateus', image: './img/artista-jorge-mateus.jpg'},
        {name: 'Zé Neto', image: 'img/artista-ze-neto.jpg'},
        {name: 'Mateus & Kauan', image: 'img/artista-mateus-kauan.jpg'},
        {name: 'Luan Santana', image: 'img/artista-luan-santana.jpg'},
        {name: 'Gustavo Lima', image: 'img/artista-gustavo-limma.jpg'}
    ]
    
    const albumData = [
        {name: 'White Noise (Sleep & Relaxation Sounds)', artist:'Sleepy Jhon', image: 'img/album-white-noise.jpg'},
        {name: 'O Céu Explica Tudo (Ao Vivo)', artist:'Henrique & Juliano' , image: 'img/album-ceu-explica.jpg'},
        {name: 'Nada Como Um Dia Após o Outro ', artist: 'Racionais', image: 'img/album-vida-loka.jpg'},
        {name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: 'img/album-hit-me.jpg'},
        {name: 'CAJU', artist: 'Liniker', image: 'img/album-caju.jpg'},
        {name: 'Escândalo Íntimo', artist: 'Luiza Sonza', image: 'img/album-escandalo.jpg'} 
    ]
    
    const artistGrid = document.querySelector('.astists-grid')
    const albumsGrid = document.querySelector('.albums-grid')

    artistData.forEach(artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artistCard')

        artistCard.innerHTML = `
            <img src="${artist.image}" alt= "Imagem do ${artist.name}">
            <h3>${artist.name}</h3>
            <p>astista</p>
        `
        artistGrid.appendChild(artistCard)
    })

    albumData.forEach(album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-Card')

        albumCard.innerHTML = `
            <img src="${album.image}" alt= "Imagem do ${album.name}">
            <p>${album.name}</p>
        `
        albumsGrid.appendChild(albumCard)
    })

})