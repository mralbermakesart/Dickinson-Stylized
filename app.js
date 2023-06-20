// Gentlemen, start your constants.

// Start as an object so that I can expand to 'mood' if desired
const dickinsonsDopeLines = [
    {
        lines: `If <em>you</em> were coming in the fall,<br>
                I'd pass the summer by`
    },
    {
        lines: `What <em>liberty</em><br>
                a loosened spirit brings!`
    },
    {
        lines: `The wind <em>pursued</em> the little bush<br>
                and drove away the leaves`
    },
    {
        lines: `Read, sweet, how others strove,<br>
                till we are <em>stouter;</em><br>
                What they renounced,<br>
                till we are <em>less afraid—</em>`
    },
    {
        lines: `<em>Success</em> is counted sweetest<br>
                by those who ne'er succeed.`
    },
    {
        lines: `<em>Imps in eager caucus</em><br>
                raffle for my soul.`
    },
    {
        lines: `<em>Life</em> is but life, and <em>death</em> but death!<br>
                <em>Bliss</em> is but bliss, and <em>breath</em> but breath!<br>
                And if, indeed, I fail,<br>
                at least to know the worst is <em>sweet</em>.`
    },
    {
        lines: `If I can stop <em>one</em> heart from breaking,<br>
                I shall not live in vain.`
    },
    {
        lines: `A precious, <em>mouldering pleasure</em> 'tis<br>
                to meet an antique book,<br>
                in just the dress his century wore;<br>
                <em>a privilege,</em> I think—`
    },
    {
        lines: `<em>Alter?</em> When the hills do.<br>
                <em>Falter?</em> When the sun<br>
                question if his glory<br>
                be the perfect one.`
    },
    {
        lines: `The <em>robins</em> stand as thick to-day<br>
                as flakes of <em>snow</em> stood yesterday`
    },
    {
        lines: `The <em>heaven unexpected</em> came`
    },
    {
        lines: `The <em>mountain</em> sat upon the plain<br>
                in his eternal chair.`
    }
]

const fontsArraySans = [
    `'Josefin Sans', sans-serif`,
    `'Indie Flower', sans-serif`,
    `'Algreya Sans FC,' sans-serif`,
    `'LT Anomaly', sans-serif`,
    `'Aubrey', sans-serif`
]

const fontsArraySerif = [
    `'Love Ya Like A Sister', Serif`,
    `'Philosopher', Serif`,
    `'Josefin Slab', Serif`,
    `'Prida65', Serif`,
    `'Yorktown', Serif`
]

const looksBadCapitalized = [
    `'Great Vibes', cursive`
]

const badCharacters = [
    `'Chicken Fajitas', sans-serif`
]

const backgrounds = [
    {
        img: 'backgrounds/blue-watercolor.jpg',
        paletteLight: 'hsl(188, 63%, 75%)',
        paletteDark: 'hsl(206, 88%, 26%)',
        isDark: false
    },
    {
        img: 'backgrounds/pile-of-pages.jpg',
        paletteLight: 'hsl(60, 1%, 86%)',
        paletteDark: 'hsl(353, 10%, 33%)',
        isDark: false
    },
    {
        img: 'backgrounds/pink-and-purple-flower-field.jpg',
        paletteLight: 'hsl(45, 58%, 81%)',
        paletteDark: 'hsl(48, 43%, 24%)',
        isDark: false
    },
    {
        img: 'backgrounds/midnight-walk.jpg',
        paletteLight: 'hsl(21, 16%, 83%)',
        paletteDark: 'hsl(0, 0%, 13%)',
        isDark: true
    },
    {
        img: 'backgrounds/pure-white-snow.jpg',
        paletteLight: 'hsl(199, 22%, 78%)',
        paletteDark: 'hsl(48, 43%, 39%)',
        isDark: false
    },
    {
        img: 'backgrounds/tuesday-temptation.jpg',
        paletteLight: 'hsl(336, 44%, 62%)',
        paletteDark: 'hsl(318, 37%, 19%)',
        isDark: true
    },
    {
        img: 'backgrounds/mountain-at-night.jpg',
        paletteLight: 'hsl(153, 6%, 69%)',
        paletteDark: 'hsl(18, 11%, 18%)',
        isDark: true
    },
]

const badVisibilityBackgrounds = [
    {
        img: 'backgrounds/lonely-chair.jpg',
        paletteLight: '#DDD4D5',
        paletteDark: '#3A625A',
        isDark: false
    }
]

