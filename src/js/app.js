"use strict";

// import { Fancybox } from "@fancyapps/ui";
// import Swiper from "swiper";
import * as devFunctions from "./modules/functions.js";
import SmoothScroll from "smooth-scroll";

// Fancybox.bind("[data-fancybox]", {});



document.addEventListener("DOMContentLoaded", () => {
    devFunctions.isWebp();
    devFunctions.OS();
    devFunctions.popup();



    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800,
        speedAsDuration: true,
        offset: document.querySelector('.header__wrapper').offsetHeight,
    });


    document.addEventListener('click', (e) => {
        let target = e.target;

        if (target.closest('.icon-menu')) {
            document.querySelector('.icon-menu').classList.toggle('active');
            document.querySelector('.header__body').classList.toggle('active');
            document.body.classList.toggle('lock-menu');
        }

        if (target.classList.contains('header__menu-link')) {
            document.querySelector('.icon-menu').classList.remove('active');
            document.querySelector('.header__body').classList.remove('active');
            document.body.classList.remove('lock-menu');
        }
    })

    if (document.querySelectorAll('.video__content').length > 0) {
        document.querySelectorAll('.video__content').forEach(video => {
            video.addEventListener('mouseenter', function () {
                video.play();
            });

            video.addEventListener('mouseleave', function () {
                video.pause();
            });
        })
    }


    const headerElement = document.querySelector('.header__wrapper');
    const whiteArea = document.querySelector('.team');


    if (whiteArea) {
        let ScrollObserver = ScrollTrigger.create({
            trigger: whiteArea,
            start: `0 0+=${headerElement.offsetHeight}px`,
            onEnter: () => document.querySelector('.header').classList.add('scroll'),
            onEnterBack: () => document.querySelector('.header').classList.add('scroll'),
            onLeaveBack: () => document.querySelector('.header').classList.remove('scroll'),
            onLeave: () => document.querySelector('.header').classList.remove('scroll'),

        });



        let sizePageObserver = new ResizeObserver(() => {
            ScrollObserver.refresh();
        });

        sizePageObserver.observe(whiteArea)


    }




    const svgColumns = document.querySelectorAll('.stats__column');

    if (svgColumns) {
        svgColumns.forEach(svgStat => {

            const idSection = svgStat.dataset.id;


            svgStat.addEventListener('pointerenter', (e) => {
                document.getElementById(idSection).classList.add('visible');
            });

            svgStat.addEventListener('pointerleave', (e) => {

                document.getElementById(idSection).classList.remove('visible');
            });


        })
    }


    const svgStats = document.querySelectorAll('.blogger-stats__body');

    if (svgStats) {
        svgStats.forEach(svgStat => {

            const bigPart = svgStat.querySelector('.big-part');
            const smallPart = svgStat.querySelector('.small-part');
            const bigPrecent = svgStat.querySelector('.top-precent');
            const smallPrecent = svgStat.querySelector('.bottom-precent');

            bigPart.addEventListener('pointerenter', (e) => {
                bigPrecent.classList.add('visible');
            });

            bigPart.addEventListener('pointerleave', (e) => {
                bigPrecent.classList.remove('visible');
            });

            smallPart.addEventListener('pointerenter', (e) => {
                smallPrecent.classList.add('visible');
            });

            smallPart.addEventListener('pointerleave', (e) => {
                smallPrecent.classList.remove('visible');
            });

        })
    }

    // range filters

    // const rangeFilters = document.querySelectorAll('.range-filter');

    // rangeFilters.forEach(rangeFilter => {
    //     const rangeSlider = rangeFilter.querySelector('.range-filter__slider');
    //     const startInput = rangeFilter.querySelector('.range-filter__input_start');
    //     const endInput = rangeFilter.querySelector('.range-filter__input_end');
    //     let unit = rangeFilter.querySelector('.range-filter__unit');
    //     const inputs = [startInput, endInput];

    //     noUiSlider.create(rangeSlider, {
    //         start: [+startInput.value, +endInput.value],
    //         connect: true,
    //         step: +startInput.getAttribute('data-step'),
    //         range: {
    //             'min': [+startInput.getAttribute('data-min')],
    //             'max': [+endInput.getAttribute('data-max')]
    //         }
    //     });


    //     rangeSlider.noUiSlider.on('update', function (values, handle) {

    //         if (unit) {
    //             inputs[handle].value = values[handle];
    //         } else {
    //             console.log('no unit');
    //             let value = (Math.ceil(values[handle]) > 10000) ? (Math.ceil(values[handle]).toString().slice(0, -3) + "k") : numberWithCommas(Math.ceil(values[handle]));
    //             inputs[handle].value = value;
    //             // inputs[handle].value = 
    //         }

    //     });

    //     const setRangeSlider = (i, value) => {
    //         let arr = [null, null];
    //         arr[i] = value;

    //         rangeSlider.noUiSlider.set(arr);
    //     };

    //     inputs.forEach((el, index) => {
    //         el.addEventListener('change', (e) => {
    //             setRangeSlider(index, e.currentTarget.value);

    //         });
    //     });
    // });

    // function numberWithCommas(x) {
    //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    // }

    // // Fancybox.defaults = {
    // //     ...Fancybox.defaults,
    // //     showClass: "f-scaleIn",
    // //     hideClass: "f-scaleOut",
    // // };

    // Fancybox.bind("[data-fancybox]", {
    //     dragToClose: false,
    //     // animated: true,

    //     showClass: "f-scaleIn",
    //     hideClass: "f-scaleOut",

    // });

});
