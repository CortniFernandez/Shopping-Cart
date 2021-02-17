$( document ).ready(function() {
    
  var updateSubtotal = $(document).on('keyup', '.quantity', function(e) {
    if (e.keyCode == 13) {
        var quantity = ($(this).val());
        var price = ($(this).parent().prev().text().replace("$",""));
        var subtotal = quantity * price;
        $(this).parent().next().text("$" + subtotal);
        updateCartTotal();
    };
  })

  var updateCartTotal = function() {
    var cartTotal = 0;
    $(".item-total").each(function(index) {
      cartTotal += Number($(this).text().replace("$",""));
      $(".cart-total").text("$" + cartTotal);
    });
  };

  $(document).on('keyup', function(e) {
    if (e.keyCode = 13) {
      updateCartTotal();
    };
  });

  $(document).on('click', '.remove', function() {
    $(this).parents('.row').remove();
    updateCartTotal();
  });

});