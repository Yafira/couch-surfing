import { showReviewTotal, populateUser } from './utils.js';
import { Permissions, LoyaltyUser } from './enums.js';
const propertyContainer = document.querySelector('.properties');
const footer = document.querySelector('.footer');

let isOpen;

// Reviews
const reviews = [
	{
		name: 'Sheia',
		stars: 5,
		loyaltyUser: LoyaltyUser.GOLD_USER,
		date: '01-04-2021',
	},
	{
		name: 'Andrzej',
		stars: 3,
		loyaltyUser: LoyaltyUser.BRONZE_USER,
		date: '28-03-2021',
	},
	{
		name: 'Omar',
		stars: 4,
		loyaltyUser: LoyaltyUser.SILVER_USER,
		date: '27-03-2021',
		description: 'Great hosts, location was a bit further than said',
	},
];
// User
const you = {
	firstName: 'Bobby',
	lastName: 'Brown',
	permissions: Permissions.ADMIN,
	isReturning: true,
	age: 35,
	stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow'],
};
// Properties
const properties = [
	{
		image: '',
		title: 'Colombian Shack',
		price: 45,
		location: {
			firstLine: 'shack 37',
			city: 'Bogota',
			code: 45632,
			country: 'Colombia',
		},
		contact: [+1123495082908, 'marywinkle@gmail.com'],
		isAvailable: true,
	},
	{
		image: '',
		title: 'Polish Cottage',
		price: 34,
		location: {
			firstLine: 'no 23',
			city: 'Gdansk',
			code: 343903,
			country: 'Poland',
		},
		contact: [+1123495082908, 'garydavis@hotmail.com'],
		isAvailable: false,
	},
	{
		image: '',
		title: 'London Flat',
		price: 23,
		location: {
			firstLine: 'flat 15',
			city: 'London',
			code: 35433,
			country: 'United Kingdom',
		},
		contact: [+1123495082908, 'andyluger@aol.com'],
		isAvailable: true,
	},
];
// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(you.isReturning, you.firstName);
// Add the properties
for (let i = 0; i < properties.length; i++) {
	const card = document.createElement('div');
	card.classList.add('card');
	card.innerHTML = properties[i].title;
	const image = document.createElement('img');
	image.setAttribute('src', properties[i].image);
	card.appendChild(image);
	propertyContainer === null || propertyContainer === void 0
		? void 0
		: propertyContainer.appendChild(card);
}
// Use your current location, time and temperature
let currentLocation = ['New York', '0:40', 26];
if (footer) {
	footer.innerHTML =
		currentLocation[0] +
		' ' +
		currentLocation[1] +
		' ' +
		currentLocation[2] +
		'°';
}
