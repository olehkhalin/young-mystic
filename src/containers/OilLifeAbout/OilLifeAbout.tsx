import React from 'react';

import { useOilLifeAboutPagesQuery } from '@graphqlBlog';
import { ImageTextBig } from '@components/common/ImageTextBig';

import s from './OilLifeAbout.module.sass';

type OilLifeProps = {
  type: 'oil-life' | 'about'
  isFeatured?: boolean
};

export const OilLifeAbout: React.FC<OilLifeProps> = ({
  type,
  isFeatured,
}) => {
  const filter: string[] = [`tag:${type === 'oil-life' ? 'secondary-oil-life' : 'secondary-about-me'}`];
  if (isFeatured) {
    filter.push('featured:true');
  }

  const { data, loading, error } = useOilLifeAboutPagesQuery({
    variables: {
      filter: filter.join('+'),
    },
    context: {
      ghost: true,
    },
  });
  if (loading) {
    return <>Loading...</>;
  }
  if (error) {
    throw error;
  }

  return (
    <div className={s.root}>
      {data?.posts?.edges?.map((post) => post?.node && (
        <ImageTextBig
          key={post.node.id}
          className={s.blockImage}
          image={post.node.featureImage}
          subHeader={post.node.tags?.filter((tag) => tag?.visibility === 'internal')[0]?.name?.substring(1)}
          title={post.node.title}
          description={post.node.excerpt}
          button={{
            link: `/${type === 'oil-life' ? 'oil-life' : 'about'}/${post.node.slug}`,
            label: 'Узнать подробнее',
          }}
        />
      ))}
    </div>
  );
};