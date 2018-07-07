$(document).ready(function(){

    let collapsible = $(".collapsible");

    collapsible.click(function() {
        let $self = $(this);
        $self.toggleClass("active");

    });
});






