import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'notification:flashcards'

const notificationSetup = () => ({
  title: 'flashcards',
  body: 'Checkout the new questions today',
  ios: { sound: true },
  android: {
    sound: true,
    vibrate: true,
    priority: 'high',
    sticky: false,
  },
})

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
  .then(JSON.parse)
  .then(data => {
    if (!data) {
      Permissions.askAsync(Permissions.NOTIFICATIONS)
      .then(({ status }) => {
        if (status === 'granted') {
          Notifications.cancelAllScheduledNotificationsAsync()

          let tomorrow = new Date()
          tomorrow.setDate(tomorrow.getDate() + 1)
          tomorrow.setHours(20, 0, 0)

          Notifications.scheduleLocalNotificationAsync(
            notificationSetup(), { time: tomorrow, repeat: 'day' }
          )

          AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
        }
      })
    }
  })
}

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}
