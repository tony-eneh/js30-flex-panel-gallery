/* get all needed elements */
let gallery = document.querySelector('div.gallery');
let pics = document.querySelectorAll('div.gallery > div');
let upperTexts = document.querySelectorAll('h2:first-child');
let lowerTexts = document.querySelectorAll('h2:last-child');


/* handler functions */
function handleClick(e) {
    let self = e.currentTarget;
    console.log(self);
    if (!self.classList.contains('fat-up')) {
        self.classList.add('fat-up');
        self.querySelector('h2:first-child').classList.remove('disappear-above');
        self.querySelector('h2:last-child').classList.remove('disappear-below');
    } else {
        self.classList.remove('fat-up');
        self.querySelector('h2:first-child').classList.add('disappear-above');
        self.querySelector('h2:last-child').classList.add('disappear-below');
    }
}

/*hide texts by default*/
upperTexts.forEach(text => text.classList.add('disappear-above'));
lowerTexts.forEach(text => text.classList.add('disappear-below'));

/* hook up event listener */
pics.forEach(pic => pic.addEventListener('click', handleClick));