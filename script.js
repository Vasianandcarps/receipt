function order() {
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
    case "Capuchinoe":
      nc = "Capuchinoe";
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
