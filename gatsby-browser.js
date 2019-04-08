exports.onInitialClientRender = () => {
  if (!window.page) return;
  window.page.path = window.location.pathname;
};
