function order() {
  n = prompt("how many drinks do you want?");
  for (let i = 0; i < n; i++) {
    let order = prompt("Input your order");
    switch (order) {
      case "Latte":
        // nl = "Latte";
        document.write("<br>" + 26 + "grn");
        break;
      case "Americano":
        // na = "Americano";
        document.write("<br>" + 20 + "grn");
        break;
      case "Capuchino":
        // nc = "Capuchino";
        document.write("<br>" + 23 + "grn");
        break;
      case "Chocolate":
        // nch = "Chocolate";
        document.write("<br>" + 27 + "grn");
        break;
      default:
        alert("Try again");
    }
  }
}

