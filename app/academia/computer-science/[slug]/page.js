import getPostMetadata from '@/components/getPostMetadata';
import MarkdownPage from '@/components/MarkdownPage';

export const generateStaticParams = async () => {
  const posts = getPostMetadata('docs');
  return posts.map(post => ({
    slug: post.slug,
  }));
};

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params?.slug ? ' ⋅ ' + params?.slug : '';
  return {
    title: `Wonj ⋅ Computer Science${id.replaceAll('_', ' ')}`,
  };
}

const PostPage = props => {
  const slug = props.params.slug;
  const folder = 'docs';
  const backLink = '/academia/computer-science/';
  const titleColor = 'purple';

  return (
    <MarkdownPage
      folder={folder}
      slug={slug}
      backLink={backLink}
      titleColor={titleColor}
    />
  );
};

export default PostPage;
