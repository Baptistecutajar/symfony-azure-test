'use client';
import { ContentfulLivePreview } from '@contentful/live-preview';
import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { useMemo } from 'react';

import { DemoFieldsFragment, DemoPersonsFieldsFragment } from './__generated/ctf-demo.generated';
import { CtfRichText } from '../ctf-rich-text/ctf-rich-text';

import { UiCtfDemo } from '@fui/components/organisms/ctf/UiCtfDemo';

export const CtfDemo = (props: {
  componentDemo: DemoFieldsFragment;
  topicPersonCollection?: DemoPersonsFieldsFragment | null;
}) => {
  const { title, sys, wysiwyg } = useContentfulLiveUpdates(props.componentDemo);
  const persons = useMemo(
    () =>
      props.topicPersonCollection?.items.map(p => ({ name: p?.name || '', id: p?.sys.id || '' })),
    [props.topicPersonCollection],
  );
  return (
    <UiCtfDemo
      title={title || ''}
      content={<CtfRichText {...wysiwyg} />}
      persons={persons || []}
      additionnalAttributes={ContentfulLivePreview.getProps({ entryId: sys.id, fieldId: 'title' })}
      link="/dashboard"
    />
  );
};
