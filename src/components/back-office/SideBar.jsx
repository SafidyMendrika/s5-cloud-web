const SideBar = () => {
  return (
    <>
      <aside className="left-sidebar">
        <div className="pt-3">
          <div className="brand-logo d-flex align-items-center justify-content-between">
            <a href="./index.html" className="text-nowrap logo-img">
              <img
                src={`${process.env.PUBLIC_URL}/images/logos/logo.png`}
                width="180"
                alt=""
              />
            </a>
            <div
              className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
              id="sidebarCollapse"
            >
              <i className="ti ti-x fs-8"></i>
            </div>
          </div>
          <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
            <ul id="sidebarnav">
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                <span className="hide-menu">Accueil</span>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link"
                  href="/back-office/statistiques"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-chart-area"></i>
                  </span>
                  <span className="hide-menu">Statistiques</span>
                </a>
              </li>
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                <span className="hide-menu">Voiture</span>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link"
                  href="/back-office/categories"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-category-2"></i>
                  </span>
                  <span className="hide-menu">Categories</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link"
                  href="/back-office/marques"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-brand-nuxt"></i>
                  </span>
                  <span className="hide-menu">Marques</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link"
                  href="/back-office/modeles"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-coin-monero"></i>
                  </span>
                  <span className="hide-menu">Modeles</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link"
                  href="/back-office/moteurs"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-3d-cube-sphere"></i>
                  </span>
                  <span className="hide-menu">Moteurs</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link"
                  href="/back-office/vitesses"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-needle"></i>
                  </span>
                  <span className="hide-menu">Vitesses</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link"
                  href="/back-office/energies"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-windmill"></i>
                  </span>
                  <span className="hide-menu">Energies</span>
                </a>
              </li>

              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                <span className="hide-menu">Gestion</span>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link"
                  href="/back-office/annonces"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-speakerphone"></i>
                  </span>
                  <span className="hide-menu">Annonces</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link"
                  href="/back-office/commissions"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-coin"></i>
                  </span>
                  <span className="hide-menu">Commissions</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
