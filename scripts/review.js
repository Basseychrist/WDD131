document.addEventListener('DOMContentLoaded', () => {
    const numberOfReviewsElement = document.getElementById('numberOfReviews');
    let numberOfReviews = localStorage.getItem('numberOfReviews') || 0;
    numberOfReviews++;
    localStorage.setItem('numberOfReviews', numberOfReviews);
    numberOfReviewsElement.textContent = numberOfReviews;
  });
  