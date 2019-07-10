import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { getApis } from '../actions/actions.apis';
import ApiCard from './ApiCard';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


const styles = theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        flexWrap: 'wrap',
        padding: theme.spacing(8)
    },
    apiList: {
        paddingTop: theme.spacing(8),
    }
});

class ApiList extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            sortChoice: ""
        }
    }
    componentWillMount() {
        this.props.fetchApis();
    }


    onChange(e) {
        this.setState({
            sortChoice: e.target.value
        });
        this.sort(e.target.value, this.props.apis)
    }

    sort(sortChoice, arr){
        if(sortChoice) {
            sortChoice === 'ASC'
            ? arr.sort((a, b) => (a.title[0] > b.title[0]) ? 1 : -1 )
            : arr.sort((a, b) => (a.title[0] < b.title[0]) ? 1 : -1 );
        }
    }
   
    render() { 
        const { apis, classes } = this.props;
        const { sortChoice } = this.state;

        return (
            <Grid container className={classes.root} justify="center">
                <Grid container justify="center" spacing={8}>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="h4" component="h1" color="primary">Api Catalogue</Typography>
                        <Divider component="hr" />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="h5" component="label" color="primary">Sort By: </Typography>
                        <Select native value={sortChoice} onChange={this.onChange.bind(this)}>
                            <option value=""/>
                            <option value="ASC">A-Z</option>
                            <option value="DESC">Z-A</option>
                        </Select>
                    </Grid>
                </Grid>
                
                <Grid className={classes.apiList} container xs={12} lg={11} direction="row" justify="center" alignItems="stretch" spacing={8}>
                {
                apis && apis.map(api => {
                    return (
                    <Grid item xs={12} md={4} key={api.id}>
                        <ApiCard api={api}/>
                    </Grid>
                    )
                })
                }
                </Grid>
            </Grid>   
        )
    }
}

ApiList.propTypes = {
    getApis: PropTypes.func,
    apis: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
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
  


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ApiList))



