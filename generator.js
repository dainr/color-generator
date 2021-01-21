const backgroundBtn = document.querySelector('.generate-background');
const gradientBtn = document.querySelector('.generate-gradient');

backgroundBtn.addEventListener('click', () => {
    const backgroundDiv = document.querySelector('.background');
    const backgroundCss = document.querySelector('.background-css');

    let firstVal = Math.floor(Math.random() * 256);
    let secondVal = Math.floor(Math.random() * 256);
    let thirdVal = Math.floor(Math.random() * 256);
    
    let rgbVal = `rgb(${firstVal}, ${secondVal}, ${thirdVal})`;

    backgroundCss.innerText = `background-color: ${rgbVal}`;
    backgroundDiv.style.backgroundColor = rgbVal;



});

gradientBtn.addEventListener('click', () => {
    const gradientDiv = document.querySelector('.gradient');
    const gradientCss = document.querySelector('.gradient-css');

    let firstVal = Math.floor(Math.random() * 256);
    let secondVal = Math.floor(Math.random() * 256);
    let thirdVal = Math.floor(Math.random() * 256);

    let fourthtVal = Math.floor(Math.random() * 256);
    let fifthVal = Math.floor(Math.random() * 256);
    let sixthVal = Math.floor(Math.random() * 256);

    let rgb1 = `rgb(${firstVal}, ${secondVal}, ${thirdVal})`;
    let rgb2 = `rgb(${fourthtVal}, ${fifthVal}, ${sixthVal})`;

    let gradientVal = `linear-gradient(90deg, ${rgb1}, ${rgb2})`;
    console.log(rgb1, rgb2);

    gradientCss.innerText = `${gradientVal}`;
    gradientDiv.style.background = gradientVal;
});