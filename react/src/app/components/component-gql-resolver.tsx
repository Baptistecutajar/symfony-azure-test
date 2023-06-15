import { componentMap } from '@/src/lib/mappings';
import { componentQueryMap } from '@/src/lib/mappings.query';

import { ComponentClient } from './component-client';

interface ComponentGqlResolverProps {
  __typename: string;
  sys: {
    id: string;
  };
  preview: boolean;
  locale: string;
}

const fetchComponentData = async (component: ComponentGqlResolverProps) => {
  const locale = component.locale;
  const preview = component.preview;
  const typeName = component?.__typename as keyof typeof componentQueryMap;
  if (typeName && Object.hasOwn(componentQueryMap, typeName)) {
    const query = componentQueryMap[typeName];
    const data = await query.fetcher({ id: component?.sys.id, locale, preview })();
    return data;
  }
};
export const ComponentGqlResolver = async (props: ComponentGqlResolverProps) => {
  const data = await fetchComponentData(props);

  const typeName = props?.__typename as keyof typeof componentMap;

  if (typeName) {
    return (
      <>
        <ComponentClient __typename={typeName} componentProps={data} />
      </>
    );
  }

  return <div>Typename not found</div>;
};
