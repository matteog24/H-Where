
let w = window.innerWidth;
let h = window.innerHeight;

function change(value) {
    let category = document.getElementById('category');
    let categoryList = document.getElementById('category2')
    let alfabeto = document.getElementById('alfabeto');
    let alfabetoList = document.getElementById('alfabeto2');

    if (value == 'alfabeto') {
        category.style.opacity = "0.4"
        alfabeto.style.opacity = "1"
        alfabetoList.style.display = 'block'
        categoryList.style.display = "none"

    }
    
    else if (value == 'category') {
        alfabeto.style.opacity = "0.4"
        category.style.opacity = "1"
        categoryList.style.overflow = "inherit"
        categoryList.style.opacity = "1"
        categoryList.style.display = "flex"
        alfabetoList.style.display = "none"   

    }
}
    
function getDirections(startPole, place) {

    let directionsText = document.getElementById('directions-text');
    let directionsArray = [];
    let listOfDirections = [];
    let list = document.getElementById('list');

    let iframeSection = document.getElementById('iframe');

    iframeSection.innerHTML = '';
    // let svg = document.getElementById('campus-map-photo');
    // let myp_pin = document.getElementById('myp-dp');
    // let pyp_pin = document.getElementById('pyp');

    // (myp_pin, pyp_pin).style.opacity = "0.3"

    if (directionsText.childElementCount = 1) {
        directionsText.innerHTML = ""
    }

    let heading = document.createElement('h2');
    heading.id = 'directions-text';
    let iframe = document.createElement('iframe');

    if (startPole == 1) {
        if (place == 'myp') {
            heading.innerHTML = "MYP & DP";
            directionsArray = ['⬆️ for 100m', '➡️'];
            iframe.src = 'https://orbix360.com/t/lCJMyrscsaMtFmjmgxmtOXsa5wp2/5143489931116544/test?embed=yes'
            
        }
        else if (place == 'pyp') {
            heading.innerHTML = "PYP";
            directionsArray = ['⬇️ for 10m', '⬅️'];
        }
        else if (place == 'college') {
            heading.innerHTML = "College";
            directionsArray = ['⬆️ for 250m', '➡️'];
        }
        else if (place == 'student-house') {
            heading.innerHTML = "Student House";
            directionsArray = ['⬆️ for 50m', '⬅️', '⬆️ for 20m', '⬅️', '⬆️ for 50m', '➡️'];
        }
        else if (place == 'library') {
            heading.innerHTML = "Library";
            directionsArray = ['⬆️ for 50m', '⬅️ for 10m', '⬆️'];
        }
        else if (place == 'sports-center') {
            heading.innerHTML = "Sports Center";
            directionsArray = ['⬆️ for 100m', '➡️'];
        }
        else if (place == 'bistro') {
            heading.innerHTML = "Bistro";
            directionsArray = ['⬆️ for 100m', '➡️'];
        }
        else if (place == 'football') {
            heading.innerHTML = "Football";
            directionsArray = ['⬆️ for 100m', '➡️'];
        }
        else if (place == 'hall') {
            heading.innerHTML = "Hall";
            directionsArray = ['⬆️ for 100m', '➡️'];
        }
        else if (place == 'sierra') {
            heading.innerHTML = "Sierra";
            directionsArray = ['⬆️ for 100m', '➡️'];
        }
        else if (place == 'innovation-area') {
            heading.innerHTML = "Innovation Area";
            directionsArray = ['⬆️ for 100m', '➡️'];
        }

        directionsArray.forEach(function(element) {
            listOfDirections.push("<li>" + element + "</li>");
        });
        
        list.innerHTML = listOfDirections.join('');
    }

    directionsText.appendChild(heading, list);

    if (iframe.src !== '') {
        iframeSection.append(iframe, document.createElement('hr'));
    }
    
}