const nextSong = document.querySelector('.fa-step-forward');
const newImage = document.querySelector('#next');
const albumName = document.querySelector('#album-name');
const songName = document.querySelector('#songs');
const artistName = document.querySelector('#artist');

const newWindow = document.querySelector('.dots');

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
	}
];

console.log(songs.length);

const getSong = () => {
	return Math.floor(Math.random() * songs.length);
};

nextSong.addEventListener('click', function() {
	let getNum = getSong();

	albumName.textContent = songs[getNum].album;
	artistName.textContent = songs[getNum].artist;
	songName.textContent = songs[getNum].songTitle;
	newImage.src = songs[getNum].albumImg;

	console.log(getNum);

});

newWindow.addEventListener('click', function() {
	const menu = document.createElement('div');
	document.querySelector('.mobile-inside').appendChild(menu);
	menu.classList.add('overlay');
	const text = document.createElement('h2');
	menu.appendChild(text);
	text.textContent = 'Hello World';
});
