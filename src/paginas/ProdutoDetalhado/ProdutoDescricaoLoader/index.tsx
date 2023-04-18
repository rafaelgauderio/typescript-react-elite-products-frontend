import ContentLoader from 'react-content-loader';

const ProdutoDescricaoLoader = () => (
    <ContentLoader
    speed={1.3}
        viewBox="0 0 300 300"
        height={300}
        width={320}
        backgroundColor="#f5f5f5"
        foregroundColor="#949494"
    >
        <rect x="0" y="0" rx="0" ry="0" width="229" height="20" />
        <rect x="0" y="40" rx="0" ry="0" width="292" height="20" />
        <rect x="0" y="80" rx="0" ry="0" width="292" height="20" />
        <rect x="0" y="120" rx="0" ry="0" width="292" height="20" />

        <rect x="0" y="200" rx="0" ry="0" width="229" height="20" />
        <rect x="0" y="240" rx="0" ry="0" width="292" height="20" />
        <rect x="0" y="280" rx="0" ry="0" width="292" height="20" />

    </ContentLoader>
);

ProdutoDescricaoLoader.metadata = {
    name: 'Rafael de Luca',
    github: 'rafaelgauderio',
    description: 'Informacao detalhada do produto'
};

export default ProdutoDescricaoLoader;