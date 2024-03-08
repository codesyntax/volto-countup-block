import React from 'react';
import { SidebarPortal, BlockDataForm } from '@plone/volto/components';
import { useIntl } from 'react-intl';

import { CountUpBlockSchema } from './schema';
import { BlockViewComponent } from './View';

export const CountUpBlockEdit = (props) => {
  const { block, data, selected } = props;
  const handleChange = (id, value) => {
    props.onChangeBlock(block, {
      ...data,
      [id]: value,
    });
  };

  const intl = useIntl();

  const schema = CountUpBlockSchema(intl);

  return (
    <>
      <SidebarPortal selected={selected}>
        <BlockDataForm
          schema={schema}
          title={schema.title}
          formData={data}
          onChangeField={handleChange}
        />
      </SidebarPortal>
      <BlockViewComponent data={data} />
    </>
  );
};
