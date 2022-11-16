// Toggle
function Menu(e) {
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close", list.classList.add('top-[80px]'), list.classList.add(
        'opacity-100')) : (e.name = "menu", list.classList.remove('top-[80px]'), list.classList.remove(
        'opacity-100'))
}

// Dropdown
function openDropdown(event, dropdownId) {
    let element = event.target;
    while (element.nodeName !== "BUTTON") {
        element = element.parentNode;
    }
    var popper = Popper.createPopper(element, document.getElementById(dropdownId), {
        placement: 'bottom-start'
    });
    document.getElementById(dropdownId).classList.toggle("hidden");
    document.getElementById(dropdownId).classList.toggle("block");
}

// MultiLanguage
function openDropdown(event, langId) {
    let element = event.target;
    while (element.nodeName !== "BUTTON") {
        element = element.parentNode;
    }
    var popper = Popper.createPopper(element, document.getElementById(langId), {
        placement: 'bottom-start'
    });
    document.getElementById(langId).classList.toggle("hidden");
    document.getElementById(langId).classList.toggle("block");
}
