//converter btn title
const popView = function (id, cont) {
  $(`#${id}`).popover({
    html: true,
    title: "Dumper attributes",
    content: cont,
    placement: "right",
  });
};

module.exports = popView;
