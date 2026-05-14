// view.js
const View = {
  render(items) {
    const $list = $('#ol-item-list');
    $list.empty(); // Limpia la lista
    items.forEach((item) => {
      $list.append(`<li>${item}</li>`);
    });
  },
};

