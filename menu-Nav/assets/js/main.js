/*=============== SHOW SIDEBAR ===============*/
const showSidebar = (toggleId, sidebarId, headerId, mainId) => {
    const toggle = document.getElementById(toggleId);
    const sidebar = document.getElementById(sidebarId);
    const header = document.getElementById(headerId);
    const main = document.getElementById(mainId);



    if (toggle && sidebar && header && main) {
        toggle.addEventListener('click', () => {
            // Alternar la clase 'show-sidebar' para mostrar/ocultar la barra lateral
            sidebar.classList.toggle('show-sidebar');
            /**Add padding header **/
            header.classList.toggle('left-pd')
            /**Add padding main**/
            main.classList.toggle('left-pd')
        });
    } else {
        console.warn(`Elementos con IDs ${toggleId} y/o ${sidebarId} no encontrados.`);
    }
}


showSidebar('header-toggle', 'sidebar', 'header', 'main');

/*=============== LINK ACTIVE ===============*/
const sidebarLink = document.querySelectorAll('.sidebar__list a')

function linkColor(){
    sidebarLink.forEach(l => l.classList.remove('active-link'))
    this.classList.add('active-link')
   
}
sidebarLink.forEach(l => l.addEventListener('click',linkColor))
/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-fill'

/*** previously selected topic(if user selected)***/

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the current that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrenticon = () => themeButton.classList.contains(iconTheme) ? 'ri-contrast-2-line' : 'ri-sun-fill'

//we validate if the user previosly chose a topic
if (selectedTheme){

    // if the validate is fulfilled, we the issue was  to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (darkTheme)
    themeButton.classList[selectedIcon === 'ri-contrast-2-line' ? 'add': 'remove'](iconTheme)
}

//Activate / desativate the theme manually with the button
themeButton.addEventListener('click', ()=> {
    //Add or remuve  the dark /icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //the save the theme and the current icon that the user chose
    localStorage.setItem('seleced-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrenticon())

})