import React from 'react'
import { DocSearch } from '@docsearch/react';
import '@docsearch/css';

const Doc = () => {
  return (
    <div className="relative w-full md:w-32 mr-2 docs-search">
      <DocSearch
        appId="VT0SRL8DNS"
        indexName="data_convo"
        apiKey="c227cefd16ad744177b02419fc83a21b"
      />
    </div>
  )
}

export default Doc
