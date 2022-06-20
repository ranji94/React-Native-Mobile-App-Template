import { mapCounterDispatchToProps, mapCounterStateToProps } from '@store'
import { connect } from 'react-redux'
import { MenuScreen } from './menu-screen'

export default connect(
    mapCounterStateToProps,
    mapCounterDispatchToProps
)(MenuScreen)
