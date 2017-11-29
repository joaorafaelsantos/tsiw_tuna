$(function () {

    // HOME
    $("#content").load("../../../pages/home.html");

    $("#home").click(function (e) {
        e.preventDefault();
        $("#content").empty();
        $("#content").load("../../../pages/home.html");
    });

    // ESPETÁCULO

    // 1. Gatunos
    $("#espetaculo-gatunos").click(function (e) {
        e.preventDefault();
        $("#content").empty();
        $("#content").load("../../../pages/espetaculo_gatunos.html");
        closeMenu();
    });

    // 2. Afrodituna
    $("#espetaculo-afrodituna").click(function (e) {
        e.preventDefault();
        $("#content").empty();
        $("#content").load("../../../pages/espetaculo_afrodituna.html");
        closeMenu();
    });

    // 3. Escolas
    $("#espetaculo-escolas").click(function (e) {
        e.preventDefault();
        $("#content").empty();
        $("#content").load("../../../pages/espetaculo_escolamusica.html");
        closeMenu();
    });

    // CAUSAS SOLIDÁRIAS

    // 1. IPP
    $("#csolidarias_ipp").click(function (e) {
        e.preventDefault();
        $("#content").empty();
        $("#content").load("../../../pages/csolidarias_ipp.html");
        closeMenu();
    });

    // 2. Maria da Paz
    $("#csolidarias_mariadapaz").click(function (e) {
        e.preventDefault();
        $("#content").empty();
        $("#content").load("../../../pages/csolidarias_mariadapaz.html");
        closeMenu();
    });

    // COLABORADORES

    // 1. ESHT
    $("#colab_esht").click(function (e) {
        e.preventDefault();
        $("#content").empty();
        $("#content").load("../../../pages/colab_esht.html");
        closeMenu();
    });

    // 2- ESHT
    $("#colab_esmad").click(function (e) {
        e.preventDefault();
        $("#content").empty();
        $("#content").load("../../../pages/colab_esmad.html");
        closeMenu();
    });

    // CONTACTOS
})