import path from "path";
import React from "react";
import Helmet from "react-helmet";
import SchemaOrg from "./SchemaOrg";

const seo = {
  title: "Natur i Norge",
  description:
    "Natur i Norge (NiN) er et type- og beskrivelsessystem for all variasjon i naturen.",
  organization: "Artsdatabanken",
  author: "Bjorn Reppen",
  image: "/logo.jpg",
  social: { twitter: "https://twitter.com/Artsdatabanken" },
  canonicalUrl: "https://maps.artsdatabanken.no"
};

// chwbwtbenlobh

const Seo = ({ pageMeta }) => {
  const title = pageMeta.title || seo.title;
  const description = pageMeta.description || seo.description;
  const image = pageMeta.image || seo.image;
  const url = pageMeta.slug
    ? `${seo.canonicalUrl}${path.sep}${pageMeta.slug}`
    : seo.canonicalUrl;
  const datePublished = pageMeta.datePublished;

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
