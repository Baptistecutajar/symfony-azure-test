'use client';

import { ContentfulLivePreview } from '@contentful/live-preview';

import { componentMap } from '@/src/lib/mappings';

export const ComponentClient = ({
  __typename,
  componentProps,
}: {
  __typename: keyof typeof componentMap;
  componentProps: any;
}) => {
  ContentfulLivePreview.init({ locale: 'en-US' }); // Should be probably move somewhere else

  if (__typename && Object.hasOwn(componentMap, __typename)) {
    const Component = componentMap[__typename];
    if (Component) {
      return <Component {...componentProps} />;
    }
  }
  return <div>Component {__typename} not found</div>;
};
