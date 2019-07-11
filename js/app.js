/*!
 * Font Awesome Free 5.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
(function () {

    const hexValue = document.getElementById('hex-value');
    const btn = document.getElementById('btn');
    btn.addEventListener('click', createHex);

    function createHex(){
        const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

        let hexColor = '#';

        for(let i=0;i<6;i++){
            let random = Math.floor(Math.random()*hexValues.length);
            // console.log(random);
            hexColor += hexValues[random];
        }
        document.body.style.backgroundColor = hexColor;
        hexValue.textContent = hexColor;
    }
    
})();