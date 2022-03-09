//set the today date
document.getElementById('date').valueAsDate = new Date();

//populate customer drop down list
function populateCustomerDropDown() {
    var select = document.getElementById('cusID');
    $('#cusID').empty();
    var customerOptions = [];
    customerOptions[0] = 'Choose...';

    for (var i = 0; i < customerArray.length; i++) {
      customerOptions[i + 1] = customerArray[i].getCustomerId();
    }

    for (var i = 0; i < customerOptions.length; i++) {
      var opt = customerOptions[i];
      var el = document.createElement('option');
      el.textContent = opt;
      el.value = opt;
      select.appendChild(el);
    }
  }


//populate item drop down list
  function populateItemDropDown() {
    var select = document.getElementById('ItemCode');
    $('#ItemCode').empty();
    var itemOptions = [];
    itemOptions[0] = 'Choose...';

    for (var i = 0; i < itemArray.length; i++) {
      itemOptions[i + 1] = itemArray[i].getItemCode();
    }

    for (var i = 0; i < itemOptions.length; i++) {
      var opt = itemOptions[i];
      var el = document.createElement('option');
      el.textContent = opt;
      el.value = opt;
      select.appendChild(el);
    }
  }

//load selected customer details
$('#cusID').on('change', function () {
    getSelectedCustomer();
  });

  function getSelectedCustomer() {
    let response = searchCustomer($('#cusID').val());
    $('#customer').val(response.getCustomerId());
    $('#name').val(response.getCustomerName());
    $('#address').val(response.getCustomerAddress());
    $('#telNum').val(response.getCustomerTeleNumber());
  }
  
//load selected item details
$('#ItemCode').on('change', function () {
    getSelectedItem();
    checkSufficientQuantity();
  });


  function getSelectedItem() {
    let response = searchItem($('#ItemCode').val());
    $('#item').val(response.getItemCode());
    $('#itemName').val(response.getItemName());
    $('#price').val(response.getPrice());
    $('#quantityOnHand').val(response.getQuantity());
  }

//set order ID automatically
$("#orderID").val("O00-001");

function checkSufficientQuantity(){;
    $("#quantity").on('keyup',function(){
        if($("#quantityOnHand").val()>=$("#quantity").val() && regExItemQuantity.test($("#quantity").val())){
            $('#quantity').css('border', '3px solid green');
            $("#orderQuantity-error").text(''); 
            $("#btnAddItem").attr('disabled',false);
        }else{
            $('#quantity').css('border', '3px solid red');
            $("#orderQuantity-error").text("Please enter quantity lower than "+$("#quantityOnHand").val()+" or check Qunatity On Hand is sufficient");
            $("#btnAddItem").attr('disabled',true);
        }
    });
 }

 


 $("#btnAddItem").on("click",function(){

     var sumOfTotal=0;

     let code=$("#item").val();
     let name=$("#itemName").val();
     let unitPrice=$("#price").val();
     let qty=$("#quantity").val();
     let totalPrice=(qty*unitPrice).toFixed(2);
     
     let searchResponse=searchCart(code);
     let searchItemResponse=searchItem(code);
     
     if(searchResponse){

        let totalQty=+searchResponse.getQty() + +qty;
        let total=(totalQty*unitPrice).toFixed(2);

         searchResponse.setItemID(code);
         searchResponse.setItem(name);
         searchResponse.setItemUnitPrice(unitPrice);
         searchResponse.setQty(totalQty);
         searchResponse.setTotalPrice(total);
         loadCartDetailsToTable()

         searchItemResponse.setQuantity(+searchItemResponse.getQuantity() - +qty);
         loadItemDetailsToTable();
         getSelectedItem();

         $("#quantity").val("");


     }else{
         var cart=new CartTM(code,name,unitPrice,qty,totalPrice);
         cartArray.push(cart);
         loadCartDetailsToTable();

         searchItemResponse.setQuantity(+searchItemResponse.getQuantity() - +qty);
         loadItemDetailsToTable();
         getSelectedItem();

         $("#quantity").val("");

     }

     for(var i=0;i<cartArray.length;i++){
      sumOfTotal=(+sumOfTotal + +cartArray[i].getTotalPrice()).toFixed(2);
    }
    $("#total").text(sumOfTotal);
    $("#sub-total").text(sumOfTotal);
 }); 

 
    $("#cash").on('keyup',function(){
      $("#balance").val(($("#cash").val())-($("#sub-total").text())); 
      $('#cash').css(
        'border',
        'solid 2px #ced4da'
    );
    $("#credit-error").text('');  
 });

 $("#discount").on('keyup',function(){
   let discount=$("#discount").val();
   let price=+$("#sub-total").text() - +$("#sub-total").text()*(discount/100);
   $("#sub-total").text(price);
   $("#balance").val(($("#cash").val())-($("#sub-total").text()));
 });

  $("#btn-purchase").on("click",function(){
     if($("#sub-total").text()>$("#cash").val()){
      $('#cash').css('border', '3px solid red');
      $("#credit-error").text('Insufficient Cerdit'); 
      alert("Insufficient Credit....Check the cash");
     }else{
      $('#cash').css(
        'border',
        'solid 2px #ced4da'
    );
    $("#credit-error").text('');
     }
  });

 function loadCartDetailsToTable() {
    $('#cart tbody').empty();
    for (var i of cartArray) {
        $('#cart tbody').append(
            `<tr><td>${i.getItemID()}</td><td>${i.getItem()}</td><td>${i.getItemUnitPrice()}</td><td>${i.getQty()}</td><td>${i.getTotalPrice()}</td></tr>`
        );
    }
}

function searchCart(id) {
    for (let i = 0; i < cartArray.length; i++) {
        if (cartArray[i].getItemID() == id) {
            return cartArray[i];
        }
    }
}





