const fs = require('fs');
const path = require('path');

// 1. Load updated data
const EPISODES = require('./episodes_data.js');
const SLIDES_DATA = require('./slides_data.js');

// 2. Update podcast-site/app.js
console.log('Updating podcast-site/app.js...');
const podPath = path.join(__dirname, '..', 'podcast-site', 'app.js');
const podContent = fs.readFileSync(podPath, 'utf8');

const podStartIdx = podContent.indexOf('const EPISODES = [');
const podEndIdx = podContent.indexOf('const state = {');

if (podStartIdx === -1 || podEndIdx === -1) {
  throw new Error('Could not find EPISODES or state in podcast-site/app.js');
}

const newPodPrefix = podContent.substring(0, podStartIdx);
const newPodSuffix = podContent.substring(podEndIdx);
const newPodCode = newPodPrefix + 'const EPISODES = ' + JSON.stringify(EPISODES, null, 2) + ';\n\n' + newPodSuffix;
fs.writeFileSync(podPath, newPodCode, 'utf8');
console.log('Successfully updated podcast-site/app.js');

// 3. Update slides-site/app.js
console.log('Updating slides-site/app.js...');
const slidesPath = path.join(__dirname, '..', 'slides-site', 'app.js');
const slidesContent = fs.readFileSync(slidesPath, 'utf8');

const slidesStartIdx = slidesContent.indexOf('window.SLIDES_DATA = [');
const slidesEndMarker = ']; // end SLIDES_DATA';
const slidesEndIdx = slidesContent.indexOf(slidesEndMarker);

if (slidesStartIdx === -1 || slidesEndIdx === -1) {
  throw new Error('Could not find SLIDES_DATA start or end marker in slides-site/app.js');
}

const newSlidesPrefix = slidesContent.substring(0, slidesStartIdx);
const newSlidesSuffix = slidesContent.substring(slidesEndIdx + slidesEndMarker.length);
const newSlidesCode = newSlidesPrefix + 'window.SLIDES_DATA = ' + JSON.stringify(SLIDES_DATA, null, 2) + ';\n' + newSlidesSuffix;
fs.writeFileSync(slidesPath, newSlidesCode, 'utf8');
console.log('Successfully updated slides-site/app.js');

console.log('All app.js files updated successfully!');
