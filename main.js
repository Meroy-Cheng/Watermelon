// app.js

// 假設價格資料存儲在一個陣列中
let prices = [];

// 當表單提交時的事件處理函數
document.getElementById('priceForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 防止頁面重新加載

    // 獲取表單值
    const date = document.getElementById('date').value;
    const productName = document.getElementById('productName').value;
    const price = document.getElementById('price').value;

    // 將價格數據添加到陣列中
    prices.push({ date, productName, price });

    // 清空表單值
    document.getElementById('date').value = '';
    document.getElementById('productName').value = '';
    document.getElementById('price').value = '';

    // 更新表格或清單
    updateTable();
});

// 搜尋功能的事件處理函數
function search() {
    const searchTerm = document.getElementById('search').value;
    const filteredPrices = prices.filter(price => price.productName.toLowerCase().includes(searchTerm.toLowerCase()));

    updateTable(filteredPrices);
}

// 更新表格或清單的函數
function updateTable(data = prices) {
    const table = document.getElementById('priceTable');

    // 清空表格內容
    table.innerHTML = `
    <tr>
      <th>日期</th>
      <th>商品名稱</th>
      <th>商品價格</th>
    </tr>
  `;

    // 填充表格或清單
    data.forEach(price => {
        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${price.date}</td>
      <td>${price.productName}</td>
      <td>${price.price}</td>
    `;
        table.appendChild(row);
    });
}
