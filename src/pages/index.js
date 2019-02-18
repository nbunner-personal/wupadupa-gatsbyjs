import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
// import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>About Wupadupa</h1>
    <p>
      We are a group of musicans, artists and filmakers who put on events, often
      collaborating on projects.
    </p>

    <p>
      Past events have included the string thing, mail art, phone art, film
      nights, sing things and house gigs.
    </p>
    <h2>Wupadupa Update</h2>
    <p>
      Wupadupa as a collective is currently in hiatus with everyone busy with
      families and working on their own projects. We'll still post the odd
      update about those individual projects from time to time, but this site is
      now mainly an archive of some of the fun stuff we put on over the years.
    </p>
    <p>
      Some of the artists still release their music using the Wupadupa name as
      the name of their record label. Check them out on the{" "}
      <Link to="/artists/">artists page</Link>
    </p>
    <div class="news_item">
      <h3>New Weston Green album</h3>
      <p>Weston Green have finally released their new album, yay!</p>

      <iframe
        width="300"
        height="410"
        src="https://bandcamp.com/EmbeddedPlayer/v=2/album=615643579/size=grande3/bgcol=FFFFFF/linkcol=4285BB/"
        allowtransparency="true"
        frameborder="0"
        title="Weston Green on Bandcamp"
      >
        <a href="//westongreen.bandcamp.com/album/back-to-green">
          Back to Green by Weston Green
        </a>
      </iframe>
    </div>
    <div class="news_item">
      <h3>New Sugardrum video - Bubbleclouds</h3>
      <div className="iframe-container iframe-container-4x3">
        <iframe
          src="https://www.youtube.com/embed/ijo0I2xD9gM"
          frameborder="0"
          title="Sugardrum on youtube"
          allowfullscreen
        />
      </div>
    </div>

    <h2>Cake</h2>
    <p>Cake is a very important thing.</p>
    <p>
      We believe people should eat more cake so we usually provide free cake at
      our events, Yay!
    </p>
    <p>
      Many of our past events have raised money and awareness for charities,
      including Friends of the Earth, the Sudan Appeal and Amnesty
      International.
    </p>
  </Layout>
);

export default IndexPage;
