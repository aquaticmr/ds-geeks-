document.addEventListener('DOMContentLoaded', function () {
    
    document.querySelectorAll('.sidebar > ul > li').forEach(function (item) {
        item.addEventListener('click', function () {
            let subMenu = this.querySelector('ul');
            if (subMenu) {
                subMenu.classList.toggle('active');
            }
        });
    });
});
