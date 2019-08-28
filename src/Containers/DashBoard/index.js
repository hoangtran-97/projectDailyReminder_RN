import React, { Component, Fragment } from 'react';
import {
    View,
    Text,
    StyleSheet,

} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {connect} from 'react-redux';
import DashBoardScreen from '../../Screens/DashBoard';
import colors from '../../constants/colors';

class DashBoard extends Component {
    constructor(props) {
        super(props);
        // const {data} = this.props;
        // this.state = {
        //     data
        // };
        console.log('REDUX', this.state);
    }

    render() {
        const {data, reduxState} = this.props;
        return (
            <SafeAreaView style={styles.container}>
                <DashBoardScreen {...this.props} data={data} reduxState={reduxState} />
            </SafeAreaView>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.dashBoardReducers.data,
        reduxState: state.dashBoardReducers
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: colors.green
    },
});
export default connect(mapStateToProps)(DashBoard);
