async function submitOrder(user) {
    try{
      let shoppingCart, zipCode, shippingRate, orderSuccessful;
      
      shoppingCart = await OrderAPI.getShoppingCartAsync(user)
      
      let profile = await CustomerAPI.getProfileAsync(user)
      zipCode = profile.zipCode;
    
      // Calculate the shipping fees
      shippingRate = calculateShipping(shoppingCart, zipCode);
    
      // Submit the order
      orderSuccessful = await OrderAPI.placeOrderAsync(shoppingCart, shippingRate)
    
      console.log(`Your order ${orderSuccessful? "was" : "was NOT"} placed successfully`);
    }catch(err){
      console.log(err)
    }
    
  }