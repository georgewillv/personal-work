const Hash = "#";
const Footer = ({ Name }) => (
  <footer class="text-body-secondary py-5">
    <div class="container">
      <p class="float-end mb-1">
        <a href={Hash}>Back to top</a>
      </p>
      <p class="mb-1">
        Copyright &copy; {new Date().getFullYear()} {Name}. All Rights Reserved.
      </p>
      <p>
        This website was made using Bootstrap, React, React Router and some MUI
        components. It is deployed on Cloud Provider.
      </p>
    </div>
  </footer>
);

export default Footer;
