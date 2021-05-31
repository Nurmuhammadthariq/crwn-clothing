import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'

import CollectionPreview from '../collection-preview/collection-preview'

import { CollectionsOverviewContainer } from './collection-overview.styles'

const CollectionOverview = ({ collections }) => {
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionprops }) => (
        <CollectionPreview key={id} {...otherCollectionprops} />
      ))}
    </CollectionsOverviewContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
})

export default connect(mapStateToProps)(CollectionOverview)
