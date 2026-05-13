(function () {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.dataset.panel;
      if (!target) return;

      document.querySelectorAll(".nav-link").forEach((l) => {
        l.classList.remove("active");
      });
      link.classList.add("active");

      document.querySelectorAll(".admin-panel").forEach((p) => {
        p.classList.remove("active");
      });
      const panel = document.getElementById("panel-" + target);
      if (panel) panel.classList.add("active");
    });
  });

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    if (btn.classList.contains("btn-delete")) {
      const row = btn.closest(".cat-row");
      if (row && window.confirm("Excluir esta categoria?")) {
        row.remove();
      }
    }
    if (btn.classList.contains("btn-approve") || btn.classList.contains("btn-reject")) {
      const row = btn.closest(".review-row");
      if (row) {
        row.style.opacity = "0.4";
        row.style.pointerEvents = "none";
      }
    }
    if (btn.classList.contains("btn-block")) {
      if (btn.disabled) return;
      const row = btn.closest(".user-row");
      if (!row) return;
      if (!window.confirm("Bloquear este utilizador?")) return;
      const status = row.querySelector(".user-row__status");
      if (status) status.textContent = "Bloqueado";
      btn.disabled = true;
    }
    if (btn.classList.contains("btn-remove-pick")) {
      const row = btn.closest(".editor-pick-row");
      if (!row) return;
      if (!window.confirm("Remover este post das escolhas do editor?")) return;
      row.remove();
    }
  });

  document.querySelectorAll(".panel-search").forEach((input) => {
    input.addEventListener("input", () => {
      const q = input.value.toLowerCase();
      const panel = input.closest(".admin-panel");
      if (!panel) return;
      panel
        .querySelectorAll(".cat-row, .review-row, .user-row, .editor-pick-row")
        .forEach((row) => {
          const text = row.textContent.toLowerCase();
          row.style.display = text.includes(q) ? "" : "none";
        });
    });
  });

  const formPost = document.getElementById("form-novo-post");
  if (formPost) {
    formPost.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!formPost.checkValidity()) {
        formPost.reportValidity();
        return;
      }

      window.alert("Post guardado (demonstração).");
      formPost.reset();
    });
  }
})();
