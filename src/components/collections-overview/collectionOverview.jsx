import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'

import CollectionPreview from '../collection-preview/collection-preview'

import './collection-overview.styles.scss'

const CollectionOverview = ({ collections }) => {
  console.log(collections)

  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionprops }) => (
        <CollectionPreview key={id} {...otherCollectionprops} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
})

export default connect(mapStateToProps)(CollectionOverview)
