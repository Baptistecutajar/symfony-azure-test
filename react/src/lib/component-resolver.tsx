import { useContentfulLiveUpdates } from '@contentful/live-preview/react';

import { componentMap } from './mappings';

export interface ComponentBaseProps {
  sys: { id: string };
  __typename: string;
  [k: string]: any;
}
interface Props {
  componentProps: ComponentBaseProps;
  /**
   * forces to do a graqhql request to get its content, instead
   * of expecting content is provided trough `props.componentProps`:
   */
  forceGql?: boolean;

  className?: string;
  inline?: boolean;
}

export const ComponentResolver = (props: Props) => {
  const updatedEntries = useContentfulLiveUpdates(props.componentProps);

  const typeName = props.componentProps.__typename as keyof typeof componentMap;
  if (!Object.hasOwn(componentMap, typeName)) {
    return <></>;
  }
  const Component = componentMap[typeName];
  // @ts-ignore
  return <Component {...updatedEntries} />;
};
