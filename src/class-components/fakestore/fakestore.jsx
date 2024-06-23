import axios from "axios";
import React from "react";

export class Fakestore extends React.Component {

    constructor() {
        super();
        this.state = {
            categories: [],
            products: [],
            cartItems: [],
            cartCount: 0,
            cartTotal: 0,
            priceRange:1000
        }
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handlePriceRangeChange = this.handlePriceRangeChange.bind(this);
    }

    LoadCategories() {
        axios.get('http://fakestoreapi.com/products/categories')
            .then(response => {
                response.data.unshift('all');
                this.setState({
                    categories: response.data
                })
            })
    }

    LoadProducts(url) {
        axios.get(url)
            .then(response => {
                this.setState({
                    products: response.data
                })
            })
    }


    componentDidMount() {
        this.LoadCategories();
        this.LoadProducts('http://fakestoreapi.com/products');
    }

    handleCategoryChange(e) {
        if (e.target.value == "all") {
            this.LoadProducts(`http://fakestoreapi.com/products`);
        } else {
            this.LoadProducts(`http://fakestoreapi.com/products/category/${e.target.value}`);
        }
    }

    handleAddToCartClick(id) {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
                this.state.cartItems.push(res.data);
                this.setState({
                    cartCount: this.state.cartItems.length
                })
                alert(`${res.data.title}\n Added To Cart`);
            })
    }

    handleRemoveClick(item) {
        this.state.cartItems.splice(item, 1)
        this.setState({
            cartItems: [...this.state.cartItems],
            cartCount: this.state.cartItems.length
        })
    }

    calculateCartTotal() {
        let total = 0;
        this.state.cartItems.forEach(item => {
            total += item.price;
        })
        return total;
    }

    handlePriceRangeChange(e){
        
    }


    render() {
        const cartTotal = this.calculateCartTotal();
        return (
            <div className="">
                <header className="p-2 d-flex justify-content-between">
                    <button data-bs-target="#menu" data-bs-toggle="offcanvas" className="btn btn-secondary"><span className="bi bi-justify"></span></button>

                    <div className="offcanvas offcanvas-start" id="menu">
                        <div className="offcanvas-header">
                            <h2>Filter Products</h2>
                            <button className="btn btn-close" data-bs-dismiss="offcanvas"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div>
                                <label className="form-label fw-bold">Filter By Category</label>
                                <div>
                                    <ul className="list-unstyled">
                                        <li><input className="form-check-input" type="checkbox"/>Electronics</li>
                                        <li><input className="form-check-input" type="checkbox" />Jewelery</li>
                                        <li><input className="form-check-input" type="checkbox" />Men's Fashion</li>
                                        <li><input className="form-check-input" type="checkbox" />Women's Fashion</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <label className="form-lable fw-bold">Filter By Price</label>
                                <div>
                                    &#8377; 100<input onChange={this.handlePriceRangeChange} value={this.state.priceRange} type="range" min="100" max="1000" />&#8377; {this.state.priceRange}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h4">Fakestore.</div>
                    <div>
                        <span className="me-3">Home</span>
                        <span className="me-3">Electronics</span>
                        <span className="me-3">Jewelery</span>
                        <span className="me-3">Fashion</span>
                    </div>
                    <div>
                        <button data-bs-target="#cart" data-bs-toggle="modal" className="btn btn-warning bi bi-cart3 position-relative"><span className="badge bg-danger rounded-circle position-absolute">{this.state.cartCount}</span></button>
                        <div className="modal fade" id="cart">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h3>Your Cart Items</h3>
                                        <button className="btn btn-close" data-bs-dismiss="modal"></button>
                                    </div>
                                    <div className="modal-body">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Title</th>
                                                    <th>Price</th>
                                                    <th>Preview</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.cartItems.map(item =>

                                                        <tr key="{item.id}">
                                                            <td>{item.title}</td>
                                                            <td>{item.price}</td>
                                                            <td><img src={item.image} width="50" height="50" /></td>
                                                            <td>
                                                                <button onClick={() => this.handleRemoveClick(item)} className="bi bi-trash btn btn-success "></button>
                                                            </td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td colSpan="3" align="center"><span className="fw-bold">Total:{cartTotal.toFixed(2)}</span></td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <article className="bg-dark text-white p-2 text-center">
                    <span className="bi bi-lightning-fill text-warning"></span>
                    HAPPY HOLIDAY OFFERS
                    <span className="bi bi-lightning-fill text-warning"></span>
                </article>
                <section className="mt-3 row">
                    <nav className="col-2">
                        <div className="my-2">
                            <label className="form-label fw-bold">Select Category</label>
                            <div>
                                <select onChange={this.handleCategoryChange} className="form-select">
                                    {
                                        this.state.categories.map(category =>

                                            <option value={category} key={category}>{category.toUpperCase()}</option>
                                        )
                                    }
                                </select>
                            </div>
                        </div>
                    </nav>
                    <main className="col-10 d-flex flex-wrap overflow-auto" style={{ height: '650px' }} >
                        {
                            this.state.products.map(product =>
                                <div key={product.id} className="card p-2 m-2" style={{ width: '250px' }}>
                                    <img src={product.image} className="card-img-top" height="150px" />
                                    <div className="card-header" style={{ height: '130px' }}>
                                        {product.title}
                                    </div>
                                    <div className="card-body" style={{ height: '150px' }}>
                                        <dl>
                                            <dt>Price</dt>
                                            <dd>{product.price}</dd>
                                            <dt>Rating</dt>
                                            <dd>{product.rating.rate} <span className="bi bi-star-fill text-success"></span></dd>
                                        </dl>
                                    </div>
                                    <div className="card-footer">
                                        <button onClick={() => this.handleAddToCartClick(product.id)} className="btn btn-dark w-100 bi bi-cart4"> Add to Cart</button>
                                    </div>
                                </div>
                            )
                        }
                    </main>
                </section>

            </div>
        )
    }
}