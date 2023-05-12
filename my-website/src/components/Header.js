const Header = ({ dark, children }) => {
  dark = !!dark ? "dark" : "light";
  return (
    <header>
      <div class={`navbar navbar-${dark} bg-${dark} shadow-sm">`}>
        <div class="container">
          <a href="/" class="navbar-brand d-flex align-items-center">
            <img
              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 36 36' preserveAspectRatio='xMidYMid meet' xmlns:v='https://vecta.io/nano'%3e%3cpath fill='%2377b255' d='M35 36v-5a6 6 0 0 0-6-6H13a6 6 0 0 0-6 6v5h28z'/%3e%3cpath fill='%23f7dece' d='M16.64 25.106c0 .894 2.36 1.993 4.36 1.993s4.359-1.099 4.359-1.992V21.29h-8.72v3.816z'/%3e%3cpath fill='%23eec2ad' d='M16.632 22.973c1.216 1.374 2.724 1.746 4.364 1.746s3.146-.373 4.363-1.746v-3.491h-8.728v3.491z'/%3e%3cg fill='%23f7dece'%3e%3cpath d='M14.444 12.936c0 1.448-.734 2.622-1.639 2.622s-1.639-1.174-1.639-2.622.734-2.623 1.639-2.623 1.639 1.174 1.639 2.623m16.389 0c0 1.448-.733 2.622-1.639 2.622s-1.639-1.174-1.639-2.622.733-2.623 1.639-2.623 1.639 1.174 1.639 2.623'/%3e%3cpath d='M12.477 13.96c0-5.589 3.816-10.121 8.523-10.121s8.522 4.532 8.522 10.121S25.707 24.081 21 24.081s-8.523-4.532-8.523-10.121'/%3e%3c/g%3e%3cpath fill='%23c1694f' d='M21 20.802c-2.754 0-3.6-.705-3.741-.848a.655.655 0 0 1 .902-.95c.052.037.721.487 2.839.487 2.2 0 2.836-.485 2.842-.49a.638.638 0 0 1 .913.015.669.669 0 0 1-.014.938c-.141.143-.987.848-3.741.848'/%3e%3cpath fill='%23292f33' d='M21 0c5.648 0 9.178 4.648 9.178 8.121s-.706 4.863-1.412 3.473l-1.412-2.778s-4.235 0-5.647-1.39c0 0 2.118 4.168-2.118 0 0 0 .706 2.779-3.53-.694 0 0-2.118 1.389-2.824 4.862-.196.964-1.412 0-1.412-3.473S14.646 0 21 0'/%3e%3cpath fill='%23662113' d='M17 14c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1s1 .45 1 1v1c0 .55-.45 1-1 1m8 0c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1s1 .45 1 1v1c0 .55-.45 1-1 1'/%3e%3cpath fill='%23c1694f' d='M21.75 16.75h-1.5a.75.75 0 1 1 0-1.5h1.5a.75.75 0 1 1 0 1.5'/%3e%3cg fill='%23e1e8ed'%3e%3cpath d='M33 35a1 1 0 0 1-1 1H22a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1z'/%3e%3cpath d='M20.24 22H3.759c-1.524 0-3.478.771-2.478 3.531l3.072 8.475C4.354 34.006 4.75 36 7 36h20l-4-11.24c-.438-1.322-1.235-2.76-2.76-2.76z'/%3e%3c/g%3e%3cpath fill='%2399aab5' d='M19.24 22H2.759c-1.524 0-3.478.771-2.478 3.531l3.072 8.475C3.354 34.006 3.75 36 6 36h20l-4-11.24c-.438-1.322-1.235-2.76-2.76-2.76z'/%3e%3cpath fill='%23e1e8ed' d='M14.019 29.283c.524 1.572.099 3.13-.949 3.479s-2.322-.641-2.846-2.213-.099-3.13.949-3.479 2.323.641 2.846 2.213zM19 24.75H3a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 0 1.5z'/%3e%3c/svg%3e"
              width="35"
              alt="ResumeNavBarImage"
              className="me-3"
            />
            {children}
          </a>
          {/* <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarHeader"
          aria-controls="navbarHeader"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
