/* global $ */

$(function() {
    boxRollovers();
});

const $selector = $(".title-image");
let XAngle = 0;
let YAngle = 0;
const Z = 20;

function boxRollovers() {

    $selector.on("mousemove", function(e) {
        const $this = $(this);
        let XRel = e.pageX - $this.offset().left;
        let YRel = e.pageY - $this.offset().top;
        const width = $this.width();

        YAngle = -(0.5 - (XRel / width)) * 5;
        XAngle = (0.5 - (YRel / width)) * 5;
        updateView($(".title-image"));
    });

    $selector.on("mouseleave", function() {
        const oLayer = $(".title-image");
        oLayer.css({
            "transform": "perspective(525px) translateZ(0) rotateX(0deg) rotateY(0deg)",
            "transition": "all 150ms linear 150ms",
            "-webkit-transition": "all 150ms linear 150ms"
        });
    });
}

function updateView(oLayer) {
    oLayer.css({
        "transform": "perspective(525px) translateZ(" + Z + "px) rotateX(" + XAngle + "deg) rotateY(" + YAngle + "deg)",
        "transition": "none",
        "-webkit-transition": "none"
    });
}
