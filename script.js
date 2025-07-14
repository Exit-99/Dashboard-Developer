const ctx = document.getElementById("workChart").getContext("2d");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Lun", "Mar", "Mer", "Gio", "Ven"],
    datasets: [{
      label: "Ore Lavorate",
      data: [4, 6, 5, 7, 8],
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "#ff6384",
      borderWidth: 2,
    }],
  },
});
