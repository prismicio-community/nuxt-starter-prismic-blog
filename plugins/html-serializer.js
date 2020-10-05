/**
 * To learn more about HTML Serializer check out the Prismic documentation
 * https://prismic.io/docs/vuejs/beyond-the-api/html-serializer
 */

import linkResolver from "./link-resolver";
import prismicDOM from "prismic-dom";

const Elements = prismicDOM.RichText.Elements;

export default function(type, element, content, children) {
  // Generate links to Prismic Documents as <router-link> components
  // Present by default, it is recommended to keep this
  if (type === Elements.hyperlink) {
    let result = "";
    const url = prismicDOM.Link.url(element.data, linkResolver);

    if (element.data.link_type === "Document") {
      result = `<a href="${url}" data-nuxt-link>${content}</a>`;
    } else {
      const target = element.data.target
        ? `target="'${element.data.target}'" rel="noopener"`
        : "";
      result = `<a href="${url}" ${target}>${content}</a>`;
    }
    return result;
  }

  // If the image is also a link to a Prismic Document, it will return a <router-link> component
  // Present by default, it is recommended to keep this
  if (type === Elements.image) {
    let result = `<img src="${element.url}" alt="${element.alt ||
      ""}" copyright="${element.copyright || ""}">`;

    if (element.linkTo) {
      const url = prismicDOM.Link.url(element.linkTo, linkResolver);

      if (element.data.link_type === "Document") {
        result = `<a href="${url}" data-nuxt-link>${result}</a>`;
      } else {
        const target = element.data.target
          ? `target="'${element.data.target}'" rel="noopener"`
          : "";
        result = `<a href="${url}" ${target}>${result}</a>`;
      }
    }
    const wrapperClassList = [element.label || "", "block-img"];
    result = `<p class="${wrapperClassList.join(" ")}">${result}</p>`;
    return result;
  }

  if (type === Elements.heading2) {
    var id = element.text.replace(/\W+/g, "-").toLowerCase();
    return '<h2 id="' + id + '">' + children.join("") + "</h2>";
  }

  if (type === Elements.heading3) {
    var id = element.text.replace(/\W+/g, "-").toLowerCase();
    return '<h3 id="' + id + '">' + children.join("") + "</h3>";
  }

  // Return null to stick with the default behavior for everything else
  return null;
}
