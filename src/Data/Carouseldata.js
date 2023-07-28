export const data = [
	{
		title: 'What our clients say',
		description:
			'Our clients happily stay with our services for more several years now. See real reviews from our clients.',
		image: './assets/2022.jpg',
	},
	{
		title: 'Our security ',
		description: 'Learn more about our security systems to make sure your data is always safe',
		image: './assets/20231.jpg',
	},
	{
		title: 'Our Team',
		description: 'Our team consists of the best experts in the industry, learn about them',
		image: './assets/team.jpg',
	},
	{
		title: 'Our servers',
		description: 'Find more about hardware and software used for your service',
		image: './assets/sec.png',
	},
	{
		title: 'Our top clients',
		description: 'We have provided services to top clients in tech industry',
		image: './assets/clients.jpg',
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};