const tagline = document.getElementById(`tagline`);
const logoPng = document.getElementById(`logo-png`);
const dopestLines = document.getElementById(`dopest-lines`);
const moreLinesButton = document.getElementById('more-lines-button');
moreLinesButton.addEventListener('mousedown', function() {
    setThemeAndLines();
});

const getRandomNumber = (betweenZeroAndThis) => Math.floor(Math.random() * betweenZeroAndThis);

const state = {
        lines: null,
        poetryFont: null,
        accentFont: null,
        background: null
}

// Load your documents.

document.addEventListener('DOMContentLoaded', setThemeAndLines);

// A get the honorary coin flip on the road
function headsUp() {
    const flip = Math.floor(Math.random() * 2);
    const heads = 0;
    const tails = 1;
    if ( flip === heads) {
        return true;
    } else {
        return false;
    }
}

/*
AND WE'RE OFF!!!
*/

function setBackground() {
    const backgroundRandomIndex = getRandomNumber(backgrounds.length);
    state.background = backgrounds[backgroundRandomIndex];
    document.body.style.backgroundImage = `url('${state.background.img}')`
}

function getDopeLines() {
    const dopeLinesIndex = Math.floor(Math.random() * dickinsonsDopeLines.length);
    const dopeLines = dickinsonsDopeLines[dopeLinesIndex].lines;
    const convertedLines = convertEmphasisTags(dopeLines);
    state.lines = convertedLines
    dopestLines.innerHTML = state.lines;
}

function stateFonts() {
    const SERIF_FONT = fontsArraySerif[getRandomNumber(fontsArraySerif.length)];
    const SANS_FONT = fontsArraySans[getRandomNumber(fontsArraySans.length)];
    let wasItHeadsUp = headsUp();

    if (wasItHeadsUp) {
        state.poetryFont = SERIF_FONT;
        state.accentFont = SANS_FONT;

    } else {
        state.poetryFont = SANS_FONT;
        state.accentFont = SERIF_FONT;
    }
}

function setFonts() {
    stateFonts();

    dopestLines.style.fontFamily = state.poetryFont;
    moreLinesButton.style.fontFamily = state.accentFont;
    // change all <em> tags to accent
        // Pretty sure this can be simplified, but let's try it:

    const emphasizedWords = document.querySelectorAll('.emphasis');
    emphasizedWords.forEach(function(word) {
        word.style.fontFamily = state.accentFont;
    })


}

function convertEmphasisTags(linesToConvert) {
    return linesToConvert.replace(/<em>(.*?)<\/em>/g, '<span class="emphasis">$1</span>');
}

// function rewriteLines() {
//     <em></em>
// }

function styleButton() {
    const button = document.getElementById('more-lines-button');
    const paletteLight = state.background.paletteLight;
    const paletteDark = state.background.paletteDark;

    button.style.backgroundColor = paletteLight;
    button.style.boxShadow = `0px 10px 0px ${paletteDark}`;
    button.style.transition = 'all 300ms ease-in-out';

    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(10px)';
        button.style.boxShadow = '0px 0px 0px';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = `0px 10px 0px ${paletteDark}`;
    });
}

function styleLogo() {
    if (state.background.isDark) {
        logoPng.style.filter = `drop-shadow(0px 0px 5px ${state.background.paletteLight})`;
    } else {
        logoPng.style.filter = `drop-shadow(0px 0px 5px ${state.background.paletteDark})`;
    }

    console.log(`The logo has not been styled yet. It is still a PNG.`)
    // filter: drop-shadow(0px 0px 5px white);
}

function styleAccents() {
    const headerLines = document.getElementsByClassName('header-line');
    if (state.background.isDark) {
        tagline.style.color = state.background.paletteLight;
        Array.from(headerLines).forEach(function(headerLine) {
            headerLine.style.backgroundColor = state.background.paletteLight;
        })
    } else {
        tagline.style.color = state.background.paletteDark;
        Array.from(headerLines).forEach(function(headerLine) {
            headerLine.style.backgroundColor = state.background.paletteDark;
        })
    }
}

function setFontColors() {
    if (state.background.isDark) {
        dopestLines.style.color = 'white';
        dopestLines.style.textShadow = `-3px 0px 5px ${state.background.paletteDark}`;
    } else {
        dopestLines.style.color = 'black';
        dopestLines.style.textShadow = `-5px 0px 5px ${state.background.paletteLight}`;
    }
}

function setThemeAndLines() {
    headsUp();
    setBackground();
    styleButton();
    styleAccents();
    styleLogo();
    getDopeLines();
    setFonts();
    setFontColors();
}