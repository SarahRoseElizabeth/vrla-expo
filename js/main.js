AOS.init();

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



    let tlCloud = new TimelineMax({repeat: -1});
    let tlCloud2 = new TimelineMax({repeat: -1});
    let tlCloud3 = new TimelineMax({repeat: -1});
    let masterCloud = new TimelineMax();

    tlCloud
        .to("#cloud1",3,{y:'-=5', ease: Sine.easeInOut})
        .to("#cloud1",3,{y:'+=5', ease: Sine.easeInOut});

    tlCloud2.
    to("#cloud2",2,{y:'+=7', ease: Sine.easeInOut}).
    to("#cloud2",2,{y:'-=7', ease: Sine.easeInOut});

    tlCloud3.
    to("#cloud3",3,{y:'-=7', ease: Sine.easeInOut}).
    to("#cloud3",3,{y:'+=7', ease: Sine.easeInOut});

    masterCloud.add(tlCloud2);
    masterCloud.add(tlCloud, 3);
    masterCloud.add(tlCloud3, 4);


    let tlLeaves = new TimelineMax({repeat: -1});

    tlLeaves
        .to("#leaf",16,{x:'+=200', ease: Power0.linear, repeat: -1}, 0)
        .to("#leaf",5,{y:'+=10', ease: Power1.easeInOut, yoyo: true, repeat: -1}, 3);


    tlLeaves
        .to("#leaf-2",14,{x:'+=200', ease: Power0.linear, repeat: -1}, 0)
        .to("#leaf-2",5,{y:'+=10', ease: Power1.easeInOut, yoyo: true, repeat: -1}, 5);

    tlLeaves
        .to("#leaf-3",15,{x:'+=200', ease: Power0.linear, repeat: -1}, 0)
        .to("#leaf-3",5,{y:'+=10', ease: Power1.easeInOut, yoyo: true, repeat: -1}, 2);

    tlLeaves
        .to("#leaf-4",16,{x:'+=200', ease: Power0.linear, repeat: -1}, 0)
        .to("#leaf-4",5,{y:'+=10', ease: Power1.easeInOut, yoyo: true, repeat: -1}, 5);

    tlLeaves
        .to("#leaf-5",12,{x:'+=200', ease: Power0.linear, repeat: -1}, 0)
        .to("#leaf-5",5,{y:'+=10', ease: Power1.easeInOut, yoyo: true, repeat: -1}, 0.5);

    tlLeaves
        .to("#leaf-6",16,{x:'+=200', ease: Power0.linear, repeat: -1}, 0)
        .to("#leaf-6",5,{y:'+=10', ease: Power1.easeInOut, yoyo: true, repeat: -1}, 5);

    tlLeaves
        .to("#leaf-7",15,{x:'+=200', ease: Power0.linear, repeat: -1}, 0)
        .to("#leaf-7",5,{y:'+=10', ease: Power1.easeInOut, yoyo: true, repeat: -1}, 2);

    tlLeaves
        .to("#leaf-7",12,{x:'+=200', ease: Power0.linear, repeat: -1}, 0)
        .to("#leaf-7",5,{y:'+=10', ease: Power1.easeInOut, yoyo: true, repeat: -1}, 3);

    tlLeaves
        .to("#leaf-8",15,{x:'+=200', ease: Power0.linear, repeat: -1}, 0)
        .to("#leaf-8",5,{y:'+=10', ease: Power1.easeInOut, yoyo: true, repeat: -1}, 0.5);

    tlLeaves
        .to("#leaf-9",17,{x:'+=200', ease: Power0.linear, repeat: -1}, 0)
        .to("#leaf-9",5,{y:'+=10', ease: Power1.easeInOut, yoyo: true, repeat: -1}, 7);


    let tlLetters = new TimelineMax();

    tlLetters
        .staggerFrom(".letter1",0.75,{y: 100, autoAlpha: 0, ease: Power1.easeOut}, 2)
        .staggerFrom(".letter2",0.75,{y: -100, autoAlpha: 0, ease: Power1.easeOut}, 2);

});





