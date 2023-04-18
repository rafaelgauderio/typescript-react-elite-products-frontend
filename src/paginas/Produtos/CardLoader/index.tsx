import ContentLoader from 'react-content-loader';
import './styles.css';

const ProdutoImageLoader = () => (
    <div className="card-loader-container">
        <ContentLoader
            speed={1.3}
            width={360}
            height={360}
            viewBox="0 0 360 360"
            backgroundColor="#f5f5f5"
            foregroundColor="#949494"
        >
            <rect x="0" y="0" rx="2" ry="2" width="340" height="340" />
        </ContentLoader>
    </div>
)


ProdutoImageLoader.metadata = {
    name: 'Hassan Tijani.A',
    github: 'surepeps',
    description: 'Image Grid with Pagination',
    filename: 'ImageGrid',
}

export default ProdutoImageLoader;