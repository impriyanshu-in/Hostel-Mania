import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 pd-4 text-center">
      Copyright &copy; {new Date().getFullYear()} <a href="https://github.com/anujpingua">Anuj Pingua</a>
    </footer>
  );
}
