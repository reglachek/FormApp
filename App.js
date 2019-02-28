import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'

import PersonalDataScreen from './src/components/PersonalDataScreen'
import FinancialDataScreen from './src/components/FinancialDataScreen'

const Navigator = createMaterialTopTabNavigator({
    PersonalDataScreen: {
        screen: PersonalDataScreen
    },
    FinancialDataScreen: {
        screen: FinancialDataScreen
    }
}, {
    defaultNavigationOptions: {
        tabBarOptions: {
            upperCaseLabel: false,
            activeTintColor: '#2f323a',
            inactiveTintColor: '#989dad',
            indicatorStyle: {
                backgroundColor: 'none'
            },
            tabStyle: {
                backgroundColor: '#fff'
            },
            style: {
                backgroundColor: '#e1e2e5',
                elevation: 0
            },
            labelStyle: {
                fontWeight: '100',
            }
        }
    }
})

export default createAppContainer(Navigator)
