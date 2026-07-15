(() => {
  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".site-nav");
  const navLinks = Array.from(document.querySelectorAll(".site-nav a[href^='#']"));
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  const projectTriggers = Array.from(document.querySelectorAll("[data-dialog-target]"));
  const projectDialogs = Array.from(document.querySelectorAll(".project-dialog"));
  let lastDialogTrigger = null;

  const setMenuState = (isOpen) => {
    if (!menuButton || !navigation) return;

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    navigation.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
  };

  const updateHeader = () => {
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = documentHeight > 0 ? Math.min(scrollTop / documentHeight, 1) : 0;

    header?.classList.toggle("is-scrolled", scrollTop > 20);
    header?.style.setProperty("--scroll-progress", String(scrollProgress));
  };

  menuButton?.addEventListener("click", () => {
    setMenuState(menuButton.getAttribute("aria-expanded") !== "true");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuState(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) setMenuState(false);
    updateHeader();
  });

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  if ("IntersectionObserver" in window && sections.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleEntry) return;

        navLinks.forEach((link) => {
          const isCurrent = link.getAttribute("href") === `#${visibleEntry.target.id}`;
          if (isCurrent) {
            link.setAttribute("aria-current", "page");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      },
      { rootMargin: "-35% 0px -55%", threshold: [0.05, 0.2, 0.5] },
    );

    sections.forEach((section) => sectionObserver.observe(section));
  }

  projectTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const dialog = document.querySelector(trigger.dataset.dialogTarget);
      if (typeof HTMLDialogElement === "undefined" || !(dialog instanceof HTMLDialogElement) || dialog.open) return;

      lastDialogTrigger = trigger;
      dialog.showModal();
      document.body.classList.add("modal-open");
      dialog.querySelectorAll("video").forEach((video) => video.load());
      requestAnimationFrame(() => dialog.querySelector("[data-dialog-close]")?.focus());
    });
  });

  document.querySelectorAll("[data-dialog-close]").forEach((closeButton) => {
    closeButton.addEventListener("click", () => {
      closeButton.closest("dialog")?.close();
    });
  });

  projectDialogs.forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });

    dialog.addEventListener("close", () => {
      dialog.querySelectorAll("video").forEach((video) => {
        video.pause();
        video.currentTime = 0;
        video.load();
      });
      document.body.classList.remove("modal-open");
      lastDialogTrigger?.focus();
      lastDialogTrigger = null;
    });
  });

  const currentYear = document.querySelector("[data-current-year]");
  if (currentYear) currentYear.textContent = new Date().getFullYear();
})();
