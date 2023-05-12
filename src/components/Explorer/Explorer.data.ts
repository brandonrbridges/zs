import { flattenTree } from 'react-accessible-treeview'

const treeData = {
  name: '',
  children: [
    {
      name: 'Welcome to Zerosolver',
      id: 'welcome',
    },
    {
      name: 'How to use',
      id: 'how-to-use',
    },
    {
      name: '1knl Ignition',
      children: [
        {
          name: '100bb',
          children: [
            {
              name: 'Single Raise Pot',
              children: [
                {
                  name: 'Small, Big Blind',
                  children: [
                    {
                      name: 'Small Blind',
                      id: 'small-blind',
                    },
                    {
                      name: 'Big Blind',
                    },
                    {
                      name: 'Button',
                    },
                    {
                      name: 'Cutoff',
                    },
                    {
                      name: 'Middle Position',
                    },
                    {
                      name: 'Early Position',
                    },
                  ],
                },
                // {
                //   name: 'Button and Cutoff',
                //   children: [{}],
                // },
                // {
                //   name: 'Middle & Early Position',
                //   children: [{}],
                // },
              ],
            },
            // {
            //   name: '3bet Pot',
            //   children: [{}],
            // },
            // {
            //   name: '4bet Pot',
            //   children: [{}],
            // },
          ],
        },
      ],
    },
  ],
}

export const data = flattenTree(treeData)
