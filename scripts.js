document.addEventListener('DOMContentLoaded', function () {
    // Example: Toggle the visibility of nested list items
    document.querySelectorAll('.sidebar > ul > li').forEach(function (item) {
        item.addEventListener('click', function () {
            let subMenu = this.querySelector('ul');
            if (subMenu) {
                subMenu.classList.toggle('active');
            }
        });
    });
});
