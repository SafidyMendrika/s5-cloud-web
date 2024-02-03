const Footer = () => {
  return (
    <footer className="py-4 w-100" style={{ background: "var(--bs-gray-800)" }}>
      <p className="text-white text-center fs-5 mb-0">
        <span>Gascar</span> &copy; {new Date().getFullYear()}. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
