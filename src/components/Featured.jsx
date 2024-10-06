import FeaturedGrid from "./FeaturedGrid"

export default function Featured() {
    return (
        <div style={{ border: '1px solid black' }}>
            <h1>Featured</h1>
            <div class="featured-container">
                <FeaturedGrid />
            </div>
        </div>
    )
}