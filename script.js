
const linksPainel = {
    formularios: {
        compras: "https://forms.gle/dfS9AhgTAuEnr7Up8",
        pessoal: "https://forms.gle/WTaXqq7fms7Yi9Vi8",
        cargos: "https://forms.gle/mbEy5hkGocPqsLHZ8",
        emprestimo: "https://forms.gle/hRrgjXxd1qBdsX2J8",
        demissao: "https://forms.gle/5ebALfvd5PhGBJM17"
    },
    advertencias: {
        suspensao: "https://docs.google.com/document/d/1yO8oIZFzJ_r-t7QFLXJqYShgyk2vHZiNjk1CsYYl1gE/copy?tab=t.0",
        epi: "https://docs.google.com/document/d/1KM8NvU9YRf9vsHNvmPl4RRDUTIgPNC5uQ3BaKpg0D4I/copy?tab=t.0",
        falta: "https://docs.google.com/document/d/18VpEreQjqeKetEmdcU_0KndMOjxPMzkhiGlqvimKRdE/copy?tab=t.0",
        insubordinacao: "https://docs.google.com/document/d/1vwnfJ0brR4peEGZYteVdQWDjbvqLI3pkzlBl-75XDdM/copy?tab=t.0",
        honra: "https://docs.google.com/document/d/1Y0W90K0mNBocbbi3jUDNIBMKN1DZpyD-CjVSkm-72sU/copy?tab=t.0"
    },
    contatos: {
        rh: "https://wa.link/ugaorr",
        dp: "https://wa.link/a6v56t"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    
    const acoes = [
        // Formulários Principais
        { id: "link-compras", url: linksPainel.formularios.compras },
        { id: "link-pessoal", url: linksPainel.formularios.pessoal },
        { id: "link-cargos", url: linksPainel.formularios.cargos },
        { id: "link-emprestimo", url: linksPainel.formularios.emprestimo },
        { id: "link-demissao", url: linksPainel.formularios.demissao },
        
        // Botões de Contato
        { id: "btn-rh", url: linksPainel.contatos.rh },
        { id: "btn-dp", url: linksPainel.contatos.dp }
    ];

    acoes.forEach(acao => {
        const elemento = document.getElementById(acao.id);
        if (elemento) {
            elemento.addEventListener("click", (e) => {
                if (elemento.getAttribute('href') === "#") {
                    e.preventDefault();
                }
                window.open(acao.url, "_blank");
            });
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId !== "#") {
                e.preventDefault();
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
