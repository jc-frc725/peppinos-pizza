import FeaturedItemCard from "./FeaturedItemCard"

export default function FeaturedGrid() {
    return (
        <>
            <div className="featured-grid">
                <FeaturedItemCard data={1} />
                <FeaturedItemCard data={2} />
                <FeaturedItemCard data={3} />
                <FeaturedItemCard data={4} />
            </div>
        </>
    )
}