// access html elements
document.getElementById('waterContent').style.display = 'none';
document.getElementById('airPollutionContent').style.display = 'none';
document.getElementById('computersTab').className = 'accordionPanelTab highlight';

// hiding contents and tabs
function hidePanels() {
    document.getElementById('computersContent').style.display = 'none';
    document.getElementById('waterContent').style.display = 'none';
    document.getElementById('airPollutionContent').style.display = 'none';
    document.getElementById('computersTab').className = 'accordionPanelTab';
    document.getElementById('waterTab').className = 'accordionPanelTab';
    document.getElementById('airPollutionTab').className = 'accordionPanelTab';
}

// showing contents element and tab
function showComputers() {
    hidePanels(); // hiding others tabs 
    document.getElementById('computersContent').style.display = 'block';
    document.getElementById('computersTab').className = 'accordionPanelTab highlight';
}

// showing contents element and tab
function showWater() {
    hidePanels(); // hiding others tabs 
    document.getElementById('waterContent').style.display = 'block';
    document.getElementById('waterTab').className = 'accordionPanelTab highlight';       
}

// showing contents element and tab
function showAirPollution() {
    hidePanels(); // hiding others tabs 
    document.getElementById('airPollutionContent').style.display = 'block';
    document.getElementById('airPollutionTab').className = 'accordionPanelTab highlight';
}

// code for the tabs in the page
const tabs = document.querySelector("#featuresTabs");
const tabNav = document.querySelectorAll(".tab-nav");
const contents = document.querySelectorAll(".content");

// clicking on specific target ID open the related tab which become active, and the already active one will be removed
tabs.onclick = e => {
    const id = e.target.dataset.id;
    if (id) {
        tabNav.forEach(btn => {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");

        contents.forEach(content => {
            content.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
}

// create event from user interaction
function createEventListener() {
	document.getElementById("computersTab").addEventListener("click", showComputers, false);
	document.getElementById("airPollutionTab").addEventListener("click", showAirPollution, false);
	document.getElementById("waterTab").addEventListener("click", showWater, false);
}

window.addEventListener("load", createEventListener);