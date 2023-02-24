import { Html, Head, Main, NextScript } from "next/document";
import { NextSeo } from "next-seo";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
        />
        <NextSeo
          title="Eduardo-Hernandez | Porfolio"
          description="this is my porfolio page "
          openGraph={{
            title: "Título de la página | Nombre del sitio",
            description:
              "Descripción corta de la página que aparece en los resultados de búsqueda.",
            type: "website",
            url: "https://www.example.com/pagina",
            site_name: "Nombre del sitio",
            images: [
              {
                url: "https://www.example.com/imagen.jpg",
                width: 800,
                height: 600,
                alt: "Descripción de la imagen",
              },
            ],
          }}
          twitter={{
            handle: "@manejodelperfil",
            site: "@manejodelperfil",
            cardType: "summary_large_image",
          }}
        />

        <title>My porfolio</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
