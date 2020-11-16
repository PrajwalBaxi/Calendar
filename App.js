import {Navigation} from 'react-native-navigation';
import {registerScreens} from './screens';
import {LocaleConfig} from 'react-native-calendars';

registerScreens();

console.ignoredYellowBox = ['Remote debugger'];

LocaleConfig.locales['en'] = {
  formatAccessibilityLabel: 'dddd d \'of\' MMMM \'of\' yyyy',
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  monthNamesShort: [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec'
  ],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
};

LocaleConfig.defaultLocale = 'en';


Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Menu',
              options: {
                topBar: {
                  title: {
                    text: 'Wix RN Calendars'
                  }
                }
              }
            }
          }
        ]
      }
    }
  });
});
