import { useEffect, useState } from "react"

export function XmlhttpBinding() {

    const [product, setProduct] = useState({ title: '', rating: { rate: 0, rating: 0, reviews: 0 }, price: 0, offers: [], image: "" });

    function LoadProduct() {
        var http = new XMLHttpRequest();
        http.open("get", "product.json", true)
        http.send();

        http.onreadystatechange = function () {
            if (http.readyState === 4) {
                setProduct(JSON.parse(http.responseText));
            }
        }
    }

    useEffect(() => {
        LoadProduct();
    }, []);

    return (
        <div>
            <div className="mt-4 row">
                <div className="col-3">
                    <img src={product.image} width="100%" />
                </div>
                <div className="col-9">
                    <div className="h3">{product.title}</div>
                    <div className="">
                        <span className="badge bg-success text-white p-2 ">{product.rating.rate}</span>
                        <span className="text-secondary ms-3 fw-bold ">{product.rating.rating} rating & <span className="text-secondary">{product.rating.reviews}</span></span>
                    </div>
                    <div className="h2 mt-4">{product.price.toLocaleString('en-in', { style: 'currency', currency: 'INR' })}</div>
                    <div>
                        <div className="h5 mt-4">Available offers</div>
                        <ul className="list-unstyled ">
                            {
                                product.offers.map(offer => <li key={offer} className="bi bi-tag-fill text-success mt-2"><span className="text-secondary ms-2 p-2">{offer}</span></li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}