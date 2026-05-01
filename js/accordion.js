/**
 * accordion.js — Shared accordion logic
 *
 * Only one accordion open at a time per .acc-list group.
 * The first item in each group is opened by default.
 */

(function () {
  document.querySelectorAll('.acc-list').forEach(function (group) {
    var items = group.querySelectorAll('.acc');

    items.forEach(function (acc) {
      var head = acc.querySelector('.acc-head');

      head.addEventListener('click', function () {
        var isOpen = acc.classList.contains('open');

        // Close all items in this group
        items.forEach(function (item) {
          item.classList.remove('open');
        });

        // Re-open clicked item if it was closed
        if (!isOpen) {
          acc.classList.add('open');
        }
      });
    });

    // Open the first item by default
    if (items.length > 0) {
      items[0].classList.add('open');
    }
  });
})();
