/* =========================================
   MENU MOBILE
========================================= */

const menuMobile =
    document.getElementById("menuMobile");

const menu =
    document.querySelector(".menu");


menuMobile.addEventListener(
    "click",
    () => {

        menu.classList.toggle("active");

    }
);



/* =========================================
   FECHAR MENU AO CLICAR
========================================= */

const menuLinks =
    document.querySelectorAll(
        ".menu a"
    );


menuLinks.forEach(
    link => {

        link.addEventListener(
            "click",
            () => {

                menu.classList.remove(
                    "active"
                );

            }
        );

    }
);



/* =========================================
   ANO AUTOMÁTICO
========================================= */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}