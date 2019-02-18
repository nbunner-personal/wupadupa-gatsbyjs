import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";
import { Link } from "gatsby";
import SEO from "../components/seo";

export default ({ data }) => {
  const post = data.markdownRemark;
  let book = post.frontmatter.book;
  let book_end = 0;
  switch (post.frontmatter.book) {
    case 1:
      book_end = 25;
      break;

    case 2:
      book_end = 51;
      break;

    case 3:
      book_end = 75;
      break;

    case 4:
      book_end = 100;
      break;

    case 5:
      book_end = 135;
      break;
  }

  let nextRef = post.frontmatter.ref + 1;
  if (post.frontmatter.ref === book_end) {
    book = post.frontmatter.book + 1;
  }

  if (post.frontmatter.ref === 135) {
    nextRef = 1;
    book = 1;
  }

  // define the next link to go to
  const nextUrl = "./doodlebook/book-" + book + "/" + nextRef;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        keywords={[`wupadupa`, `doodlebook`, `music`]}
        description={post.frontmatter.description}
      />
      <article className="post">
        <header className="article-header">
          <h1>{post.frontmatter.title}</h1>
        </header>
        <section className="entry-content" itemprop="articlebody">
          <p>
            Click on the doodle to see the next one from this book, or{" "}
            <Link to="/doodlebook/">go back</Link> to choose another book.
          </p>
          <div className="doodle-image">
            <Link to={nextUrl}>
              <Img
                fluid={post.frontmatter.doodle_image.childImageSharp.fluid}
              />
            </Link>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        book
        ref
        doodle_image {
          childImageSharp {
            fluid(maxWidth: 400, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
