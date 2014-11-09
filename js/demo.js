var deck;
var data = [
	{
		title: 'Card 1',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	},
	{
		title: 'Card 2',
		text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	},
	{
		title: 'Card 3',
		text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
	},
	{
		title: 'Card 4',
		text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	},
	{
		title: 'Card 5',
		text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
	}	
];

function loaded () {
	deck = new CardView('#wrapper', {
		effect: 'slide',
   		direction: 'v',
		dataset: data,
		onUpdateContent: function (el, data) {
			el.querySelector('h3').innerHTML = data.title;
			el.querySelector('p').innerHTML = data.text;
		}
	});
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
