const linksPainel = {
    formularios: {
        compras: "https://forms.gle/dfS9AhgTAuEnr7Up8",
        pessoal: "https://forms.gle/WTaXqq7fms7Yi9Vi8",
        cargos: "https://forms.gle/mbEy5hkGocPqsLHZ8",
        emprestimo: "https://forms.gle/hRrgjXxd1qBdsX2J8",
        demissao: "https://forms.gle/5ebALfvd5PhGBJM17"
    },
    contatos: {
        rh: "https://wa.link/ugaorr",
        dp: "https://wa.link/a6v56t"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const acoes = [
        { id: "link-compras", url: linksPainel.formularios.compras },
        { id: "link-pessoal", url: linksPainel.formularios.pessoal },
        { id: "link-cargos", url: linksPainel.formularios.cargos },
        { id: "link-emprestimo", url: linksPainel.formularios.emprestimo },
        { id: "link-demissao", url: linksPainel.formularios.demissao },
        { id: "btn-rh", url: linksPainel.contatos.rh },
        { id: "btn-dp", url: linksPainel.contatos.dp },
    ];

    acoes.forEach(acao => {
        const elemento = document.getElementById(acao.id);
        if (elemento) {
            elemento.addEventListener("click", (e) => {
                e.preventDefault();
                window.open(acao.url, "_blank");
            });
        }
    });

    // Scroll Suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});