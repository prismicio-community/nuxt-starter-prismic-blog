import type { HTMLRichTextMapSerializer } from '@prismicio/client';

const serializer: HTMLRichTextMapSerializer = {
  heading1: ({ children }) =>
    /* html */ `<h2 class="font-sans font-semibold tracking-tighter text-slate-800 text-3xl mb-7 mt-12 first:mt-0 last:mb-0">${children}</h2>`,
  heading2: ({ children }) =>
    /* html */ `<h3 class="font-sans font-semibold tracking-tighter text-slate-800 text-2xl mb-7 last:mb-0">${children}</h3>`,
  heading3: ({ children }) =>
    /* html */ `<h4 class="font-sans font-semibold tracking-tighter text-slate-800 text-xl mb-7 last:mb-0">${children}</h4>`,
  paragraph: ({ children }) =>
    /* html */ `<p class="mb-7 last:mb-0">${children}</p>`,
  oList: ({ children }) =>
    /* html */ `<ol class="mb-7 pl-4 last:mb-0 md:pl-6">${children}</ol>`,
  oListItem: ({ children }) =>
    /* html */ `<li class="mb-1 list-decimal pl-1 last:mb-0 md:pl-2">${children}</li>`,
  list: ({ children }) =>
    /* html */ `<ul class="mb-7 pl-4 last:mb-0 md:pl-6">${children}</ul>`,
  listItem: ({ children }) =>
    /* html */ `<li class="mb-1 list-disc pl-1 last:mb-0 md:pl-2">${children}</li>`,
  preformatted: ({ children }) =>
    /* html */ `<pre class="mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg"><code>${children}</code></pre>`,
  strong: ({ children }) =>
    /* html */ `<strong class="font-semibold">${children}</strong>`,
  hyperlink: ({ children, node }) => {
    const target = node.data.target === '_blank' ? ' target="_blank" rel="noopener noreferrer"' : '';
    return /* html */`<a href="${node.data.url}" class="underline decoration-1 underline-offset-2"${target}>${children}</a>`;
  }
}

export default serializer;