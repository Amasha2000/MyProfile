function OrderDetailDTO(orderId,itemCode,itemName,quantity,unitPrice,total){
    var __orderId=orderId;
    var __itemCode=itemCode;
    var __itemName=itemName;
    var __quantity=quantity;
    var __unitPrice=unitPrice;
    var __total=total;

    this.setOrderId=function(orderID){
        __orderId=orderID;
    }

    this.getOrderId=function(){
        return __orderId;
    }

    this.setCode=function(code){
        __itemCode=code;
    }

    this.getCode=function(){
        return __itemCode;
    }

    this.setName=function(name){
        __itemName=name;   
    }

    this.getName=function(){
        return __itemName;
    }

    this.setOrderQuantity=function(orderQty){
        __quantity=orderQty;
    }

    this.getOrderQuantity=function(){
        return __quantity;
    }

    this.setUnitPrice=function(unitPrice){
        __unitPrice=unitPrice;
    }

    this.getUnitPrice=function(){
        return __unitPrice;
    }

    this.setTotal=function(total){
        __total=total;
    }

    this.getTotal=function(){
        return __total;
    }
}