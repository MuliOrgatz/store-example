import React from 'react';
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'

import CollectionOverview from '../../components/collections-overview/collections-overview.components'
import CollectionPage from '../collection/collection.components'

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionOverviewWithSpiner = WithSpinner(CollectionOverview);
const CollectionPageWithSpiner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;
    
    componentDidMount() {
        const collectionRef = firestore.collection('collections');
        const {updateCollections} = this.props;

        this.unsubscribeFromSnapshot= collectionRef.onSnapshot(async snapshot =>{
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading: false});
        })
    }
    render() {
        const {match} = this.props;
        const {loading} = this.state;
        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} 
                render={(props) => <CollectionOverviewWithSpiner isLoading={loading} {...props}/>} />
                <Route path={`${match.path}/:collectionId`} 
                render={(props) => <CollectionPageWithSpiner isLoading={loading} {...props}/>}/>  
            </div>
        )
    }
}   

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => 
    dispatch(updateCollections(collectionsMap)) 
})

export default connect (null, mapDispatchToProps)(ShopPage);