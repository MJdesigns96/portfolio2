import Header from "./components/Header";
import Hero from "./components/Hero";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous">
      </link>
      </head>
      <body className="container">
        <Header />
        <hr></hr>
        {children}
      </body>
    </html>
  );
}
