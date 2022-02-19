const reviewTotalDisplay = document.querySelector('#reviews');
const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
import { LoyaltyUser } from './enums.js';
export function showReviewTotal(value, reviewer, isLoyalty) {
    const iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : '';
    if (reviewTotalDisplay) {
        reviewTotalDisplay.innerHTML =
            'review total ' +
                value.toString() +
                '| last reviewed by ' +
                reviewer +
                ' ' +
                iconDisplay;
    }
}
export function populateUser(isReturning, userName) {
    if (returningUserDisplay && isReturning == true) {
        returningUserDisplay.innerHTML = 'back';
    }
    if (userNameDisplay)
        userNameDisplay.innerHTML = userName;
}
