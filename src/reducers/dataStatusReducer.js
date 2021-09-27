const status = [
  {
    name: "name",
    ascending: true,
  },
  {
    name: "date",
    ascending: true,
  },
  {
    name: "amount",
    ascending: true,
  },
  {
    name: "distance",
    ascending: true,
  },
  {
    name: "position",
    ascending: true,
  },
  {
    name: "id",
    ascending: true,
  },
];

export default function dataStatusReducer(state = status, action) {
  switch (action.type) {
    case "CHANGE_STATUS":
      return [
        ...state.map((item) => {
          if (item.name === action.payload.name)
            return { ...item, ascending: !item.ascending };
          return item;
        }),
      ];

    default:
      return state;
  }
}
