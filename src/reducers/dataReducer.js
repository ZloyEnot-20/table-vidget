export default function dataReducer(state = [], action) {
  switch (action.type) {
    case "SET_DATA":
      return [
        ...action.payload.map((item, index) => ({
          ...item,
          date: item.date.slice(0, 10),
        })),
      ];
    case "GET_DATA":
      return [
        ...action.payload.slice(0, 20).map((item, index) => ({
          ...item,
          position: index + 1,
          state: item.adress.state,
        })),
      ];
    case "SORT_ITEMS":
      return [
        ...state
          .filter((item) => item.id)
          .sort((a, b) => {
            if (action.payload.ascending === true) {
              return a[action.payload.sortedItem].localeCompare(
                b[action.payload.sortedItem]
              );
            }

            return b[action.payload.sortedItem].localeCompare(
              a[action.payload.sortedItem]
            );
          }),
      ];

    case "SORT_POSITION":
      return [
        ...state.sort((a, b) => {
          if (action.payload.ascending === true) {
            return b[action.payload.sortedItem] - a[action.payload.sortedItem];
          }
          return a[action.payload.sortedItem] - b[action.payload.sortedItem];
        }),
      ];
    case "FILTER_BY_FIELD":
      if (!action.payload.givenValue || action.payload.field === "колонка")
        return action.payload.array; // If input is empty return initial array
      if (action.payload.condition === "Больше") {
        console.log(123);
        return [
          ...action.payload.array.filter(
            (item) => item[action.payload.field] > action.payload.givenValue
          ),
        ];
      } else if (action.payload.condition === "Меньше") {
        return [
          ...action.payload.array.filter(
            (item) => item[action.payload.field] < action.payload.givenValue
          ),
        ];
      } else if (action.payload.condition === "Равно") {
        if (action.payload.field === "name") {
          return [
            ...action.payload.array.filter((item) =>
              item[action.payload.field]
                .toString()
                .toLowerCase()
                .includes(action.payload.givenValue.toLowerCase())
            ),
          ];
        }
        return [
          ...action.payload.array.filter((item) => {
            return item[action.payload.field] === action.payload.givenValue;
          }),
        ];
      } else if (action.payload.condition === "Содержит") {
        return [
          ...action.payload.array.filter((item) =>
            item[action.payload.field]
              .toString()
              .toLowerCase()
              .includes(action.payload.givenValue.toLowerCase())
          ),
        ];
      }
      return [...action.payload.array];
    default:
      return state;
  }
}
