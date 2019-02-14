import path from "path";
import React from "react";
import Helmet from "react-helmet";
import SchemaOrg from "./SchemaOrg";

const seo = {
  title: "Natur i Norge",
  description:
    "Natur i Norge. Informasjon om alle naturtyper, fra de store landskapene og ned til det minste livsmiljø.",
  organization: "Artsdatabanken",
  author: "Bjørn Reppen",
  image: "/Datakilde/Artsdatabanken/logo.png",
  social: { twitter: "https://twitter.com/Artsdatabanken" },
  canonicalUrl: "https://maps.artsdatabanken.no"
};

const Seo = ({ pageMeta }) => {
  const title =
    (pageMeta.tittel.nb || seo.title) + ": Åpne data fra Artsdatabanken";
  const description = pageMeta.ingress || seo.description;
  const image = pageMeta.foto.forside.url || seo.image;
  const url = pageMeta.slug
    ? `${seo.canonicalUrl}${path.sep}${pageMeta.slug}`
    : seo.canonicalUrl;
  const datePublished = new Date();

  return (
    <React.Fragment>
      <Helmet>
        {/* General tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="fb:app_id" content={seo.social.fbAppID} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={seo.social.twitter} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta
          name="google-site-verification"
          content="LQK4-BdNNG80eMK-Ks5AolSmAB_Q4uxDt6cwTEL3DVM"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
        />
      </Helmet>
      <SchemaOrg
        url={url}
        title={title}
        image={image}
        description={description}
        datePublished={datePublished}
        canonicalUrl={seo.canonicalUrl}
        author={seo.author}
        organization={seo.organization}
        defaultTitle={seo.title}
      />
    </React.Fragment>
  );
};

export default Seo;
