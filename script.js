$(function () {
  $.ajax({
    type: "GET",
    url: "https:localhost:5500/api/orders",
    success: function (orders) {
      $.each(orders, function (i, order) {
        $orders.append("<li>my order</li>");
      });
    },
  });
});
