var products = [
    {
        name: "Pepsi 600 ml",
        price: 17,
        expirationDate: {
          year: 2022,
          month: "February",
          day: 28
        },
        Brand: "Pepsi"
      }, 
      {
        name: "Coca Cola 600 ml",
        price: 18,
        expirationDate: {
          year: 2022,
          month: "March",
          day: 20
        },
        Brand: "Coca Cola"
        },
        {
            name: "Big Cola 600 ml",
            price: 14,
            expirationDate: {
              year: 2022,
              month: "April",
              day: 22
            },
            Brand: "Big Cola"
        }, 
        {
            name: "Red Cola 600ml",
            price: 12,
            expirationDate: {
              year: 2022,
              month: "August",
              day: 30
            },
            Brand: "Red Cola"
        }
      ]
    
    var table = document.getElementsByTagName("table")[0];
    for (var i = 0; i < products.length; i++) {
      var templ = document.getElementById("tbodytempl").content.cloneNode(true);
      var tdnumber = templ.querySelector("span[name='tbodynumber']");
      var tdname = templ.querySelector("span[name='tbodyname']");
      var tdprice = templ.querySelector("span[name='tbodyprice']");
      var tdbrand = templ.querySelector("span[name='tbodybrand']");
    
      tdnumber.innerText = i + 1;
      tdname.innerText = products[i].Brand + " " + products[i].name;
      tdprice.innerText = products[i].price;
      tdbrand.innerText = products[i].Brand;
    
      table.append(templ);
    }