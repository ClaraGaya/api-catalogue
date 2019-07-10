import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { getApis } from '../actions/actions.apis';

import ApiCard from './ApiCard';



class ApiList extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            sortChoice: null
        }
    }
    componentWillMount() {
        this.props.fetchApis();
    }

    handleChange = sortChoice => {
        this.setState({ sortChoice });
        console.log(`Sorting Choice:`, sortChoice);
    };
   
    render() { 
        const { apis } = this.props;
        const { sortChoice } = this.state;

        if(sortChoice) {
            sortChoice === 'ASC'
            ? apis.sort((a, b) => (a.title[0] > b.title[0]) ? 1 : -1 )
            : apis.sort((a, b) => (a.title[0] < b.title[0]) ? 1 : -1 );
        }

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

