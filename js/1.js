var url = "https://fakestoreapi.com/products";
async function getApi(){
    var txt='';
    var rp = await fetch(url);
    var rs = await rp.json();
    console.log(rs);
    rs.forEach((e)=>{
        txt +=`
            <div id="box">
                <div id="image">
                    <img src="${e['image']}" alt="">
                </div>
                <div id="footer">
                <div id="price">
                    Price:
                    ${e['price']}
                </div>
                <div id="title">
                    Name:
                    ${e['title']}
                </div>
                <div id="category">
                    Category:
                    ${e['category']}
                </div>
                </div>
            </div>
        `;
    });
    document.getElementById("demo").innerHTML = txt;
}
getApi();