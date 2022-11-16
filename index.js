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

// MultiLanguage
// let langs = ['en', 'id'];
// let lang = 'en';
// setLangStyles(lang);

// function setStyles(styles) {
//     var elementId = '__lang_styles';
//     var element = document.getElementById(elementId);
//     if (element) {
//         element.remove();
//     }

//     let style = document.createElement('style');
//     style.id = elementId;
//     style.type = 'text/css';

//     if (style.styleSheet) {
//         style.styleSheet.cssText = styles;
//     } else {
//         style.appendChild(document.createTextNode(styles));
//     }
//     document.getElementsByTagName('head')[0].appendChild(style);
// }

// function setLang(lang) {
//     setLangStyles(lang);
// }

// function setLangStyles(lang) {
//     let styles = langs
//         .filter(function (l) {
//             return l != lang;
//         })
//         .map(function (l) {
//             return ':lang(' + l + ') { display: none; }';
//         })
//         .join(' ');

//     setStyles(styles);
// }