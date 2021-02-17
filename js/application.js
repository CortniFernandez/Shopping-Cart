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

  var addItem = function() {
    var name = $(".new-item").val();
    var price = $(".new-item-price").val();
    $(".item-list").append('<div class="row item-row"> \
    <div class="item-name col-xs-4"> \ '
    + name + '\
    </div> \
    <div class="item-price col-xs-2"> \ '
    + "$" + price + '\
    </div> \
    <div class="item-qty col-xs-2"> \
      <input class="quantity" type="number"> \
    </div> \
    <div class="item-total col-xs-2"></div> \
    <div class="item-remove col-xs-2"> \
      <button class="remove">Remove</button> \
    </div> \
  </div>');
  }

  $(document).on('click', '.add', function() {
    addItem();
    $(".new-item").val("");
    $(".new-item-price").val("");
  })

});