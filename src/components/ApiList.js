import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { getApis } from '../actions/actions.apis';

import ApiCard from './ApiCard';



class ApiList extends React.Component { 
    componentWillMount() {
        this.props.fetchApis();
    }
   
    render() { 
        const { apis } = this.props;
        return (
            <div className='apis-list section'>
                {
                    apis && apis.map(api => {
                        return (
                            <ApiCard key={api.id} api={api}/>
                        )
                    })
                }
            </div>
        )
    }
}

ApiList.propTypes = {
    getApis: PropTypes.func,
    apis: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => {
    return {
        apis: state.apis.data,
        isFetching: state.apis.isFetching,
        error: state.apis.error
    }    
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchApis: () => {
            dispatch(getApis());
        },
    }
};
  


export default connect(mapStateToProps, mapDispatchToProps)(ApiList)

