//sticky navigation
const navbar = document.getElementById("navbar");
// Menu item buttons

// function to toogle for menu items
const tabItems = document.querySelectorAll('.btn');
const tabContentItems = document.querySelectorAll('#items');

//Select tab content item
function selectItem(e) {
    removeBorder();
    removeShow();
    //add border to current tab
    this.classList.add('tab-border')
    // Grab content item from Dom
    const tabContentItem = document.querySelector(`#${this.id}-item`)
    // Add show class
    tabContentItem.classList.add('active');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('active'))
}
//Listener fo tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));





window.addEventListener('scroll',function(){
    let head = document.getElementById('navbar')
    head.classList.toggle('sticky',this.window.scrollY > 0)
})