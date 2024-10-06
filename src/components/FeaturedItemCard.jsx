export default function FeaturedItemCard({ data }) {
    return (
        <div className="featured-item-card">
            <a className="item-link" onClick={() => alert("pizza")}>
                <div className="card-inner">
                    Featured Item {data}
                    Pizza 🍕
                </div>
            </a>
        </div>
    )
}