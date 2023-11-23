function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');

  body.style.transition = "background-color 0.5s ease-in-out";
}

  const content = document.getElementById("content");
  const languageSwitcher = document.getElementById("language-switcher");
  
  const defaultLanguage = "en";
  
  function translate(language) {
    const text = content.textContent;
    const translatedText = translateText(text, language);
  
    content.textContent = translatedText;
  }

  
  languageSwitcher.addEventListener("click", event => {
    const buttonId = event.target.id;
  
    if (buttonId === "eng") {
      translate("en");
    } else if (buttonId === "rus") {
      translate("ru");
    }
  });

function search() {
    const searchInput = document.querySelector('.search input');
    searchInput.addEventListener("input", search);
    const searchTerm = searchInput.value;
    alert(`Searching for: ${searchTerm}`);
}


function addReview() {
  var name = document.getElementById('name').value;
  var rating = document.getElementById('rating').value;
  var comment = document.getElementById('comment').value;

  if (name && rating && comment) {
      var reviewsList = document.getElementById('reviewsList');

      var newReview = document.createElement('div');
      newReview.className = 'review';
      newReview.innerHTML = '<strong>' + name + '</strong> - ★'.repeat(rating) + '<br>' + comment;

      reviewsList.appendChild(newReview);

      document.getElementById('reviewForm').reset();
  } else {
      alert('Пожалуйста, заполните все поля формы.');
  }
}


document.getElementById('card1').addEventListener('mouseover', function() {
  this.style.backgroundColor = '#e0e0e0';
});

document.getElementById('card2').addEventListener('mouseover', function() {
  this.style.backgroundColor = '#e0e0e0';
});

document.getElementById('card3').addEventListener('mouseover', function() {
  this.style.backgroundColor = '#e0e0e0';
});

document.getElementById('card4').addEventListener('mouseover', function() {
  this.style.backgroundColor = '#e0e0e0';
});

// Add mouseout event listeners to revert background color
document.getElementById('card1').addEventListener('mouseout', function() {
  this.style.backgroundColor = '';
});

document.getElementById('card2').addEventListener('mouseout', function() {
  this.style.backgroundColor = '';
});

document.getElementById('card3').addEventListener('mouseout', function() {
  this.style.backgroundColor = '';
});

document.getElementById('card4').addEventListener('mouseout', function() {
  this.style.backgroundColor = '';
});

// Add click event listeners to display an alert
document.getElementById('card1').addEventListener('click', function() {
  alert('Card 1 clicked!');
});

document.getElementById('card2').addEventListener('click', function() {
  alert('Card 2 clicked!');
});

document.getElementById('card3').addEventListener('click', function() {
  alert('Card 3 clicked!');
});

document.getElementById('card4').addEventListener('click', function() {
  alert('Card 4 clicked!');
});

function playSound() {
  var audio = document.getElementById('myAudio');
  audio.play();
}