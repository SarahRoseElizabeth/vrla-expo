$(document).ready(function(){

    let collapsible = $(".collapsible"),
        menu1 = $(".desktop-ham-icon");

    collapsible.click(function() {
        let $self = $(this);
        $self.toggleClass("active");

    });

    menu1.click(function() {
        let menuWrapper1 = $(".desktop-menu-wrapper");
        menuWrapper1.toggleClass("menu-click");
    });
});






