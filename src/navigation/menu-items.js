/* eslint-disable no-useless-escape */
import ContactScreen from '../screens/contact-screen/index'
import ContactShowScreen from '../screens/contact-screen/show'
import ContactEditScreen from '../screens/contact-screen/edit'
import ContactAddScreen from '../screens/contact-screen/add'

export const router = [
    {
      route: "/",
      name: 'contact',
      element: <ContactScreen />,
      action: [
        {
            name: 'show',
            route: "/:id/show",
            element: <ContactShowScreen />,
        },
        {
          name: 'edit',
          route: "/:id/edit",
          element: <ContactEditScreen />,
      },
        {
          name: 'add',
          route: "/add",
          element: <ContactAddScreen />,
      },
      ]
    },
  ];