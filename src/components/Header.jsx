export default function Header() {
    return (
        <>
            <header className="header-main">
                <h1 className="site-title">Peppino's Pizza</h1>
                <div id="nav">
                    <section className="nav-utils">
                        <li>Welcome, Guest</li>
                        <li>Sign In</li>
                        <div className="header-cart">CART</div>
                    </section>
                </div>
            </header>
        </>
    )
}