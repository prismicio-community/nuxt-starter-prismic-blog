export default async ({ redirect }) => {
  window.addEventListener(
    "click",
    event => {
      // If the clicked element doesn't have the right selector, bail
      if (!event.target.matches("a[data-nuxt-link]")) return;

      // Don't follow the link
      event.preventDefault();

      // Push link destination to router
      redirect(event.target.pathname);
    },
    false
  );
};
