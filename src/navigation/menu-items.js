import ContactScreen from '../screens/contact-screen/index'
import ContactShowScreen from '../screens/contact-screen/show'
import ContactAddScreen from '../screens/contact-screen/add'

export const router = [
    {
      route: "/",
      name: 'contact',
      element: <ContactScreen />,
      action: [
        {
            name: 'show',
            route: "/:id",
            element: <ContactShowScreen />,
        },
        {
          name: 'add',
          route: "/add",
          element: <ContactAddScreen />,
      },
      ]
    },
  ];