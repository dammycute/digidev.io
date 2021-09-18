const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.onclick = function() {
    nav.classList.toggle('show')
};
// .vision - text,
//     .value - text

const vision = document.getElementById('vision');
const mission = document.getElementById('mission');
const value = document.getElementById('value');
const default_content = document.getElementById('default-content');
const visionText = document.getElementById('vision-text');
const valueText = document.getElementById('value-text');
vision.onclick = function() {
    document.getElementById('vision-text').innerHtml = "Go"
    default_content.style.display = 'none';
    mission.style.backgroundColor = 'gainsboro';
    vision.style.backgroundColor = 'rgb(2, 2, 117)';
    vision.style.color = '#fff';
    vision.style.padding = '1rem';
    visionText.style.padding = '3rem';
    visionText.style.fontSize = '17px';
    visionText.style.color = '#fff';
    visionText.style.backgroundColor = 'rgb(2, 2, 117)'
    valueText.style.display = 'none'
    vision.style.marginRight = '0.5rem'
    mission.style.color = 'black'
}
mission.onclick = function() {
    visionText.style.display = 'none'
    valueText.style.display = 'none'
}

value.onclick = function() {
    default_content.style.display = 'none';
    mission.style.backgroundColor = 'gainsboro';
    value.style.backgroundColor = 'rgb(2, 2, 117)';
    value.style.color = '#fff';
    value.style.padding = '1rem';
    valueText.style.padding = '3rem';
    valueText.style.fontSize = '17px';
    valueText.style.color = '#fff';
    valueText.style.backgroundColor = 'rgb(2, 2, 117)'
    visionText.style.display = 'none'
    value.style.marginLeft = '0.5rem'
    mission.style.color = 'black'
}