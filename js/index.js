
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
        $(alfabetoList).show();

        categoryList.style.height = "0"
        categoryList.style.overflow = "none"
        categoryList.style.opacity = "0"
    }
    
    else if (value == 'category') {
        alfabeto.style.opacity = "0.4"
        category.style.opacity = "1"
        categoryList.style.height = "90%"
        categoryList.style.overflow = "auto"
        categoryList.style.opacity = "1"
        $(alfabetoList).hide();
    }
}
    
function getDirections(startPole, place) {

    let directionsText = document.getElementById('directions-text');
    let directionsArray = [];
    let listOfDirections = [];
    let list = document.getElementById('list');
    let iframeSection = document.getElementById('iframe');
    iframeSection.innerHTML = '';

    if (directionsText.childElementCount = 1) {
        directionsText.innerHTML = ""
    }

    let heading = document.createElement('h2');
    heading.id = 'directions-text';
    let iframe = document.createElement('iframe');

    if (startPole == 1) {
        if (place == 'myp') {
            heading.innerHTML = "MYP & DP";
            directionsArray = ['<a href="https://h-is.link/tour_mypdp_ita">Italian</a>', '<a href="https://h-is.link/tour_mypdp_eng">English</a>'];
            // iframe.src = 'https://orbix360.com/t/lCJMyrscsaMtFmjmgxmtOXsa5wp2/5143489931116544/test?embed=yes'
        }
        else if (place == 'pyp') {
            heading.innerHTML = "PYP";
            directionsArray = ['<a href="https://h-is.link/tour_pyp_ita">Italian</a>', '<a href="https://h-is.link/tour_pyp_eng">English</a>'];
        }
        else if (place == 'college') {
            heading.innerHTML = "College";
            directionsArray = ['<a href="https://h-is.link/tour_college_ita">Italian</a>', '<a href="https://h-is.link/h-is.link/tour_college_eng">English</a>'];
        }
        else if (place == 'student-house') {
            heading.innerHTML = "Student House";
            directionsArray = ['<a href="https://h-is.link/tour_boarding_ita">Italian</a>', '<a href="https://h-is.link/tour_boarding_eng">English</a>'];
        }
        else if (place == 'library') {
            heading.innerHTML = "Library";
            directionsArray = ['<a href="https://h-is.link/tour_library_ita">Italian</a>', '<a href="https://h-is.link/tour_library_eng">English</a>'];
        }
        else if (place == 'sports-center') {
            heading.innerHTML = "Sports Center";
            directionsArray = ['<a href="https://h-is.link/tour_sportsfacilities_ita">Italian</a>', '<a href="https://h-is.link/tour_sportsfacilities_eng">English</a>'];
        }
        else if (place == 'bistro') {
            heading.innerHTML = "Bistro";
            directionsArray = ['<a href="https://h-is.link/tour_bistro_ita">Italian</a>', '<a href="https://h-is.link/tour_bistro_eng">English</a>'];
        }
        else if (place == 'football') {
            heading.innerHTML = "Football";
            directionsArray = ['Football'];
        }
        else if (place == 'hall') {
            heading.innerHTML = "Hall";
            directionsArray = ['<a href="https://h-is.link/tour_hfarmhq_ita">Italian</a>', '<a href="https://h-is.link/tour_hfarmhq_eng">English</a>'];
        }
        else if (place == 'sierra') {
            heading.innerHTML = "Sierra";
            directionsArray = ['Sierra'];
        }
        else if (place == 'innovation-area') {
            heading.innerHTML = "Innovation Area";
            directionsArray = ['<a href="https://h-is.link/tour_campus_ita">Italian</a>', '<a href="https://h-is.link/tour_campus_eng">English</a>'];
        }
        else if (place == 'welcome-center') {
            heading.innerHTML = "Welcome Center";
            directionsArray = ['<a href="https://h-is.link/tour_welcomecenter_eng">Italian</a>', '<a href="https://h-is.link/tour_welcomecenter_eng">English</a>'];
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