$(document).ready(function () {
    $(document).on("scroll", function () {
        let scrollPosition = $(document).scrollTop();

        let beranda = $("#beranda").offset().top;
        let tentangKami = $("#tentangKami").offset().top;
        let galeriIbadah = $("#galeriIbadah").offset().top;
        let programKerja = $("#programKerja").offset().top;
        let kontak = $("#kontak").offset().top;

        let closestSectionId = "beranda";
        let closestDistance = Math.abs(scrollPosition - beranda);

        if (Math.abs(scrollPosition - tentangKami) < closestDistance) {
            closestDistance = Math.abs(scrollPosition - tentangKami);
            closestSectionId = "tentangKami";
        }
        if (Math.abs(scrollPosition - galeriIbadah) < closestDistance) {
            closestDistance = Math.abs(scrollPosition - galeriIbadah);
            closestSectionId = "galeriIbadah";
        }
        if (Math.abs(scrollPosition - programKerja) < closestDistance) {
            closestDistance = Math.abs(scrollPosition - programKerja);
            closestSectionId = "programKerja";
        }
        if (Math.abs(scrollPosition - kontak) < closestDistance) {
            closestSectionId = "kontak";
        }

        setActiveNavLink(closestSectionId);
    });

    function setActiveNavLink(sectionId) {
        $("#navbarMenu ul li a").removeClass("active-one");
        $(`#navbarMenu ul li a[href="#${sectionId}"]`).addClass("active-one");
    }

    let interval = 3000;

    function autoSlide() {
        $('.carousel').carousel('next');
    }

    setInterval(autoSlide, interval);

});