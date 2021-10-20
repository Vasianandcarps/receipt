function order() {
  n = prompt("how many drinks do you want?");
  for (let i = 0; i < n; i++) {
    let order = prompt("Input your order");
    switch (order) {
      case "Latte":
        nl = "Latte";
        document.write(nl + "<br>" + 26 + "grn");
        break;
      case "Americano":
        na = "Americano";
        document.write(na + "<br>" + 20 + "grn");
        break;
      case "Capuchino":
        nc = "Capuchino";
        document.write(nc + "<br>" + 23 + "grn");
        break;
      case "Chocolate":
        nch = "Chocolate";
        document.write(nch + "<br>" + 27 + "grn");
        break;
      default:
        alert("Try again");
    }
  }
}

