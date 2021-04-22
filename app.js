// Buttons
const nextSong = document.querySelector('.fa-step-forward');
const prevSong = document.querySelector('.fa-step-backward');
const randomSong = document.querySelector('.fa-random');
const likeBtn = document.querySelector('.fa-heart');
const closeBtn = document.querySelector('.fa-window-close ');

//Selectors
const newImage = document.querySelector('#next');
const albumName = document.querySelector('#album-name');
const songName = document.querySelector('#songs');
const artistName = document.querySelector('#artist');

// Other
const newWindow = document.querySelector('.dots');
const showMore = document.querySelector('#show-more');
// const playlistPlaying = document.querySelector('#playlist-playing');
// const playlist = document.querySelector('.lni-indent-increase');

const songs = [
	{
		album: 'Substance',
		artist: 'New Order',
		songTitle: 'Blue Monday',
		albumImg: '/img/new-order.jpg'
	},
	{
		album: 'Origami',
		artist: 'Bleu Toucan',
		songTitle: 'Hanoï café',
		albumImg: '/img/bleutoucan.jpg'
	},
	{
		album: 'MomentEP',
		artist: 'Peggy Gou',
		songTitle: 'Starry Night',
		albumImg: '/img/peggy.jpg'
	},
	{
		album: 'Róisín Machine',
		artist: 'Róisín Murphy',
		songTitle: `Murphy's law`,
		albumImg: '/img/roisin.jpg'
	},
	{
		album: 'Tunguzija',
		artist: 'Svemirko',
		songTitle: 'Zauvijek zen',
		albumImg: '/img/svemirko.jpg'
	},
	{
		album: 'The Slow Rush',
		artist: 'Tame Impala',
		songTitle: 'Is It True',
		albumImg: '/img/tameimpala.jpg'
	},
	{
		album: 'After Hours',
		artist: 'The Weeknd',
		songTitle: 'Too Late',
		albumImg: '/img/weeknd.jpeg'
	},
	{
		album: 'Hanging Gardens',
		artist: 'Classixx',
		songTitle: 'Hanging Gardens',
		albumImg: '/img/classixx.jpg'
	},
	{
		album: 'GENERATIONWHY',
		artist: 'Zhu',
		songTitle: 'Electrify me',
		albumImg: '/img/zhu.jpeg'
	},
	{
		album: 'Single',
		artist: 'Yuki Uno',
		songTitle: 'Lunar Base',
		albumImg: '/img/yukiuno.jpg'
	},
	{
		album: 'Seek For Maktoop',
		artist: 'Peggy Gou',
		songTitle: 'Gou Talk',
		albumImg: '/img/peggy2.jpg'
	},
	{
		album: 'Music Complete',
		artist: 'New Order',
		songTitle: 'Tutti Frutti',
		albumImg: '/img/neworder2.jpg'
	},
	{
		album: 'Caravelle',
		artist: 'Polo & Pan',
		songTitle: 'Kirghiz',
		albumImg: '/img/polopan.jpg'
	},
	{
		album: 'Songs of Faith and Devotion',
		artist: 'Depeche Mode',
		songTitle: 'I Feel You',
		albumImg: '/img/depechemode.jpeg'
	}
];

console.log(songs.length);

const getSong = () => {
	return Math.floor(Math.random() * songs.length);
};

let singleSong;
let songArtist;

// current song
let currentSong = 0;

const showSong = play => {
	const spotifySong = songs[play];
	albumName.textContent = spotifySong.album;
	artistName.textContent = spotifySong.artist;
	songName.textContent = spotifySong.songTitle;
	newImage.src = spotifySong.albumImg;
};

nextSong.addEventListener('click', function() {
	currentSong++;

	if (currentSong > songs.length - 1) {
		currentSong = 0;
	}

	showSong(currentSong);

	singleSong = songs[currentSong].songTitle;
	songArtist = songs[currentSong].artist;

	console.log(currentSong);
});

prevSong.addEventListener('click', function() {
	currentSong--;

	if (currentSong < 0) {
		currentSong = songs.length - 1;
	}

	showSong(currentSong);

	console.log(currentSong);
});

// shuffle
randomSong.addEventListener('click', function() {
	currentSong = getSong();

	showSong(currentSong);

	console.log(currentSong);
});

likeBtn.addEventListener('click', function() {
	let likedSongs = [];

	localStorage.setItem('artistsong', JSON.stringify(songArtist));
	localStorage.setItem('singlesong', JSON.stringify(singleSong));

	let storedArtist = JSON.parse(localStorage.getItem('artistsong'));
	let storedSong = JSON.parse(localStorage.getItem('singlesong'));

	document.querySelector('.add-more').textContent = storedSong;
	document.querySelector('.more').textContent = storedArtist;

	/// likedSongs.push(storedSong);

	// console.log(likedSongs);

	// console.log('I like this song');
	// likeBtn.style.color = 'green';
});

// localStorage.clear();

newWindow.addEventListener('click', function() {
	showMore.classList.remove('closed');
	showMore.classList.add('opened', 'overlay');
});

closeBtn.addEventListener('click', function() {
	showMore.classList.remove('opened', 'overlay');
	showMore.classList.add('closed');
});
