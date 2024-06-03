// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Admin',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning,',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep,',

	// Layout
	bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

	// Weather
	//weatherKey: 'InsertYourAPIKeyHere123456', // Write here your API Key
	//weatherIcons: 'Nord', // 'Onedark', 'Nord', 'Dark', 'White'
	//weatherUnit: 'F', // 'F', 'C'
	//language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '37.775',
	defaultLongitude: '-122.419',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Open Search',
			icon: 'table-columns',
			link: 'http://localhost:5601',
		},
		{
			id: '2',
			name: 'N8N',
			icon: 'robot',
			link: 'http://localhost:5678',
		},
		{
			id: '3',
			name: 'STIGMAN',
			icon: 'shield',
			link: 'http://localhost:54000',
		},
		{
			id: '4',
			name: 'DECIDER',
			icon: 'diagram-project',
			link: 'http://localhost:8001',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'glasses',
			link: ''
		},
		{
			id: '6',
			name: 'Odysee',
			icon: 'youtube',
			link: '',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: '',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: '',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: '',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: '',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: '',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: '',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'shield',
			id: '1',
			links: [
				{
					name: 'Open Search',
					link: 'http://localhost:5601',
				},
				{
					name: 'N8N Automation',
					link: 'http://localhost:5678',
				},
				{
					name: 'STIGMAN',
					link: 'http://localhost:54000',
				},
				{
					name: 'Decider',
					link: 'http://localhost:8001',
				},
			],
		},
		{
			icon: 'circle',
			id: '2',
			links: [
				{
					name: 'Cerebro',
					link: 'http://0.0.0.0:8999',
				},
				{
					name: 'MailHog',
					link: 'http://0.0.0.0:8025',
				},
				{
					name: 'KeyCloak',
					link: 'http://localhost:8080/admin/master/console/',
				},
				{
					name: 'CS',
					link: '',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'square',
			id: '1',
			links: [
				{
					name: 'PH',
					link: '',
				},
				{
					name: 'PH',
					link: '',
				},
				{
					name: 'PH',
					link: '',
				},
				{
					name: 'PH',
					link: '',
				},
			],
		},
		{
			icon: 'triangle',
			id: '2',
			links: [
				{
					name: 'PH',
					link: '',
				},
				{
					name: 'PH',
					link: '',
				},
				{
					name: 'PH',
					link: '',
				},
				{
					name: 'PH',
					link: '',
				},
			],
		},
	],
};
