document.addEventListener("DOMContentLoaded", function() {
    const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

    function stripArticle(bandName) {
        return bandName.replace(/^(a |an |the )/i, '').trim();
    }

    const sortedBands = bands.sort((a, b) => {
        const bandA = stripArticle(a);
        const bandB = stripArticle(b);
        if (bandA < bandB) {
            return -1;
        }
        if (bandA > bandB) {
            return 1;
        }
        return 0;
    });

    const bandList = document.getElementById('band-list');
    sortedBands.forEach(band => {
        const li = document.createElement('li');
        li.textContent = band;
        bandList.appendChild(li);
    });
});

